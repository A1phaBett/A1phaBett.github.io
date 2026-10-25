/* ============================================================
   这里是全站唯一的"内容总表"。
   要改文字、换图、加作品、改链接 —— 全部在这个文件里改。
   改完保存，回浏览器按 Ctrl + F5，就能看到。

   改文案的三条铁律（违反会整页空白）：
     1. 只改单引号 '  里面的字，别动引号本身
     2. 每行结尾的逗号 , 不能删
     3. 不要用中文引号 “ ” 代替英文单引号 ' '

   规则：中文写进 zh: {}，英文写进 en: {}，两边字段名一一对应。

   ★ 三个名字别搞混 ★
     圈名（本人）= 听海 / A1phaBet（数字 1 代替 l）· 简称 AB
     中文自设（OC）= 周柊
     英文自设（OC）= AlphaBet（纯字母，A 和 B 大写，没有数字 1）
   ============================================================ */

const SITE = {

  /* ---------- 站点元信息（浏览器标签页上的字） ---------- */
  meta: {
    title: { zh: 'A1phaBet · 归档终端', en: 'A1phaBet · Archive Terminal' },
    desc:  { zh: '听海 / A1phaBet 的同人主页：插画、切片、翻译与自设档案。',
             en: 'A1phaBet — fanwork archive: illustration, clips, translation, and an OC.' },
    updated: '2026-10-25'
  },

  /* ---------- 顶栏（左边文件名 / 右边状态灯） ---------- */
  bar: {
    file:   { zh: 'FILE AB—01', en: 'FILE AB—01' },
    status: { zh: 'ONLINE',      en: 'ON AIR' }
  },

  /* ============================================================
     留言箱接线（三种服务任选一种，填进来就能用）
     填法 A · FormSubmit（不用注册，最省事）
        1. 打开 https://formsubmit.co ，把邮箱填进页面上那个框，点提交
        2. 邮箱会收到一封确认信，点里面的链接激活
        3. 把 'https://formsubmit.co/ajax/你的邮箱' 填进来
     填法 B · Web3Forms（不用注册，也不用密码）
        1. 打开 https://web3forms.com ，输入邮箱，点 Create Access Key
        2. 邮箱里会收到一串 access key（一长串字母数字）
        3. 直接把这串 key 填进来（不用加引号以外的任何东西）
     填法 C · Formspree（要注册，注册页可能卡住）
        1. https://formspree.io 注册 → New form
        2. 把 https://formspree.io/f/xxxxxxxx 填进来
     留空 = 页面显示「留言箱还没接线」，表单禁用。
     ============================================================ */
  noteEndpoint: '',

  /* ---------- 中文：本人 ---------- */
  zh: {
    lang: 'zh-CN',

    /* 左侧索引 + 顶栏读数 */
    rail1: '身份', rail2: '自设', rail3: '作品', rail4: '信号', rail5: '留言',

    /* 顶部那条警告 */
    noticeTag: 'NOTICE',
    notice: '含成人向、血腥与死亡描写，请自行判断。',

    /* 开屏四行：小字 / 大字 / 副标 / 正文 */
    role: '同人主页 · 画手 / 切片 / 翻译',
    name: '听海',
    roman: 'A1PHABET · AB',
    lede: '画插画，做切片，偶尔翻译。混 MCYT 和美国动画。平时是学生，这里是同人的部分。',
    jumpOc: '查看自设',

    /* 三颗标签 */
    chips: ['插画', '切片', '翻译'],

    /* 手机上的章节索引 */
    idx: [['#identity', '身份'], ['#oc', '自设'], ['#works', '作品'], ['#signal', '信号'], ['#notes', '留言']],

    /* 右栏属性表：一行一组 [标题, 内容] */
    props: [
      ['圈名', '听海 / A1phaBet'],
      ['简称', 'AB'],
      ['在做', '插画 · 切片 · 翻译'],
      ['状态', '不定期更新'],
      ['联络', 'X / B站 / 小红书 / Discord']
    ],

    /* 02 自设 */
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
    phHint: '3:4 · ≥1200px',

    /* 03 作品 */
    worksTitle: '作品',
    worksMeta: 'WORKS',
    worksEmpty: '这一类暂时还是空的。',
    units: '件',
    linkPending: '待补链接',

    /* 04 信号 */
    signalTitle: '信号',
    signalMeta: 'SIGNAL',
    copyHint: '点击复制',
    copied: '已复制',

    /* 05 留言 */
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

    /* 页脚 */
    foot1: '图片与文字版权归 A1phaBet 所有；转载请联系，不接受无断转载。',
    foot2: '本站为同人作品展示，与任何原作公司无关。',
    footLog: '更新记录',
    footUpdated: 'UPDATED',
    footTop: 'BACK TO TOP',

    /* 记录（现在只在页脚那个小链接里） */
    logTitle: '记录',
    logMeta: 'LOG'
  },

  /* ---------- 英文：本人 ---------- */
  en: {
    lang: 'en',

    rail1: 'IDENT', rail2: 'OC', rail3: 'WORKS', rail4: 'SIGNAL', rail5: 'MAIL',

    noticeTag: 'NOTICE',
    notice: 'Contains adult themes, gore and character death. Proceed at your own discretion.',

    role: 'FANWORK ARCHIVE · ART / CLIPS / TRANSLATION',
    name: 'A1phaBet',
    roman: '听海 / AB',
    lede: 'I draw, make clips, and translate now and then. MCYT and American animation. Student in real life; this is the fandom side.',
    jumpOc: 'See the OC',

    chips: ['Illustration', 'Clips', 'Translation'],

    idx: [['#identity', 'Ident'], ['#oc', 'OC'], ['#works', 'Works'], ['#signal', 'Signal'], ['#notes', 'Mail']],

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

    noteTitle: 'Inbox',
    noteMeta: 'PRIVATE',
    noteLead: 'Leave a note. Only I can read it — nothing here is shown to other visitors.',
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
    footLog: 'Changelog',
    footUpdated: 'UPDATED',
    footTop: 'BACK TO TOP',

    logTitle: 'Log',
    logMeta: 'LOG'
  },

  /* ============================================================
     圈子（首页那两条可展开的抽屉）
     hint 是行尾那行灰字，手写的，不会自动变
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
     自设（OC）：中英各一个，互相独立
     role / field 会显示在档案弹窗里
     paros 是分身或 AU 列表，比如 ['现代 AU', '便利店打工']
     src 放立绘，null 就是占位网格
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
     type 只认三个：ill（插画，图片卡）/ clip（切片，外链）/ trans（翻译，外链）
     插画：图丢进 assets/works/，写 src: 'assets/works/文件名.jpg'
     切片、翻译：把网址写进 url，访客点一下直接跳走
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

  /* 作品类型的名字与排版（grid = 图片卡，links = 外链行） */
  types: [
    { key: 'ill',   zh: '插画', en: 'ILLUSTRATION', layout: 'grid' },
    { key: 'clip',  zh: '切片', en: 'CLIPS',        layout: 'links' },
    { key: 'trans', zh: '翻译', en: 'TRANSLATION',  layout: 'links' }
  ],

  /* ============================================================
     社媒链接（copy: true 表示没有网址，点了复制字串）
     ============================================================ */
  social: [
    { no: '01', zh: 'X',       en: 'X',        handle: '@A1pha_Bett', url: 'https://x.com/A1pha_Bett' },
    { no: '02', zh: 'B站',     en: 'Bilibili', handle: 'A1phaBett',   url: 'https://space.bilibili.com/3707050282453134' },
    { no: '03', zh: '小红书',  en: 'RED',      handle: 'AB · 11530853554', url: 'https://www.xiaohongshu.com/user/profile/11530853554' },
    { no: '04', zh: 'Discord', en: 'Discord',  handle: 'a1pha_bett',  copy: true },
    { no: '05', zh: 'GitHub',  en: 'GitHub',   handle: 'A1phaBett',   url: 'https://github.com/A1phaBett' }
  ],

  /* ============================================================
     记录（只在页脚「更新记录」里出现，最新一条放最上面）
     ============================================================ */
  log: [
    { date: '2026.10.25', text: { zh: '记录挪到页脚，正片多出一点地方。',
                                  en: 'Moved the log into the footer; the page breathes a bit more.' } },
    { date: '2026.10.25', text: { zh: '开屏改成写我自己，自设单独一栏；作品只留插画、切片、翻译。',
                                  en: 'Front page is the author now. The OC has its own section. Works are illustration, clips, translation.' } },
    { date: '2026.10.25', text: { zh: '加了私密留言箱。',
                                  en: 'Added a private inbox.' } }
  ]
};
