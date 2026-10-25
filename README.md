# A1phaBet · 归档终端

一个单页个人站。中文区是浅色的实验室档案，英文区是深色的夜间电台——切换语言不是翻译，是**换掉整份卷宗**。

---

## 0. 三个名字，别搞混

| | 是谁 | 写在哪 |
|---|---|---|
| **听海 / A1phaBet**（数字 1 代替 l） | 你本人，圈名 | 开屏大字、页脚版权 |
| **周柊** | 中文区的**自设（OC）** | 02 自设区 |
| **AlphaBet**（纯字母，首字母 A、B 大写，没有数字 1） | 英文区的**自设（OC）** | 02 自设区 |

简称 **AB** 在任何地方都指你本人。

---

## 1. 先看效果

双击 `index.html`，浏览器就会打开。不需要装任何东西。

---

## 2. 要改东西，只改一个文件

**所有文字、图片、链接都在 `js/data.js` 里。** 改完保存，回浏览器按 `Ctrl + F5` 强制刷新。

`index.html` 是骨架，`css/style.css` 是外观，`js/app.js` 是发动机——这三个基本不用碰。

### 六个区块

| 区块 | 内容 |
|---|---|
| 01 身份 | 你本人：大字名、简介、属性表、可展开的圈子抽屉 |
| 02 自设 | OC 立绘卡 + 「打开档案」弹窗（身份、领域、PARO） |
| 03 作品 | 插画（图片卡 + 灯箱）、切片（外链）、翻译（外链） |
| 04 信号 | 五个平台的链接 |
| 05 记录 | 最近在做什么，可手动记 |
| 06 留言 | 私密投递箱 |

### 常用字段

| 想改什么 | 在 data.js 里找 | 长这样 |
|---|---|---|
| 中文开屏简介 | `zh` → `lede` | `lede: '泡在 MCYT……'` |
| 开屏大字 | `zh`/`en` → `name` | `name: '听海'` |
| 名下的副标 | `zh`/`en` → `roman` | `roman: 'A1PHABET · AB'` |
| 属性表 | `zh`/`en` → `props` | 一行一组：`['圈名', '听海 / A1phaBet']` |
| 圈子抽屉 | `fandom` | 两组：MCYT、美国动画，每组 `rows` → `items` |
| 自设 | `oc.zh` / `oc.en` | `name`、`role`、`field`、`line`、`paros`、`src` |
| 顶部提示 | `zh`/`en` → `notice` | |
| 最近动态 | 最下面的 `log` | `{ date: '2026.10.25', text: { zh: '…', en: '…' } }` |
| 社媒链接 | `social` | `{ no: '01', zh: 'X', handle: '@…', url: '…' }` |

**规则只有一条**：中文写进 `zh: {}`，英文写进 `en: {}`，两边字段名要一样。少写一边，另一边就会空着。

---

## 3. 圈子抽屉

首页那两条「MCYT」「美国动画」是可展开的。内容在 `fandom` 里：

```js
{
  title: { zh: 'MCYT', en: 'MCYT' },
  hint:  { zh: '3 个服务器 · 11 位主播', en: '3 servers · 11 streamers' },  // 行尾那行灰字，手写的
  rows: [
    { k: { zh: '服务器', en: 'SERVERS' }, items: ['Strength SMP', 'MCSR', 'ARG'] },
    { k: { zh: '常看', en: 'WATCHING' }, items: ['itsnoob', 'yeahjaron' /* … */] }
  ]
}
```

加一个圈子就复制一整个 `{ }`；加一个主播就在 `items` 里加一个字符串。

---

## 4. 作品：插画放图，切片和翻译放链接

### 插画（图片卡）

1. 图片放进 `assets/works/`
2. 找到对应那一行，把 `src: null` 改成 `src: 'assets/works/文件名.jpg'`
3. 顺手把 `title` 改成真标题

点开有大图灯箱，左右方向键翻页。

### 切片 / 翻译（外链）

这两类是「点一下就跳走」，不放图片。找到对应那行，把 `url: ''` 改成真实网址：

```js
{ id: 'C-01', type: 'clip', title: { zh: '标题', en: 'Title' }, platform: 'Bilibili', url: 'https://www.bilibili.com/video/BV…' }
```

`platform` 是行尾那个小标签（Bilibili / LOFTER / 微博都行）。`url` 空着显示「待补链接」，不会变成坏掉的按钮。

### 加减数量

复制一整行 `{ … },` 粘在下面，改掉 `id`（别重名）。删就整行删掉，注意别把逗号弄丢。

`type` 只能是 `ill`（插画）、`clip`（切片）、`trans`（翻译）。

---

## 5. 留言箱（要你自己接线，3 分钟）

静态网站没有服务器，留言必须交给第三方表单服务代收。代码已经写好了，你只要填一个地址：

1. 打开 https://formspree.io ，用邮箱注册（免费版 50 条/月）
2. 点 **New form**，名字随便填，创建
3. 它会给你一串地址：`https://formspree.io/f/xxxxxxxx`
4. 打开 `js/data.js`，找到 `noteEndpoint: ''`
5. 粘进引号里：`noteEndpoint: 'https://formspree.io/f/xxxxxxxx'`
6. 保存，刷新 —— 留言框就能用了

之后所有留言都在 Formspree 后台（Dashboard），只有登录你账号的人能看到，不会显示在网站上。

**现在这里还是空值，所以页面显示「留言箱还没接线，暂时不能投递」——这是正常的，不是坏了。**

已经做好的部分：600 字上限、字数计数、空内容拦截、防机器人的隐藏字段、提交中 / 成功 / 失败三种状态。

---

## 6. 上线到 GitHub Pages

仓库名必须叫 **`A1phaBett.github.io`**（和现在这个文件夹同名），才能拿到 `https://a1phabett.github.io` 这个裸域名。

### 第 1 步：在 GitHub 上建仓库

1. 打开 https://github.com/new
2. 仓库名填 `A1phaBett.github.io`
3. 选 **Public**（Private 不能开 Pages），不要勾选任何初始化文件
4. 点 **Create repository**

### 第 2 步：推上去

在这个文件夹里打开 PowerShell（`Shift + 右键` → 在此处打开 PowerShell 窗口）：

```powershell
git remote add origin https://github.com/A1phaBett/A1phaBett.github.io.git
git push -u origin main
```

第一次会弹窗要你登录 GitHub。之后改完内容只需要：

```powershell
git add -A
git commit -m "update"
git push
```

### 第 3 步：打开 Pages

仓库页面 → **Settings** → 左侧 **Pages** → Source 选 `Deploy from a branch` → Branch 选 `main`、目录 `/ (root)` → **Save**。

等 1–2 分钟即可访问。

---

## 7. 常见问题

**改完刷新没变化？** `Ctrl + F5` 强刷。

**图片不显示？** 检查路径：图必须在 `assets/works/` 里，文件名大小写要一致（`.JPG` ≠ `.jpg`），`src` 里要带 `assets/works/` 前缀。

**整页空白？** `data.js` 里多半少了或多了逗号、引号。按 `F12` → Console 看红色报错，会告诉你在第几行。

**留言箱能改成公开墙吗？** 能，但要换服务（Waline、Twikoo 之类），工作量比现在大不少。

---

## 8. 隐私

- 页面里有 `<meta name="robots" content="noindex">`，`robots.txt` 也整站屏蔽，搜索引擎不该收录
- 站上只出现圈名，没有真名、学校、城市
- `<meta name="referrer" content="no-referrer">`：从你站跳到别的站时，不告诉对方你从哪来
- 留言只进你账号的后台，不会公开
- 注意：**GitHub Pages 是公开的**，拿到链接的人都能看

---

## 9. 文件都是干什么的

```
index.html          骨架（结构、无障碍标签）
css/style.css       外观（配色、字体、排版、动效）
js/data.js          ★ 全部内容和链接，你只需要改这个
js/app.js           渲染与交互（切换语言、抽屉、灯箱、留言提交）
assets/fonts/       字体（Syne + JetBrains Mono，本地文件，不依赖外网）
assets/works/       插画放这里
assets/portraits/   自设立绘放这里
robots.txt          禁止搜索引擎收录
```
