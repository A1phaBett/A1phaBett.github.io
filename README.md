# A1phaBet · 归档终端

一个单页个人站。中文区浅色，英文区深色——切语言不是翻译，是换掉整份卷宗。

---

## 0. 三个名字，别搞混

| | 是谁 | 写在哪 |
|---|---|---|
| **听海 / A1phaBet**（数字 1 代替 l） | 你本人，圈名 | 开屏大字、页脚版权 |
| **周柊** | 中文区的**自设（OC）** | 02 自设区 |
| **AlphaBet**（纯字母，A、B 大写，没有数字 1） | 英文区的**自设（OC）** | 02 自设区 |

简称 **AB** 在任何地方都指你本人。

---

## 1. 先看效果

双击 `index.html`。不需要装任何东西。

---

## 2. 自己改文案 / 换图（最重要的一节）

**所有内容都在 `js/data.js` 一个文件里。** 别动 `index.html`、`css/style.css`、`js/app.js`。

### 怎么打开

右键 `js/data.js` → **打开方式** → **记事本**。也可以用 VS Code。
**不要用 Word 打开**（它会把文件存成别的格式，页面直接坏掉）。

### 怎么改

只改**英文单引号 `'…'` 里面**的字。外面那些 `{ } [ ] , ;` 一个都不要动。

```js
lede: '画插画，做切片，偶尔翻译。',     ← 只改这一对引号中间的部分
```

### 三条铁律（违反其中任何一条，整页会变空白）

1. **不能删引号** —— 一句话必须有一对 `'…'`
2. **不能删行尾的逗号 `,`** —— 除了最后一行
3. **不能用中文引号** —— 中文标点（，。！？）随便用，但包住句子的那对必须是英文的 `'`

### 保存 → 刷新

`Ctrl + S` 保存（不要用「另存为」），回浏览器 `Ctrl + F5`。

### 页面上的哪句话在哪个字段

| 页面上看到的 | 字段名 | 备注 |
|---|---|---|
| 顶栏右上角的 `ONLINE` / `ON AIR` | `bar.status` | 中文 ONLINE，英文 ON AIR |
| 顶部那条警告 | `notice` | |
| 开屏第一行小字 | `role` | |
| 开屏超大字 | `name` | 中文是「听海」，英文是「A1phaBet」 |
| 大字下面的小字母串 | `roman` | |
| 开屏那段自我介绍 | `lede` | ★ 最该你自己写的一句 |
| 「查看自设」 | `jumpOc` | |
| 三颗标签 | `chips` | |
| 右栏 5 行属性 | `props` | 一行一组 `['标题', '内容']` |
| 自设那一句设定 | `oc.zh.line` / `oc.en.line` | |
| 自设弹窗里的身份、领域 | `oc.zh.role` / `oc.zh.field` | |
| 作品分类名 | `types` 里的 `zh` / `en` | |
| 留言箱的说明 | `noteLead`、`noteFine` | |
| 页脚两行小字 | `foot1`、`foot2` | |
| 「更新记录」里的一条 | `log` | 一行一条 |

**中文和英文是两份，改一边不会自动同步到另一边。** 中文改完记得看一眼 `en:` 里对应的那句。

### 改坏了怎么救

在站点文件夹里打开 PowerShell，运行：

```powershell
git checkout -- js/data.js
```

会退回上一次保存的版本（你刚才改的字会丢，但页面能立刻活过来）。

---

## 3. 五个区块

| 区块 | 内容 |
|---|---|
| 01 身份 | 你本人：大字名、简介、属性表、可展开的圈子抽屉 |
| 02 自设 | OC 立绘卡 +「打开档案」弹窗（身份、领域、PARO） |
| 03 作品 | 插画（图片卡 + 灯箱）、切片（外链）、翻译（外链） |
| 04 信号 | 五个平台的链接 |
| 05 留言 | 私密投递箱 |

更新记录不占板块了，缩在**页脚**那行小字里（`更新记录`），点开是个小面板。

---

## 4. 圈子抽屉

首页那两条「MCYT」「美国动画」可以点开。内容在 `fandom`：

```js
{
  title: { zh: 'MCYT', en: 'MCYT' },
  hint:  { zh: '3 个服务器 · 11 位主播', en: '3 servers · 11 streamers' },  // 行尾灰字，手写
  rows: [
    { k: { zh: '服务器', en: 'SERVERS' }, items: ['Strength SMP', 'MCSR', 'ARG'] },
    { k: { zh: '常看', en: 'WATCHING' }, items: ['itsnoob', 'yeahjaron' /* … */] }
  ]
}
```

加一个圈子就复制一整个 `{ }`；加一个主播就在 `items` 里加一个字符串。

---

## 5. 作品

### 插画（图片卡）

1. 图片放进 `assets/works/`
2. 找到对应那行，把 `src: null` 改成 `src: 'assets/works/文件名.jpg'`
3. 顺手改 `title`

点开有大图灯箱，左右方向键翻页。

### 切片 / 翻译（外链）

不放文件，只放网址：

```js
{ id: 'C-01', type: 'clip', title: { zh: '标题', en: 'Title' }, platform: 'Bilibili', url: 'https://www.bilibili.com/video/BV…' }
```

`url` 空着会显示「待补链接」，不会变成坏掉的按钮。`platform` 是行尾那个小标签。

`type` 只能是 `ill` / `clip` / `trans`。

---

## 6. 留言箱

### 现在是空的

页面显示「留言箱还没接线，暂时不能投递」，这是正常的——代码写好了，只差你填一个地址。

### 三种接法，选一个能成功的

**A · FormSubmit（不用注册，推荐先用这个）**

1. 打开 https://formsubmit.co ，把邮箱填进页面上的框，点提交
2. 邮箱会收到一封确认信，**点里面的链接激活**
3. 把 `https://formsubmit.co/ajax/你的邮箱` 填进 `SITE.noteEndpoint`

> 注意：第一次真正投递时，FormSubmit 还会再发一封确认信，点了之后才会开始转发。

**B · Web3Forms（也不用注册，不用密码）**

1. 打开 https://web3forms.com ，输入邮箱，点 Create Access Key
2. 邮箱里会收到一长串 access key
3. 直接把那串 key 填进 `SITE.noteEndpoint`（不用加网址）

**C · Formspree（要注册，就是你现在卡住的那个）**

1. https://formspree.io 注册 → New form
2. 把 `https://formspree.io/f/xxxxxxxx` 填进 `SITE.noteEndpoint`

### Formspree 注册卡在加载？

那个注册表单背后挂着谷歌的人机验证，国内经常转不出来，挂梯子也不一定救（要看代理有没有覆盖 `www.google.com/recaptcha` 那几个域名）。可以按顺序试：

1. **换个入口**：注册页上如果有 `Continue with Google` / `Continue with GitHub`，用那个，它不走人机验证
2. **关掉广告拦截插件**（uBlock、AdGuard 会直接拦掉验证脚本）
3. **用手机热点**再试一次，有时是运营商 DNS 的问题
4. 直接**改用上面的 A 或 B**，等你哪天方便再回头看 Formspree

代码这边三种都认，你填哪个都能用，不用改任何代码。

### 已经做好的部分

600 字上限、字数计数、空内容拦截、防机器人的隐藏字段、提交中 / 成功 / 失败三种提示、读屏播报。
留言不会显示在网站上，只进你后台。

---

## 7. 上线到 GitHub Pages

仓库名必须叫 **`A1phaBett.github.io`**（和这个文件夹同名），才能拿到 `https://a1phabett.github.io`。

### 建仓库

1. https://github.com/new
2. 仓库名 `A1phaBett.github.io`
3. 选 **Public**，不要勾任何初始化文件
4. Create repository

### 推上去

在站点文件夹里打开 PowerShell（`Shift + 右键` → 在此处打开 PowerShell 窗口）：

```powershell
git remote add origin https://github.com/A1phaBett/A1phaBett.github.io.git
git push -u origin main
```

第一次会弹窗要你登录 GitHub。之后每次改完内容：

```powershell
git add -A
git commit -m "update"
git push
```

### 开 Pages

仓库 → **Settings** → 左侧 **Pages** → Source 选 `Deploy from a branch` → Branch 选 `main`、目录 `/ (root)` → **Save**。等 1–2 分钟。

---

## 8. 常见问题

**改完刷新没变化？** `Ctrl + F5`。

**整页空白？** 十有八九是 `data.js` 少了个引号或逗号。按 `F12` → Console，红色报错会告诉你第几行。

**图片不显示？** 图必须在 `assets/works/` 里，文件名大小写要一致（`.JPG` ≠ `.jpg`），`src` 里要带 `assets/works/` 前缀。

**换行怎么办？** 一句话里如果太长想换行，就把它拆成两句短的。不建议在引号里硬换行。

---

## 9. 隐私

- `<meta name="robots" content="noindex">` + `robots.txt` 整站屏蔽，搜索引擎不该收录
- 站上只出现圈名，没有真名、学校、城市
- `referrer: no-referrer`：从你站跳到别处，不告诉对方你从哪来
- 留言只进你账号的后台，不公开
- 但 **GitHub Pages 是公开的**，拿到链接的人都能看

---

## 10. 文件

```
index.html          骨架
css/style.css       外观
js/data.js          ★ 全部内容和链接，只改这个
js/app.js           渲染与交互
assets/fonts/       字体（本地文件，不依赖外网）
assets/works/       插画放这里
assets/portraits/   自设立绘放这里
robots.txt          禁止搜索引擎收录
```
