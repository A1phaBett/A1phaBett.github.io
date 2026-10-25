/* 渲染与交互。正常情况你不需要改这个文件 —— 内容都在 js/data.js 里。 */
(function () {
  'use strict';

  var root = document.documentElement;
  var state = { lang: root.dataset.lang === 'en' ? 'en' : 'zh', idx: 0, items: [] };

  function $(s, r) { return (r || document).querySelector(s); }
  function L() { return SITE[state.lang]; }
  function pick(v) { return v == null ? '' : (typeof v === 'string' ? v : (v[state.lang] || v.zh || '')); }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function announce(msg) { $('#live').textContent = msg; }

  /* ---------------- 首屏：创作标签 + 移动端索引 ---------------- */
  function buildChips() {
    var ul = $('#chips');
    ul.textContent = '';
    L().chips.forEach(function (c) { ul.appendChild(el('li', 'chips__i', c)); });
  }

  function buildIdx() {
    var ul = $('#idx');
    ul.textContent = '';
    L().idx.forEach(function (pair, i) {
      var li = el('li');
      var a = el('a', 'idx__a');
      a.href = pair[0];
      a.appendChild(el('span', 'idx__n mono', pad(i + 1)));
      a.appendChild(el('span', 'idx__l', pair[1]));
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  /* ---------------- 属性表 ---------------- */
  function buildProps() {
    var dl = $('#props');
    dl.textContent = '';
    L().props.forEach(function (row) {
      dl.appendChild(el('dt', 'props__k mono', row[0]));
      dl.appendChild(el('dd', 'props__v', row[1]));
    });
  }

  /* ---------------- 形象 ---------------- */
  function buildPortrait() {
    var box = $('#portraitPh');
    box.textContent = '';
    var src = SITE.portrait ? SITE.portrait[state.lang] : null;

    if (src) {
      var img = el('img', 'portrait__img');
      img.src = src;
      img.alt = L().ocName + ' — ' + L().portraitTitle;
      img.decoding = 'async';
      box.appendChild(img);
      box.classList.add('has-img');
    } else {
      box.classList.remove('has-img');
      box.appendChild(el('span', 'ph__id mono', pick(SITE.meta.portraitId)));
      box.appendChild(el('span', 'ph__note mono', L().phNote));
      box.appendChild(el('span', 'ph__hint mono', L().phHint));
    }
  }

  function buildParos() {
    var ul = $('#paros');
    ul.textContent = '';
    if (!SITE.paros.length) {
      ul.appendChild(el('li', 'paros__empty', L().paroEmpty));
      return;
    }
    SITE.paros.forEach(function (p) { ul.appendChild(el('li', 'paros__i', pick(p))); });
  }

  /* ---------------- 作品 ---------------- */
  function buildWorks() {
    var body = $('#worksBody');
    body.textContent = '';
    state.items = SITE.works.slice();
    $('#worksMeta').textContent = pick(L().worksMeta) + ' · ' + SITE.works.length + ' ' + L().units;

    SITE.types.forEach(function (type) {
      var list = SITE.works.filter(function (w) { return w.type === type.key; });

      var group = el('section', 'grp');
      var head = el('div', 'grp__head');
      head.appendChild(el('h3', 'grp__t', pick(type)));
      head.appendChild(el('p', 'grp__m mono', pick(type.en ? { zh: type.en, en: type.en } : type) + ' · ' + pad(list.length)));
      group.appendChild(head);

      if (!list.length) {
        group.appendChild(el('p', 'grp__empty', L().worksEmpty));
      } else {
        var grid = el('div', 'grid');
        list.forEach(function (w) {
          var card = el('button', 'card');
          card.type = 'button';
          card.setAttribute('data-id', w.id);

          var fig = el('span', 'card__fig');
          if (w.src) {
            var img = el('img', 'card__img');
            img.src = w.src;
            img.alt = pick(w.alt) || pick(w.title);
            img.loading = 'lazy';
            img.decoding = 'async';
            fig.appendChild(img);
            card.setAttribute('aria-label', w.id + ' ' + pick(w.title));
          } else {
            fig.appendChild(el('span', 'ph'));
            fig.appendChild(el('span', 'ph__id mono', w.id));
            fig.appendChild(el('span', 'ph__t mono', type.en));
            card.setAttribute('aria-label', w.id + ' ' + pick(w.title) + ' · ' + L().phNote);
          }
          fig.appendChild(el('span', 'card__bar'));
          card.appendChild(fig);

          var meta = el('span', 'card__meta');
          meta.appendChild(el('span', 'card__no mono', w.id));
          meta.appendChild(el('span', 'card__title', pick(w.title)));
          if (w.year && w.year !== '—') meta.appendChild(el('span', 'card__year mono', w.year));
          card.appendChild(meta);

          card.addEventListener('click', function () { openLb(w.id); });
          grid.appendChild(card);
        });
        group.appendChild(grid);
      }
      body.appendChild(group);
    });
  }

  function pad(n) { return n < 10 ? '0' + n : String(n); }

  /* ---------------- 信号（社媒） ---------------- */
  function buildSignal() {
    var ul = $('#sigList');
    ul.textContent = '';
    SITE.social.forEach(function (s) {
      var li = el('li', 'sig__row');
      var isCopy = !!s.copy;
      var node = isCopy ? el('button', 'sig__link') : el('a', 'sig__link');
      if (isCopy) { node.type = 'button'; } else { node.href = s.url; node.target = '_blank'; node.rel = 'noopener noreferrer me'; }

      node.appendChild(el('span', 'sig__no mono', s.no));
      node.appendChild(el('span', 'sig__name', pick(s)));
      node.appendChild(el('span', 'sig__handle mono', s.handle));
      node.appendChild(el('span', 'sig__go mono', isCopy ? '⧉' : '↗'));
      node.setAttribute('aria-label', pick(s) + ' ' + s.handle + (isCopy ? ' · ' + L().copyHint : ''));

      if (isCopy) {
        node.addEventListener('click', function () { copyText(s.handle, node); });
      }

      li.appendChild(node);
      ul.appendChild(li);
    });
  }

  function copyText(text, node) {
    var done = function () {
      node.classList.add('is-copied');
      node.querySelector('.sig__go').textContent = '✓';
      announce(L().copied + ': ' + text);
      setTimeout(function () {
        node.classList.remove('is-copied');
        node.querySelector('.sig__go').textContent = '⧉';
      }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { legacyCopy(text); done(); });
    } else {
      legacyCopy(text); done();
    }
  }

  function legacyCopy(text) {
    var ta = el('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
  }

  /* ---------------- 记录 ---------------- */
  function buildLog() {
    var ol = $('#logList');
    ol.textContent = '';
    SITE.log.forEach(function (entry) {
      var li = el('li', 'log__row');
      li.appendChild(el('span', 'log__date mono', entry.date));
      li.appendChild(el('p', 'log__text', pick(entry.text)));
      ol.appendChild(li);
    });
  }

  /* ---------------- 灯箱 ---------------- */
  var lb = $('#lb');

  function openLb(id) {
    var i = state.items.findIndex(function (w) { return w.id === id; });
    if (i < 0) return;
    state.idx = i;
    renderLb();
    if (typeof lb.showModal === 'function') lb.showModal(); else lb.setAttribute('open', '');
  }

  function renderLb() {
    var w = state.items[state.idx];
    var type = SITE.types.find(function (t) { return t.key === w.type; });
    var stage = $('#lbStage');
    stage.textContent = '';

    if (w.src) {
      var img = el('img', 'lb__img');
      img.src = w.src;
      img.alt = pick(w.alt) || pick(w.title);
      stage.appendChild(img);
    } else {
      var ph = el('div', 'ph ph--big');
      ph.appendChild(el('span', 'ph__id mono', w.id));
      ph.appendChild(el('span', 'ph__note mono', L().phNote));
      stage.appendChild(ph);
    }

    $('#lbId').textContent = w.id;
    $('#lbCount').textContent = pad(state.idx + 1) + ' / ' + pad(state.items.length);
    $('#lbTitle').textContent = pick(w.title);
    $('#lbMeta').textContent = [type ? pick(type.en ? { zh: type.en, en: type.en } : type) : '', w.year !== '—' ? w.year : '']
      .filter(Boolean).join('  ·  ');
  }

  function step(d) {
    state.idx = (state.idx + d + state.items.length) % state.items.length;
    renderLb();
  }

  $('#lbPrev').addEventListener('click', function () { step(-1); });
  $('#lbNext').addEventListener('click', function () { step(1); });
  $('#lbClose').addEventListener('click', function () { lb.close(); });
  lb.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); step(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); step(1); }
  });

  /* ---------------- 切语言 = 换卷宗 ---------------- */
  function setLang(next) {
    if (next === state.lang) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    root.classList.add('is-switching');
    if (!reduce) runScan();

    state.lang = next;
    root.dataset.lang = next;
    render();

    try { localStorage.setItem('ab-lang', next); } catch (e) {}
    setTimeout(function () { root.classList.remove('is-switching'); }, 460);
    announce(next === 'en' ? 'Language: English' : '语言：中文');
  }

  function runScan() {
    var s = $('#scan');
    s.classList.remove('run');
    void s.offsetWidth;
    s.classList.add('run');
    setTimeout(function () { s.classList.remove('run'); }, 620);
  }

  function render() {
    var t = L();
    root.lang = t.lang;
    document.title = pick(SITE.meta.title);
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', pick(SITE.meta.desc));
    $('[data-i="barFile"]').textContent = pick(SITE.bar.file);
    $('[data-i="barStatus"]').textContent = pick(SITE.bar.status);

    var nodes = document.querySelectorAll('[data-i]');
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute('data-i');
      if (k === 'barFile' || k === 'barStatus') continue;
      if (typeof t[k] === 'string') nodes[i].textContent = t[k];
    }

    document.querySelectorAll('.lang__b').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.setLang === state.lang));
    });

    buildChips();
    buildIdx();
    buildProps();
    buildPortrait();
    buildParos();
    buildWorks();
    buildSignal();
    buildLog();
    setReadout(currentSection);
  }

  /* ---------------- 顶栏读数 / 左侧索引高亮 ---------------- */
  var currentSection = 'identity';
  var sections = ['identity', 'portrait', 'works', 'signal', 'log'];

  function setReadout(id) {
    var i = sections.indexOf(id);
    if (i < 0) return;
    var rail = document.querySelector('[data-rail="' + id + '"]');
    var label = rail ? rail.querySelector('.rail__lb').textContent : '';
    $('#barReadout').textContent = '▸ ' + pad(i + 1) + ' ' + label;
    document.querySelectorAll('[data-rail]').forEach(function (a) {
      a.classList.toggle('is-on', a.dataset.rail === id);
      if (a.dataset.rail === id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }

  function watchSections() {
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { currentSection = en.target.id; setReadout(currentSection); }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(function (id) {
      var node = document.getElementById(id);
      if (node) io.observe(node);
    });
  }

  /* ---------------- 时钟 ---------------- */
  function tick() {
    var d = new Date();
    $('#clock').textContent = pad(d.getHours()) + ':' + pad(d.getMinutes());
  }

  /* ---------------- 启动 ---------------- */
  document.querySelectorAll('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.setLang); });
  });

  render();
  setReadout('identity');
  watchSections();
  tick();
  setInterval(tick, 30000);
})();
