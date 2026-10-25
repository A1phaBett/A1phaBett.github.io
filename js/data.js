/* ============================================================
   这里是全站唯一的"内容总表"。
   要改文字、换图、加作品、改链接 —— 全部在这个文件里改。
   改完刷新页面就能看到，不需要动 index.html。
   规则：中文写在 zh: {} 里，英文写在 en: {} 里，对应字段一一配对。
   ============================================================ */

const SITE = {

  /* ---------- 站点元信息 ---------- */
  meta: {
    title: { zh: 'A1phaBet · 归档终端', en: 'A1phaBet · Archive Terminal' },
    desc:  { zh: '周柊 / AlphaBet 的归档终端：身份、形象、作品与信号。',
             en: 'Archive terminal for Zhou Zhong and AlphaBet: identity, portrait, works, signal.' },
    updated: '2026-10-25',
    portraitId: { zh: '07-ZZ', en: 'AB-01' }
  },

  /* ---------- 顶栏三格 ---------- */
  bar: {
    file:   { zh: 'FILE 07—ZZ', en: 'FILE AB—01' },
    status: { zh: 'ONLINE',      en: 'ON AIR' }
  },

  /* ---------- 中文卷宗：周柊 ---------- */
  zh: {
    lang: 'zh-CN',
    rail1: '身份', rail2: '形象', rail3: '作品', rail4: '信号', rail5: '记录',

    noticeTag: 'NOTICE',
    notice: '含成人向、血腥与死亡描写，请自行判断。',

    role: '帝国科学院 · 第七号研究员',
    name: '周柊',
    roman: 'ZHOU ZHONG',
    lede: '做化工、药剂与生物化学方向的研究。第七号研究员，职位不低，本质是给帝国打工的社畜：白天配试剂、对账、写报告。',
    jumpPortrait: '查看形象',

    chips: ['插画', '漫画', '剪辑', '翻译·考据', '手作'],
    idx: [['#identity', '身份'], ['#portrait', '形象'], ['#works', '作品'], ['#signal', '信号'], ['#log', '记录']],

    props: [
      ['身份', '帝国科学院 · 第七号研究员'],
      ['领域', '化工 / 药剂学 / 生物化学'],
      ['圈子', 'MCYT（Strength SMP、MCSR、ARG）· 美国动画'],
      ['在看', 'Vivziepop 系 / Glitch 系 / 阴谋办公室 / 怪诞小镇 / 反派本色'],
      ['创作', '插画 · 漫画 · 剪辑 · 翻译与考据 · 手作'],
      ['联络', 'X / B站 / 小红书 / Discord']
    ],

    portraitTitle: '形象',
    portraitMeta: 'PORTRAIT · 01',
    phNote: 'IMAGE PENDING',
    phHint: '建议 3:4 · 宽 ≥1200px',
    ocName: '周柊',
    ocLine: '帝国科学院『7』号研究员。化工、药剂与生物化学方向；职位不低，工位很小。',
    paroLabel: 'PARO',
    paroEmpty: '暂无归档',

    worksTitle: '作品',
    worksMeta: 'WORKS',
    worksEmpty: '这一类暂时还是空的。',
    units: '件',

    signalTitle: '信号',
    signalMeta: 'SIGNAL',
    copyHint: '点击复制',
    copied: '已复制',

    logTitle: '记录',
    logMeta: 'LOG',

    foot1: '图片与文字版权归 A1phaBet 所有；转载请联系，不接受无断转载。',
    foot2: '本站为同人作品展示，与任何原作公司无关。',
    footUpdated: 'UPDATED',
    footTop: 'BACK TO TOP'
  },

  /* ---------- 英文卷宗：AlphaBet ---------- */
  en: {
    lang: 'en',
    rail1: 'IDENT', rail2: 'PORTRAIT', rail3: 'WORKS', rail4: 'SIGNAL', rail5: 'LOG',

    noticeTag: 'NOTICE',
    notice: 'Contains adult themes, gore and character death. Proceed at your own discretion.',

    role: 'LATE-NIGHT RADIO · NON-BIOLOGICAL',
    name: 'AlphaBet',
    roman: 'ON AIR 23:00—03:00',
    lede: 'Hosts a late-night radio show and sings in a band. Non-biological. The broadcast runs until the last caller gives up.',
    jumpPortrait: 'View portrait',

    chips: ['Illustration', 'Comic', 'Video', 'Translation', 'Craft'],
    idx: [['#identity', 'Ident'], ['#portrait', 'Portrait'], ['#works', 'Works'], ['#signal', 'Signal'], ['#log', 'Log']],

    props: [
      ['ROLE', 'Imperial Academy · Researcher No. 7'],
      ['FIELD', 'Chemical engineering / pharmaceutics / biochemistry'],
      ['FANDOM', 'MCYT (Strength SMP, MCSR, ARG) · US animation'],
      ['WATCHING', 'Vivziepop, Glitch, Inside Job, Gravity Falls, Villainous'],
      ['PRACTICE', 'Illustration · comics · editing · translation & research · craft'],
      ['CONTACT', 'X / Bilibili / RED / Discord']
    ],

    portraitTitle: 'Portrait',
    portraitMeta: 'PORTRAIT · 01',
    phNote: 'IMAGE PENDING',
    phHint: '3:4 recommended · at least 1200px wide',
    ocName: 'AlphaBet',
    ocLine: 'Late-night radio host and band vocalist. Non-biological — the voice turns up before the body does.',
    paroLabel: 'PARO',
    paroEmpty: 'none on file',

    worksTitle: 'Works',
    worksMeta: 'WORKS',
    worksEmpty: 'Nothing filed under this type yet.',
    units: 'items',

    signalTitle: 'Signal',
    signalMeta: 'SIGNAL',
    copyHint: 'click to copy',
    copied: 'Copied',

    logTitle: 'Log',
    logMeta: 'LOG',

    foot1: 'All art and text © A1phaBet. Ask before reposting; no unattributed reuploads.',
    foot2: 'A fanwork portfolio. Not affiliated with any rights holder.',
    footUpdated: 'UPDATED',
    footTop: 'BACK TO TOP'
  },

  /* ============================================================
     立绘
     放图：把图丢进 assets/portraits/，写成 'assets/portraits/zhouzhong.jpg'
     留 null 就显示成"待归档"的网格占位。中英两套形象可以各用一张。
     ============================================================ */
  portrait: {
    zh: null,
    en: null
  },

  /* ============================================================
     作品列表
     类型 type 只认这四个键：ill（插画）/ comic（漫画）/ video（剪辑）/ craft（手作与翻译）
     加一件作品 = 复制一段 { } 粘在数组里，改掉 id 和标题即可。
     放图：把图片丢进 assets/works/ 文件夹，然后写 src: 'assets/works/文件名.jpg'
     不放图就写 src: null，会显示成"待归档"的网格占位（不是坏图）。
     ============================================================ */
  works: [
    { id: 'W-01', type: 'ill',   title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-02', type: 'ill',   title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-03', type: 'ill',   title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-04', type: 'ill',   title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-05', type: 'ill',   title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-06', type: 'comic', title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-07', type: 'comic', title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-08', type: 'video', title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-09', type: 'video', title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-10', type: 'video', title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-11', type: 'craft', title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-12', type: 'craft', title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-13', type: 'craft', title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null }
  ],

  /* 作品类型的显示名，顺序就是页面上的顺序 */
  types: [
    { key: 'ill',   zh: '插画',       en: 'ILLUSTRATION' },
    { key: 'comic', zh: '漫画',       en: 'COMIC' },
    { key: 'video', zh: '剪辑',       en: 'VIDEO' },
    { key: 'craft', zh: '手作与翻译', en: 'CRAFT & TRANSLATION' }
  ],

  /* ============================================================
     社媒链接
     copy: true 表示没有网址、点了复制字串（Discord 就是这样）
     ============================================================ */
  social: [
    { no: '01', zh: 'X',        en: 'X',        handle: '@A1pha_Bett', url: 'https://x.com/A1pha_Bett' },
    { no: '02', zh: 'B站',      en: 'Bilibili', handle: 'A1phaBett',   url: 'https://space.bilibili.com/3707050282453134' },
    { no: '03', zh: '小红书',   en: 'RED',      handle: 'AB · 11530853554', url: 'https://www.xiaohongshu.com/user/profile/11530853554' },
    { no: '04', zh: 'Discord',  en: 'Discord',  handle: 'a1pha_bett',  copy: true },
    { no: '05', zh: 'GitHub',   en: 'GitHub',   handle: 'A1phaBett',   url: 'https://github.com/A1phaBett' }
  ],

  /* ============================================================
     记录 / 最近在做什么（最新的一条放最上面）
     ============================================================ */
  log: [
    { date: '2026.10.25', text: { zh: '站点上线。中文区与英文区拆成两套形象，切换语言会整页换掉，不只是换字。',
                                  en: 'Site online. Two dossiers in one console — switching language swaps the whole field, not just the words.' } },
    { date: '2026.10.25', text: { zh: '作品归档整理完成：插画、漫画、剪辑、手作与翻译四类，可以按类增减。',
                                  en: 'Works filed by type: illustration, comic, video, craft & translation.' } },
    { date: '2026.10',    text: { zh: '档案入口单独开了一栏，立绘放在作品之前。',
                                  en: 'The archive rail went in; the portrait sits in its own column now.' } }
  ],

  /* PARO / 分身列表。加一条 = 复制一行，比如 ['现代 AU', '在便利店打工的版本'] */
  paros: []
};
