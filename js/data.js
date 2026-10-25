/* ============================================================
   这里是全站唯一的"内容总表"。
   要改文字、换图、加作品、改链接 —— 全部在这个文件里改。
   改完刷新页面就能看到，不需要动 index.html。

   规则：中文写进 zh: {}，英文写进 en: {}，两边字段名一一对应。

   ★ 名字别搞混 ★
     圈名（本人）= 听海 / A1phaBet（数字 1 代替 l）· 简称 AB
     中文自设（OC）= 周柊
     英文自设（OC）= AlphaBet（纯字母，首字母 A 和 B 大写，没有数字 1）
   ============================================================ */

const SITE = {

  /* ---------- 站点元信息 ---------- */
  meta: {
    title: { zh: 'A1phaBet · 归档终端', en: 'A1phaBet · Archive Terminal' },
    desc:  { zh: '听海 / A1phaBet 的同人主页：插画、切片、翻译与自设档案。',
             en: 'A1phaBet — fanwork archive: illustration, clips, translation, and an OC.' },
    updated: '2026-10-25'
  },

  /* ---------- 顶栏 ---------- */
  bar: {
    file:   { zh: 'FILE AB—01', en: 'FILE AB—01' },
    status: { zh: 'ONLINE',      en: 'ONLINE' }
  },

  /* ============================================================
     留言箱
     现在为空 = 留言箱显示"未开通"。
     开通方法（3 分钟）：
       1. 打开 https://formspree.io 用邮箱注册（免费版 50 条/月）
       2. New form → 名字随便填 → 拿到一串 https://formspree.io/f/xxxxxxx
       3. 把那串地址粘到下面这对引号里，保存，刷新
     留言不会公开显示，只存在 Formspree 后台里，只有你能看到。
     ============================================================ */
  noteEndpoint: '',

  /* ---------- 中文：本人 ---------- */
  zh: {
    lang: 'zh-CN',
    rail1: '身份', rail2: '自设', rail3: '作品', rail4: '信号', rail5: '记录', rail6: '留言',

    noticeTag: 'NOTICE',
    notice: '含成人向、血腥与死亡描写，请自行判断。',

    role: '同人主页 · 画手 / 切片 / 翻译',
    name: '听海',
    roman: 'A1PHABET · AB',
    lede: '泡在 MCYT 和美国动画里。画插画，做切片，也翻译一些东西。更新不快，放上来的都是自己挑过的。三次元是学生，这里只放同人的部分。',
    jumpOc: '查看自设',

    chips: ['插画', '切片', '翻译'],
    idx: [['#identity', '身份'], ['#oc', '自设'], ['#works', '作品'], ['#signal', '信号'], ['#log', '记录'], ['#notes', '留言']],

    props: [
      ['圈名', '听海 / A1phaBet'],
      ['简称', 'AB'],
      ['在做', '插画 · 切片 · 翻译'],
      ['状态', '不定期更新'],
      ['联络', 'X / B站 / 小红书 / Discord']
    ],

    ocTitle: '自设',
    ocMeta: 'ORIGINAL CHARACTER',
    ocNote: '下面是我的原创角色（OC），不是本人。点开档案看完整设定。',
    ocOpen: '打开档案',
    ocDossier: 'DOSSIER',
    ocRoleLabel: '身份',
    ocFieldLabel: '领域',
    paroLabel: 'PARO',
    paroEmpty: '暂无归档',
    phNote: 'IMAGE PENDING',
    phHint: '建议 3:4 · ≥1200px',

    worksTitle: '作品',
    worksMeta: 'WORKS',
    worksEmpty: '这一类暂时还是空的。',
    units: '件',
    linkPending: '待补链接',

    signalTitle: '信号',
    signalMeta: 'SIGNAL',
    copyHint: '点击复制',
    copied: '已复制',

    logTitle: '记录',
    logMeta: 'LOG',

    noteTitle: '留言',
    noteMeta: 'PRIVATE INBOX',
    noteLead: '留张小纸条给我。只有我能看到，不会公开展示。',
    noteNameLabel: '称呼',
    noteNamePh: '可不填',
    noteMsgLabel: '纸条',
    noteMsgPh: '写点什么',
    noteSend: '投递',
    noteFine: '请不要留真实姓名、住址或联系方式；留言不会被公开。',
    noteOff: '留言箱还没接线，暂时不能投递。',
    noteSending: '投递中…',
    noteOk: '纸条已经放进信箱了，谢谢你。',
    noteErr: '没投出去，可能是网络问题，稍后再试一次。',
    noteEmpty: '纸条还是空的。',

    foot1: '图片与文字版权归 A1phaBet 所有；转载请联系，不接受无断转载。',
    foot2: '本站为同人作品展示，与任何原作公司无关。',
    footUpdated: 'UPDATED',
    footTop: 'BACK TO TOP'
  },

  /* ---------- 英文：本人 ---------- */
  en: {
    lang: 'en',
    rail1: 'IDENT', rail2: 'OC', rail3: 'WORKS', rail4: 'SIGNAL', rail5: 'LOG', rail6: 'MAIL',

    noticeTag: 'NOTICE',
    notice: 'Contains adult themes, gore and character death. Proceed at your own discretion.',

    role: 'FANWORK ARCHIVE · ART / CLIPS / TRANSLATION',
    name: 'A1phaBet',
    roman: '听海 / AB',
    lede: 'Into MCYT and American animation. Draws, clips, and translates, slowly. A student offline; this page is the fandom half.',
    jumpOc: 'See the OC',

    chips: ['Illustration', 'Clips', 'Translation'],
    idx: [['#identity', 'Ident'], ['#oc', 'OC'], ['#works', 'Works'], ['#signal', 'Signal'], ['#log', 'Log'], ['#notes', 'Mail']],

    props: [
      ['HANDLE', '听海 / A1phaBet'],
      ['SHORT', 'AB'],
      ['MAKES', 'Illustration · clips · translation'],
      ['STATUS', 'Updates when they happen'],
      ['CONTACT', 'X / Bilibili / RED / Discord']
    ],

    ocTitle: 'Original character',
    ocMeta: 'OC · NOT THE AUTHOR',
    ocNote: 'An original character, not me. Open the dossier for the full sheet.',
    ocOpen: 'Open dossier',
    ocDossier: 'DOSSIER',
    ocRoleLabel: 'ROLE',
    ocFieldLabel: 'FIELD',
    paroLabel: 'PARO',
    paroEmpty: 'none on file',
    phNote: 'IMAGE PENDING',
    phHint: '3:4 · ≥1200px',

    worksTitle: 'Works',
    worksMeta: 'WORKS',
    worksEmpty: 'Nothing filed under this type yet.',
    units: 'items',
    linkPending: 'link pending',

    signalTitle: 'Signal',
    signalMeta: 'SIGNAL',
    copyHint: 'click to copy',
    copied: 'Copied',

    logTitle: 'Log',
    logMeta: 'LOG',

    noteTitle: 'Inbox',
    noteMeta: 'PRIVATE',
    noteLead: "Leave a note. Only I can read it — nothing here is shown to other visitors.",
    noteNameLabel: 'Name',
    noteNamePh: 'optional',
    noteMsgLabel: 'Note',
    noteMsgPh: 'Write something',
    noteSend: 'Send',
    noteFine: 'No real names, addresses or contact details, please. Notes stay private.',
    noteOff: 'The inbox is not wired up yet — sending is disabled for now.',
    noteSending: 'Sending…',
    noteOk: 'Your note is in the inbox. Thank you.',
    noteErr: 'It did not go through. Try again in a moment.',
    noteEmpty: 'The note is still empty.',

    foot1: 'All art and text © A1phaBet. Ask before reposting; no unattributed reuploads.',
    foot2: 'A fanwork portfolio. Not affiliated with any rights holder.',
    footUpdated: 'UPDATED',
    footTop: 'BACK TO TOP'
  },

  /* ============================================================
     圈子（首页可展开的抽屉）
     加一个圈子 = 复制一段 { }；加一个主播 = 在 items 里加一个字符串
     ============================================================ */
  fandom: [
    {
      key: 'mcyt',
      title: { zh: 'MCYT', en: 'MCYT' },
      hint: { zh: '3 个服务器 · 11 位主播', en: '3 servers · 11 streamers' },
      rows: [
        { k: { zh: '服务器', en: 'SERVERS' }, items: ['Strength SMP', 'MCSR', 'ARG'] },
        { k: { zh: '常看', en: 'WATCHING' }, items: ['itsnoob', 'yeahjaron', 'rejoice', 'wifies', 'judgelow', 'sharpness', 'boomie', 'godis', 'dol9phin', 'hackingnoises', 'feinberg'] }
      ]
    },
    {
      key: 'anim',
      title: { zh: '美国动画', en: 'US animation' },
      hint: { zh: '5 部', en: '5 shows' },
      rows: [
        { k: { zh: '在看', en: 'WATCHING' }, items: ['Vivziepop 系', 'Glitch 系', '阴谋办公室', '怪诞小镇', '反派本色'] }
      ]
    }
  ],

  /* ============================================================
     自设（OC）— 中英各一个，互相独立
     src 放立绘，写 null 就是占位网格
     paros 是分身/AU 列表，没有就留空数组
     ============================================================ */
  oc: {
    zh: {
      id: '07-ZZ',
      name: '周柊',
      role: '帝国科学院 · 第七号研究员',
      field: '化工 / 药剂学 / 生物化学',
      line: '帝国科学院『7』号研究员。职位不低，工位很小；白天配试剂、对账、写报告。',
      paros: [],
      src: null
    },
    en: {
      id: 'AB-OC',
      name: 'AlphaBet',
      role: 'Late-night radio host · band vocalist',
      field: 'Non-biological · broadcast 23:00—03:00',
      line: 'Radio host and vocalist. Non-biological — the voice turns up before the body does.',
      paros: [],
      src: null
    }
  },

  /* ============================================================
     作品
     type 只认这三个：ill（插画，图片卡）/ clip（切片，外链）/ trans（翻译，外链）
     · 插画：把图丢进 assets/works/，写 src: 'assets/works/文件名.jpg'；src: null = 占位
     · 切片 / 翻译：把网址写进 url，访客点一下直接跳过去；url: '' = 显示"待补链接"
     ============================================================ */
  works: [
    { id: 'W-01', type: 'ill', title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-02', type: 'ill', title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-03', type: 'ill', title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-04', type: 'ill', title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-05', type: 'ill', title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },
    { id: 'W-06', type: 'ill', title: { zh: '未命名', en: 'Untitled' }, year: '—', src: null },

    { id: 'C-01', type: 'clip', title: { zh: '未命名切片', en: 'Untitled clip' }, year: '—', platform: 'Bilibili', url: '' },
    { id: 'C-02', type: 'clip', title: { zh: '未命名切片', en: 'Untitled clip' }, year: '—', platform: 'Bilibili', url: '' },
    { id: 'C-03', type: 'clip', title: { zh: '未命名切片', en: 'Untitled clip' }, year: '—', platform: 'Bilibili', url: '' },
    { id: 'C-04', type: 'clip', title: { zh: '未命名切片', en: 'Untitled clip' }, year: '—', platform: 'Bilibili', url: '' },

    { id: 'T-01', type: 'trans', title: { zh: '未命名翻译', en: 'Untitled translation' }, year: '—', platform: '—', url: '' },
    { id: 'T-02', type: 'trans', title: { zh: '未命名翻译', en: 'Untitled translation' }, year: '—', platform: '—', url: '' },
    { id: 'T-03', type: 'trans', title: { zh: '未命名翻译', en: 'Untitled translation' }, year: '—', platform: '—', url: '' }
  ],

  /* 作品类型的显示名与排版方式（grid = 图片卡，links = 外链行） */
  types: [
    { key: 'ill',   zh: '插画', en: 'ILLUSTRATION', layout: 'grid' },
    { key: 'clip',  zh: '切片', en: 'CLIPS',        layout: 'links' },
    { key: 'trans', zh: '翻译', en: 'TRANSLATION',  layout: 'links' }
  ],

  /* ============================================================
     社媒链接
     copy: true 表示没有网址、点了复制字串（Discord 就是这样）
     ============================================================ */
  social: [
    { no: '01', zh: 'X',       en: 'X',        handle: '@A1pha_Bett', url: 'https://x.com/A1pha_Bett' },
    { no: '02', zh: 'B站',     en: 'Bilibili', handle: 'A1phaBett',   url: 'https://space.bilibili.com/3707050282453134' },
    { no: '03', zh: '小红书',  en: 'RED',      handle: 'AB · 11530853554', url: 'https://www.xiaohongshu.com/user/profile/11530853554' },
    { no: '04', zh: 'Discord', en: 'Discord',  handle: 'a1pha_bett',  copy: true },
    { no: '05', zh: 'GitHub',  en: 'GitHub',   handle: 'A1phaBett',   url: 'https://github.com/A1phaBett' }
  ],

  /* ============================================================
     记录 / 最近在做什么（最新的一条放最上面）
     ============================================================ */
  log: [
    { date: '2026.10.25', text: { zh: '站点改版：开屏写我自己，自设单独一栏；作品只留插画、切片、翻译，切片和翻译直接外链。',
                                  en: 'Reworked: the front page is me now, the OC has its own section, and clips and translations link straight out.' } },
    { date: '2026.10.25', text: { zh: '加了私密留言箱，留言只有我能看到。',
                                  en: 'Added a private inbox. Notes stay between the visitor and me.' } },
    { date: '2026.10.25', text: { zh: '站点上线。中文区与英文区是两套配色，切换语言会整页换掉。',
                                  en: 'Site online. The two languages are two skins; switching swaps the whole field.' } }
  ]
};
