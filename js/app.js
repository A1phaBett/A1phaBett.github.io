/* 渲染与交互。正常情况你不需要改这个文件 —— 内容都在 js/data.js 里。 */
(function () {
  'use strict';

  var root = document.documentElement;
  var state = { lang: root.dataset.lang === 'en' ? 'en' : 'zh', idx: 0, items: [] };

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function L() { return SITE[state.lang]; }
  function pick(v) { return v == null ? '' : (typeof v === 'string' ? v : (v[state.lang] || v.zh || '')); }
  function pad(n) { return n < 10 ? '0' + n : String(n); }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function announce(msg) { $('#live').textContent = msg; }

  /* ---------------- 立绘 / 占位图 ---------------- */
  function fillFigure(box, src, alt, idText, noteText, hintText) {
    box.textContent = '';
    if (src) {
      var img = el('img', 'figure__img');
      img.src = src;
      img.alt = alt || '';
      img.decoding = 'async';
      box.appendChild(img);
      box.classList.add('has-img');
    } else {
      box.classList.remove('has-img');
      box.appendChild(el('span', 'ph__id mono', idText || ''));
      box.appendChild(el('span', 'ph__note mono', noteText || ''));
      if (hintText) box.appendChild(el('span', 'ph__hint mono', hintText));
    }
  }

  /* ---------------- 首屏 ---------------- */
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

  function buildProps() {
    var dl = $('#props');
    dl.textContent = '';
    L().props.forEach(function (row) {
      dl.appendChild(el('dt', 'props__k mono', row[0]));
      dl.appendChild(el('dd', 'props__v', row[1]));
    });
  }

  /* ---------------- 圈子：可展开的抽屉 ---------------- */
  function buildFan() {
    var box = $('#fan');
    box.textContent = '';
    SITE.fandom.forEach(function (g, i) {
      var d = el('details', 'fan__g');
      var s = el('summary', 'fan__s');

      s.appendChild(el('span', 'fan__no mono', pad(i + 1)));
      s.appendChild(el('span', 'fan__t', pick(g.title)));
      s.appendChild(el('span', 'fan__h mono', pick(g.hint)));
      var ic = el('span', 'fan__ic');
      ic.setAttribute('aria-hidden', 'true');
      s.appendChild(ic);

      d.appendChild(s);

      var panel = el('div', 'fan__p');
      g.rows.forEach(function (row) {
        var r = el('div', 'fan__row');
        r.appendChild(el('span', 'fan__k mono', pick(row.k)));
        var ul = el('ul', 'fan__items');
        row.items.forEach(function (t) { ul.appendChild(el('li', 'fan__item', pick(t))); });
        r.appendChild(ul);
        panel.appendChild(r);
      });
      d.appendChild(panel);
      box.appendChild(d);
    });
  }

  /* ---------------- 自设 ---------------- */
  function ocImages(o) {
    var list = (o.gallery && o.gallery.length) ? o.gallery.slice() : [];
    if (!list.length && o.src) list = [o.src];
    return list;
  }

  function buildOc() {
    var o = SITE.oc[state.lang] || SITE.oc.zh;
    var imgs = ocImages(o);
    fillFigure($('#ocPh'), imgs[0] || null, o.name + ' — ' + L().ocTitle, o.id, L().phNote, L().phHint);
    $('#ocId').textContent = o.id;
    $('#ocName').textContent = o.name;
    $('#ocLine').textContent = o.line;
  }

  var ocDlg = $('#ocDlg');

  function openOc() {
    var o = SITE.oc[state.lang] || SITE.oc.zh;
    var imgs = ocImages(o);

    $('#ocdId').textContent = o.id;
    $('#ocdName').textContent = o.name;

    var pron = $('#ocdPron');
    pron.textContent = o.pronouce ? '/' + o.pronouce + '/' : '';
    pron.hidden = !o.pronouce;

    $('#ocdLine').textContent = o.line;

    var dl = $('#ocdProps');
    dl.textContent = '';
    [[L().ocRoleLabel, o.role], [L().ocFieldLabel, o.field]].forEach(function (row) {
      if (!row[1]) return;
      dl.appendChild(el('dt', 'props__k mono', row[0]));
      dl.appendChild(el('dd', 'props__v', row[1]));
    });
    dl.hidden = !dl.children.length;

    var list = $('#ocdParos');
    list.textContent = '';
    if (!o.paros || !o.paros.length) {
      list.appendChild(el('li', 'paros__empty', L().paroEmpty));
    } else {
      o.paros.forEach(function (p) { list.appendChild(el('li', 'paros__i', pick(p))); });
    }

    stackBuild(imgs, { id: o.id, note: L().phNote, hint: L().phHint });
    $('#ocNav').hidden = imgs.length < 2;

    if (typeof ocDlg.showModal === 'function') ocDlg.showModal(); else ocDlg.setAttribute('open', '');
  }

  /* ---------------- 图片卡片堆叠 ---------------- */
  var stackEl = $('#ocStack');
  var stackCards = [];
  var stackIdx = 0;
  var drag = { on: false, x0: 0, dx: 0 };

  function stackBuild(items, ph) {
    stackEl.textContent = '';
    stackCards = [];
    stackIdx = 0;
    items.forEach(function (src) {
      var card = el('div', 'stack__card');
      var img = el('img');
      img.alt = '';
      img.draggable = false;
      img.src = src;
      card.appendChild(img);
      stackEl.appendChild(card);
      stackCards.push(card);
    });

    /* 一张图都没有时，卡里放占位格子 */
    if (!stackCards.length && ph) {
      var empty = el('div', 'stack__card is-top');
      var box = el('div', 'ph ph--tall');
      box.appendChild(el('span', 'ph__id mono', ph.id || ''));
      box.appendChild(el('span', 'ph__note mono', ph.note || ''));
      box.appendChild(el('span', 'ph__hint mono', ph.hint || ''));
      empty.appendChild(box);
      stackEl.appendChild(empty);
      stackCards.push(empty);
    }

    stackApply();
  }

  function stackApply() {
    stackCards.forEach(function (card, i) {
      var off = i - stackIdx;
      var abs = Math.abs(off);

      if (abs > 2) {
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
        card.style.zIndex = '0';
        card.classList.remove('is-top');
        card.style.transform = 'translate(-50%, -50%) scale(.94)';
        return;
      }

      card.classList.toggle('is-top', abs === 0);
      card.style.opacity = '1';
      card.style.zIndex = String(100 - abs);
      card.style.pointerEvents = abs === 0 ? 'auto' : 'none';
      card.style.transform =
        'translate(-50%, -50%) translateX(' + (off * 12) + 'px) translateY(' + (abs * 9) + 'px)' +
        ' scale(' + (1 - abs * 0.05) + ') rotate(' + (off * 1.1) + 'deg)';
    });

    $('#ocCount').textContent = stackCards.length ? (stackIdx + 1) + ' / ' + stackCards.length : '';
  }

  function stackStep(d) {
    if (stackCards.length < 2) return;
    stackIdx = (stackIdx + d + stackCards.length) % stackCards.length;
    stackApply();
  }

  stackEl.addEventListener('pointerdown', function (e) {
    if (stackCards.length < 2) return;
    drag.on = true;
    drag.x0 = e.clientX;
    drag.dx = 0;
    stackEl.classList.add('is-drag');
    try { stackEl.setPointerCapture(e.pointerId); } catch (err) {}
  });

  stackEl.addEventListener('pointermove', function (e) {
    if (!drag.on) return;
    drag.dx = e.clientX - drag.x0;
    var card = stackCards[stackIdx];
    if (card) {
      card.style.transform =
        'translate(-50%, -50%) translateX(' + drag.dx + 'px) rotate(' + (drag.dx * 0.02) + 'deg)';
    }
  });

  function stackRelease() {
    if (!drag.on) return;
    drag.on = false;
    stackEl.classList.remove('is-drag');
    if (Math.abs(drag.dx) > 48) stackStep(drag.dx < 0 ? 1 : -1);
    else stackApply();
    drag.dx = 0;
  }

  stackEl.addEventListener('pointerup', stackRelease);
  stackEl.addEventListener('pointercancel', stackRelease);
  stackEl.addEventListener('pointerleave', stackRelease);

  $('#ocPrev').addEventListener('click', function () { stackStep(-1); });
  $('#ocNext').addEventListener('click', function () { stackStep(1); });
  ocDlg.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); stackStep(-1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); stackStep(1); }
  });

  $('#ocOpen').addEventListener('click', openOc);
  $('#ocClose').addEventListener('click', function () { ocDlg.close(); });

  /* ---------------- 更新记录（页脚小链接） ---------------- */
  var logDlg = $('#logDlg');
  $('#logOpen').addEventListener('click', function () {
    if (typeof logDlg.showModal === 'function') logDlg.showModal(); else logDlg.setAttribute('open', '');
  });
  $('#logClose').addEventListener('click', function () { logDlg.close(); });

  /* ---------------- 作品 ---------------- */
  function buildWorks() {
    var body = $('#worksBody');
    body.textContent = '';
    state.items = SITE.works.filter(function (w) { return w.type === 'ill'; });

    /* types 里写了 only: 'zh' 的，就只在这一种语言下出现 */
    var types = SITE.types.filter(function (t) { return !t.only || t.only === state.lang; });
    var keys = types.map(function (t) { return t.key; });
    var shown = SITE.works.filter(function (w) { return keys.indexOf(w.type) >= 0; });

    $('#worksMeta').textContent = pick(L().worksMeta) + ' · ' + shown.length + ' ' + L().units;

    types.forEach(function (type) {
      var list = SITE.works.filter(function (w) { return w.type === type.key; });

      var grp = el('section', 'grp');
      var head = el('div', 'grp__head');
      head.appendChild(el('h3', 'grp__t', pick(type)));
      head.appendChild(el('p', 'grp__m mono', type.en + ' · ' + pad(list.length)));
      grp.appendChild(head);

      if (!list.length) {
        grp.appendChild(el('p', 'grp__empty', L().worksEmpty));
      } else if (type.layout === 'links') {
        grp.appendChild(buildLinkList(list));
      } else {
        grp.appendChild(buildGrid(list, type));
      }
      body.appendChild(grp);
    });
  }

  function buildGrid(list, type) {
    var grid = el('div', 'grid');
    list.forEach(function (w) {
      var card = el('button', 'card');
      card.type = 'button';

      var fig = el('span', 'card__fig');
      if (w.src) {
        var img = el('img', 'card__img');
        img.src = w.src;
        img.alt = pick(w.alt) || pick(w.title);
        img.loading = 'lazy';
        fig.appendChild(img);
      } else {
        fig.appendChild(el('span', 'ph'));
        fig.appendChild(el('span', 'ph__id mono', w.id));
        fig.appendChild(el('span', 'ph__t mono', type.en));
      }
      fig.appendChild(el('span', 'card__bar'));
      card.appendChild(fig);

      var meta = el('span', 'card__meta');
      meta.appendChild(el('span', 'card__no mono', w.id));
      meta.appendChild(el('span', 'card__title', pick(w.title)));
      if (w.year && w.year !== '—') meta.appendChild(el('span', 'card__year mono', w.year));
      card.appendChild(meta);

      card.setAttribute('aria-label', w.id + ' ' + pick(w.title) + (w.src ? '' : ' · ' + L().phNote));
      card.addEventListener('click', function () { openLb(w.id); });
      grid.appendChild(card);
    });
    return grid;
  }

  function buildLinkList(list) {
    var ul = el('ul', 'lnks');
    list.forEach(function (w) {
      var li = el('li', 'lnks__row');
      var hasUrl = !!w.url;
      var n = hasUrl ? el('a', 'lnk') : el('span', 'lnk is-off');

      if (hasUrl) {
        n.href = w.url;
        n.target = '_blank';
        n.rel = 'noopener noreferrer';
        n.setAttribute('aria-label', pick(w.title) + ' — ' + (w.platform || '') + '（新窗口打开）');
      }

      n.appendChild(el('span', 'lnk__no mono', w.id));
      n.appendChild(el('span', 'lnk__t', pick(w.title)));
      n.appendChild(el('span', 'lnk__p mono', w.platform || ''));
      n.appendChild(el('span', 'lnk__go mono', hasUrl ? '↗' : L().linkPending));

      li.appendChild(n);
      ul.appendChild(li);
    });
    return ul;
  }

  /* ---------------- 信号 ---------------- */
  function buildSignal() {
    var ul = $('#sigList');
    ul.textContent = '';
    SITE.social.forEach(function (s) {
      var li = el('li', 'sig__row');
      var isCopy = !!s.copy;
      var node = isCopy ? el('button', 'sig__link') : el('a', 'sig__link');

      if (isCopy) {
        node.type = 'button';
      } else {
        node.href = s.url;
        node.target = '_blank';
        node.rel = 'noopener noreferrer me';
      }

      node.appendChild(el('span', 'sig__no mono', s.no));
      node.appendChild(el('span', 'sig__name', pick(s)));
      node.appendChild(el('span', 'sig__handle mono', s.handle));
      node.appendChild(el('span', 'sig__go mono', isCopy ? '⧉' : '↗'));
      node.setAttribute('aria-label', pick(s) + ' ' + s.handle + (isCopy ? ' · ' + L().copyHint : ''));

      if (isCopy) node.addEventListener('click', function () { copyText(s.handle, node); });

      li.appendChild(node);
      ul.appendChild(li);
    });
  }

  function copyText(text, node) {
    var go = node.querySelector('.sig__go');
    var done = function () {
      node.classList.add('is-copied');
      go.textContent = '✓';
      announce(L().copied + ': ' + text);
      setTimeout(function () {
        node.classList.remove('is-copied');
        go.textContent = '⧉';
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

  /* ---------------- 插画灯箱 ---------------- */
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
    var type = SITE.types.filter(function (t) { return t.key === w.type; })[0];
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
    $('#lbMeta').textContent = [type ? type.en : '', w.year && w.year !== '—' ? w.year : '']
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

  /* ---------------- 留言箱 ---------------- */
  var noteForm = $('#noteForm');
  var noteOut = $('#nOut');
  var noteMsg = $('#nMsg');
  var noteName = $('#nName');
  var noteBtn = $('#nSend');
  var noteCount = $('#nCount');
  var noteOn = !!SITE.noteEndpoint;

  function noteState() {
    noteCount.textContent = noteMsg.value.length + ' / 600';
    if (!noteOn) {
      noteForm.classList.add('is-off');
      noteOut.textContent = L().noteOff;
      $$('#noteForm input, #noteForm textarea, #noteForm button').forEach(function (e) {
        if (e.name !== '_gotcha') e.disabled = true;
      });
    }
  }

  noteMsg.addEventListener('input', function () {
    noteCount.textContent = noteMsg.value.length + ' / 600';
  });

  noteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!noteOn) return;

    var msg = noteMsg.value.trim();
    if (noteForm.querySelector('[name="_gotcha"]').value) { noteSucceed(); return; }
    if (!msg) {
      noteOut.textContent = L().noteEmpty;
      noteMsg.focus();
      return;
    }

    noteOut.textContent = L().noteSending;
    noteBtn.disabled = true;

    var req = noteRequest(noteName.value.trim() || '匿名 / anonymous', msg);

    fetch(req.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(req.body)
    }).then(function (r) {
      if (!r.ok) throw new Error('rejected');
      return r.json().catch(function () { return {}; });
    }).then(function () {
      noteSucceed();
    }).catch(function () {
      noteOut.textContent = L().noteErr;
    }).then(function () {
      noteBtn.disabled = false;
    });
  });

  /* 三种服务都能用，按你填的内容自动判断 */
  function noteRequest(name, message) {
    var ep = String(SITE.noteEndpoint || '').trim();
    var isUrl = /^https?:\/\//i.test(ep);

    if (isUrl && /formsubmit\.co/i.test(ep)) {
      var u = ep.replace(/\/+$/, '');
      if (!/\/ajax\//i.test(u)) u = u.replace(/formsubmit\.co\/(?!ajax\/)/i, 'formsubmit.co/ajax/');
      return { url: u, body: { name: name, message: message, _subject: 'A1phaBet · 新纸条' } };
    }
    if (isUrl && /formspree\.io/i.test(ep)) {
      return { url: ep, body: { name: name, message: message, _subject: 'A1phaBet · 新纸条' } };
    }
    if (isUrl) {
      return { url: ep, body: { name: name, message: message } };
    }
    return {
      url: 'https://api.web3forms.com/submit',
      body: {
        access_key: ep,
        name: name,
        message: message,
        subject: 'A1phaBet · 新纸条',
        from_name: 'A1phaBet'
      }
    };
  }

  function noteSucceed() {
    noteOut.textContent = L().noteOk;
    noteForm.reset();
    noteCount.textContent = '0 / 600';
    announce(L().noteOk);
  }

  /* ---------------- 切语言 ---------------- */
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
    var md = $('meta[name="description"]');
    if (md) md.setAttribute('content', pick(SITE.meta.desc));

    $$('[data-i]').forEach(function (node) {
      var k = node.getAttribute('data-i');
      if (typeof t[k] === 'string') node.textContent = t[k];
    });
    $('[data-i="barFile"]').textContent = pick(SITE.bar.file);
    $('[data-i="barStatus"]').textContent = pick(SITE.bar.status);

    /* 这句允许留空，空了就用默认文案（英文界面别掉出中文） */
    var jump = $('[data-i="jumpOc"]');
    if (jump) jump.textContent = t.jumpOc || (state.lang === 'en' ? 'See the OC' : '查看自设');

    $$('[data-ph-i]').forEach(function (node) {
      var k = node.getAttribute('data-ph-i');
      if (typeof t[k] === 'string') node.setAttribute('placeholder', t[k]);
    });

    $('#updated').textContent = SITE.meta.updated;

    $$('.lang__b').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.setLang === state.lang));
    });

    buildChips();
    buildIdx();
    buildProps();
    buildFan();
    buildOc();
    buildWorks();
    buildSignal();
    buildLog();
    noteState();
    setReadout(currentSection);
  }

  /* ---------------- 顶栏读数 / 索引高亮 ---------------- */
  var currentSection = 'identity';
  var sections = ['identity', 'oc', 'works', 'signal', 'notes'];

  function setReadout(id) {
    var i = sections.indexOf(id);
    if (i < 0) return;
    var rail = $('[data-rail="' + id + '"]');
    var label = rail ? rail.querySelector('.rail__lb').textContent : '';
    $('#barReadout').textContent = '▸ ' + pad(i + 1) + ' ' + label;
    $$('[data-rail]').forEach(function (a) {
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
  $$('[data-set-lang]').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.setLang); });
  });

  render();
  setReadout('identity');
  watchSections();
  tick();
  setInterval(tick, 30000);
})();
