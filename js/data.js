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
    desc:  { zh: '听海 / A1phaBet的 主页：绘画、切片、翻译与OC。',
             en: 'A1phaBet — arts, clips, translation, and OCs.' },
    updated: '2026-10-25'
  },

  /* ---------- 顶栏（左边文件名 / 右边状态灯） ---------- */
  bar: {
    file:   { zh: 'FILE ZHOU—07', en: 'FILE AB—01' },
    status: { zh: 'ONLINE',      en: 'ONAIR' }
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
  noteEndpoint: '039cfcee-bb90-47bc-85c2-12ca1047617a',

  /* ---------- 中文：本人 ---------- */
  zh: {
    lang: 'zh-CN',

    /* 左侧索引 + 顶栏读数 */
    rail1: '身份', rail2: '自设', rail3: '作品', rail4: '联系', rail5: '留言',

    /* 顶部那条警告 */
    noticeTag: 'NOTICE',
    notice: '展示内容可能含成人向、血腥与死亡描写，请自行判断。',

    /* 开屏四行：小字 / 大字 / 副标 / 正文 */
    role: '画手 / 切片 / 翻译',
    name: '听海',
    roman: 'A1PHABET · AB',
    lede: '请用世界的潮汐填满我的壳',
    jumpOc: '查看自设',

    /* 三颗标签 */
    chips: ['插画', '切片', '翻译'],

    /* 手机上的章节索引 */
    idx: [['#identity', '身份'], ['#oc', '自设'], ['#works', '作品'], ['#signal', '信号'], ['#notes', '留言']],

    /* 右栏属性表：一行一组 [标题, 内容] */
    props: [
      ['CN', '听海 / A1phaBet'],
      ['称呼', '听海/海/AB，我不介意任何'],
      ['在做', '插画 · 切片 · 翻译'],
      ['状态', '三次繁忙，不定期更新'],
      ['联络', 'X / B站 / 小红书 / Discord']
    ],

    /* 02 自设 */
    ocTitle: '自设',
    ocMeta: 'ORIGINAL CHARACTER',
    ocNote: '我不在除QQ空间的任何社交平台发布OC/自设内容，如果看到请及时联系我',
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

    /* 04 联系 */
    signalTitle: '联系',
    signalMeta: 'SIGNAL',
    copyHint: '点击复制',
    copied: '已复制',

    /* 05 留言 */
    noteTitle: '留言',
    noteMeta: 'PRIVATE INBOX',
    noteLead: '有什么想说的尽管给我扔小纸条吧',
    noteNameLabel: '称呼',
    noteNamePh: '可不填',
    noteMsgLabel: '纸条',
    noteMsgPh: '写点什么',
    noteSend: '投递',
    noteFine: '请不要留真实姓名、住址或联系方式；留言可匿名，不会被公开。',
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

    rail1: 'IDENT', rail2: 'OC', rail3: 'WORKS', rail4: 'CONTACT', rail5: 'MAIL',

    noticeTag: 'NOTICE',
    notice: 'May contains adult themes, gore and character death. Proceed at your own discretion.',

    role: 'ARTS / TRANSLATION',
    name: 'A1phaBet',
    roman: '听海 / AB',
    lede: 'Is there a C between A and B?',

    chips: ['Illustration', 'Translation'],

    idx: [['#identity', 'Ident'], ['#oc', 'OC'], ['#works', 'Works'], ['#signal', 'Signal'], ['#notes', 'Mail']],

    props: [
      ['HANDLE', '听海 / A1phaBet'],
      ['PRONOUCE', 'She/They'],
      ['MAKES', 'Arts · clips · translation'],
      ['STATUS', 'Busy irl, updates when they happen'],
      ['CONTACT', 'X / Bilibili / RedNote / Discord']
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

    signalTitle: 'Contact',
    signalMeta: 'CONTACT',
    copyHint: 'click to copy',
    copied: 'Copied',

    noteTitle: 'Inbox',
    noteMeta: 'ASK SOMETHING',
    noteLead: 'Leave a note if you want to ask me something.',
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
      hint: { zh: '3 个领域 · 11 位主播', en: '3 fields · 11 streamers' },
      rows: [
        { k: { zh: '服务器相关', en: 'SERVERS & OTHER STUFF' }, items: ['Strength SMP', 'MCSR', 'ARG'] },
        { k: { zh: '我看', en: 'WATCHING' }, items: ['itsnoob', 'yeahjaron', 'rejoice', 'wifies', 'judelow', 'sharpness', 'boomie', 'godis', 'dol9phin', 'hackingnoises', 'feinberg'] }
      ]
    },
    {
      key: 'anim',
      title: { zh: '美国动画', en: 'American Animation' },
      hint: { zh: '5 部', en: '5 shows' },
      rows: [
        { k: { zh: '我看', en: 'WATCHING' }, items: [
          { zh: 'Vivziepop相关', en: 'Vivziepop' },
          { zh: 'Glitch相关', en: 'Glitch' },
          { zh: '阴谋办公室', en: 'Inside Job' },
          { zh: '怪诞小镇', en: 'Gravity Falls' },
          { zh: '反派本色', en: 'Villainous' }
        ] }
      ]
    }
  ],

  /* ============================================================
     自设（OC）：中英各一个，互相独立
     role / field 会显示在档案弹窗里（留空就不显示那一行）
     pronouce 是可选的读音或代词行，显示在名字下面
     line 是那一句设定；paros 是分身或 AU 列表，比如 ['现代 AU', '便利店打工']
     src 是首页那张大图，null 就是占位网格
     gallery 是档案里可以左右翻的图，按顺序摆；放几张都行，横图竖图都可以
       写法：gallery: ['assets/portraits/1.jpg', 'assets/portraits/2.jpg']
       gallery 为空时，档案里就用 src 那一张
     ============================================================ */
  oc: {
    zh: {
      id: '07-ZZ',
      name: '周柊',
      role: '帝国科学院 · 【7】号研究员',
      field: '化工 / 药剂学 / 生物化学',
      line: '其实只是很高级的社畜',
      paros: ['西幻AU-Verity'],
      src: 'assets/portraits/zh-01.webp',
      gallery: [
        'assets/portraits/zh-01.webp',
        'assets/portraits/zh-02.webp',
        'assets/portraits/zh-03.webp',
        'assets/portraits/zh-04.webp',
        'assets/portraits/zh-05.webp',
        'assets/portraits/zh-06.webp'
      ]
    },
    en: {
      id: '00-AB',
      name: 'AlphaBet',
      role: 'Late-night radio host · Band vocalist',
      pronouce: "it (it dosen't mind how people call it)",
      line: 'Non-biological, it has no mouth-wait, where does it voice come from?',
      paros: [],
      src: 'assets/portraits/en-01.webp',
      gallery: [
        'assets/portraits/en-01.webp',
        'assets/portraits/en-02.webp',
        'assets/portraits/en-03.webp'
      ]
    }
  },

  /* ============================================================
     作品
     type 只认三个：ill（插画，图片卡）/ clip（切片，外链）/ trans（翻译，外链）
     插画：图丢进 assets/works/，写 src: 'assets/works/文件名.jpg'
     切片、翻译：把网址写进 url，访客点一下直接跳走
     ============================================================ */
  works: [
    { id: 'W-01', type: 'ill', title: { zh: 'plushie', en: 'plushie' }, year: '—', src: 'assets/works/W-01.webp' },
    { id: 'W-02', type: 'ill', title: { zh: 'hax', en: 'hax' }, year: '—', src: 'assets/works/W-02.webp' },
    { id: 'W-03', type: 'ill', title: { zh: 'chance/choice', en: 'chance/choice' }, year: '—', src: 'assets/works/W-03.webp' },
    { id: 'W-04', type: 'ill', title: { zh: 'salem', en: 'salem' }, year: '—', src: 'assets/works/W-04.webp' },
    { id: 'W-05', type: 'ill', title: { zh: 'melon duo', en: 'melon duo' }, year: '—', src: 'assets/works/W-05.webp' },
    { id: 'W-06', type: 'ill', title: { zh: 'noob design', en: 'noob design' }, year: '—', src: 'assets/works/W-06.webp' },
    { id: 'W-07', type: 'ill', title: { zh: 'hylas', en: 'hylas' }, year: '—', src: 'assets/works/W-07.webp' },
    { id: 'W-08', type: 'ill', title: { zh: 'untill death to us part', en: 'untill death to us part' }, year: '—', src: 'assets/works/W-08.webp' },
    { id: 'W-09', type: 'ill', title: { zh: '50k subs', en: '50k subs' }, year: '—', src: 'assets/works/W-09.webp' },
    { id: 'W-10', type: 'ill', title: { zh: 'pacifist', en: 'pacifist' }, year: '—', src: 'assets/works/W-10.webp' },
    { id: 'W-11', type: 'ill', title: { zh: 'i love u day', en: 'i love u day' }, year: '—', src: 'assets/works/W-11.webp' },
    { id: 'W-12', type: 'ill', title: { zh: 'forget', en: 'forget' }, year: '—', src: 'assets/works/W-12.webp' },

    { id: 'C-01', type: 'clip', title: { zh: '论Yeahjaron的一万种叫法', en: '论Yeahjaron的一万种叫法' }, year: '—', platform: 'Bilibili', url: 'https://b23.tv/uqjrCC7' },
    { id: 'C-02', type: 'clip', title: { zh: 'Rejoice和Tru对同人画师的看法', en: 'Rejoice和Tru对同人画师的看法' }, year: '—', platform: 'Bilibili', url: 'https://b23.tv/IzrOzt0' },
    { id: 'C-03', type: 'clip', title: { zh: '请求逃离原生Judelow家庭', en: '请求逃离原生Judelow家庭' }, year: '—', platform: 'Bilibili', url: 'https://b23.tv/4ZcQz2O' },
    { id: 'C-04', type: 'clip', title: { zh: '因为我们是无盾', en: '因为我们是无盾' }, year: '—', platform: 'Bilibili', url: 'https://b23.tv/gyFjCyx' },
    { id: 'C-05', type: 'clip', title: { zh: '配音小剧场之一百亿刀乐与队友情', en: '配音小剧场之一百亿刀乐与队友情' }, year: '—', platform: 'Bilibili', url: 'https://b23.tv/huYL71U' },

    { id: 'T-01', type: 'trans', title: { zh: 'Boomie-MC史上最大的陷阱', en: 'Boomie-The Largest Trap In Minecraft History' }, year: '—', platform: 'Bilibili', url: 'https://b23.tv/B7Sjv1m' },
    { id: 'T-02', type: 'trans', title: { zh: '电子幽灵-Ghost in the machine', en: 'Ghost in the machine' }, year: '—', platform: 'LOFTER', url: 'https://www.lofter.com/front/blog/collection/share?collectionId=29751109&incantation=hjcVFIFB46Zy' }
  ],

  /* 作品类型的名字与排版（grid = 图片卡，links = 外链行）
     写了 only: 'zh' 的类，只在中文界面出现（切片就是，因为链接是 B 站） */
  types: [
    { key: 'ill',   zh: '插画', en: 'ILLUSTRATION', layout: 'grid' },
    { key: 'clip',  zh: '切片', en: 'CLIPS',        layout: 'links', only: 'zh' },
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
