# A1phaBet · 归档终端

一个单页个人站。中文区是「周柊」的实验室档案（浅色），英文区是「AlphaBet」的夜间电台（深色）。
切换语言不是翻译，是**换掉整份卷宗**：配色、名字、立绘、文案、连顶栏的状态灯一起变。

---

## 1. 先看效果

双击 `index.html`，浏览器就会打开。不需要装任何东西。

---

## 2. 要改东西，只改一个文件

**所有文字、图片、链接都在 `js/data.js` 里。** 改完保存，回浏览器按 `Ctrl + F5` 强制刷新就能看到。

`index.html` 是骨架，`css/style.css` 是外观，`js/app.js` 是发动机——这三个**基本不用碰**。

### 常用字段

| 想改什么 | 在 data.js 里找 | 长这样 |
|---|---|---|
| 中文区自我介绍 | `zh` → `lede` | `lede: '做化工、药剂……'` |
| 英文区自我介绍 | `en` → `lede` | `lede: 'Hosts a late-night……'` |
| 名字 | `zh`/`en` → `name` | `name: '周柊'` |
| 属性表（身份/领域/圈子…） | `zh`/`en` → `props` | 一行一组：`['身份', '帝国科学院']` |
| 顶部提示 | `zh`/`en` → `notice` | `notice: '含成人向……'` |
| 创作标签 | `zh`/`en` → `chips` | `chips: ['插画', '漫画']` |
| OC 一句设定 | `zh`/`en` → `ocLine` | |
| 最近动态 | 最下面的 `log` | `{ date: '2026.10.25', text: { zh: '…', en: '…' } }` |
| 社媒链接 | `social` | `{ no: '01', zh: 'X', handle: '@…', url: '…' }` |

**规则只有一条**：中文写进 `zh: {}`，英文写进 `en: {}`，两边字段名要一样。少写一边，另一边就会空着。

---

## 3. 换立绘

1. 把图放进 `assets/portraits/` 文件夹
2. 打开 `js/data.js`，找到最上面的 `portrait`
3. 把 `zh: null` 改成 `zh: 'assets/portraits/你的文件名.jpg'`，英文同理改 `en`

建议 3:4 竖图，宽度 ≥1200px。不放图就是现在这个"待归档"的网格占位，不会显示成坏图。

---

## 4. 换作品图 / 加作品

**换图（三步）**

1. 图片放进 `assets/works/`
2. 找到 `works` 里对应的那一行，把 `src: null` 改成 `src: 'assets/works/文件名.jpg'`
3. 顺手把 `title` 改成真标题，`year` 改成创作年份

**加一件**：复制一整行 `{ … },` 粘在下面，改掉 `id`（不要和别人重名）和标题。

**删一件**：整行删掉，注意别把上下行之间的逗号弄丢。

`type` 只能是这四个：`ill`（插画）、`comic`（漫画）、`video`（剪辑）、`craft`（手作与翻译）。
想让分类名字变，改 `types` 那里。

---

## 5. 上线到 GitHub Pages

你的账号是 `A1phaBett`。想要网址是 `https://a1phabett.github.io`（最干净的那个），仓库名必须叫 **`A1phaBett.github.io`**——和你现在的文件夹名字一样。

### 第 1 步：在 GitHub 上建仓库

1. 打开 https://github.com/new
2. 仓库名填 `A1phaBett.github.io`
3. 选 **Public**（Private 不能开 Pages），不要勾选任何初始化文件
4. 点 **Create repository**

### 第 2 步：把这个文件夹推上去

在这个文件夹里打开 PowerShell（`Shift + 右键` → 在此处打开 PowerShell 窗口），依次运行：

```powershell
git remote add origin https://github.com/A1phaBett/A1phaBett.github.io.git
git push -u origin main
```

第一次会弹窗要你登录 GitHub，登录一次就行。之后改完内容，只需要两条：

```powershell
git add -A
git commit -m "update"
git push
```

### 第 3 步：打开 Pages

仓库页面 → **Settings** → 左侧 **Pages** → Source 选 `Deploy from a branch` → Branch 选 `main`、目录 `/ (root)` → **Save**。

等 1–2 分钟，访问 `https://a1phabett.github.io` 就能看到了。

---

## 6. 常见问题

**改完刷新没变化？** `Ctrl + F5` 强刷。浏览器会缓存。

**图片不显示？** 检查路径：必须在 `assets/works/` 里，文件名大小写要一致（`.JPG` 和 `.jpg` 不是一回事），`src` 里要有 `assets/works/` 前缀。

**整页空白？** `data.js` 里多半少了或多了逗号、引号。打开浏览器按 `F12` → Console 看红色报错，会告诉你在第几行。

**手机上看排版乱了？** 不用管，站是按手机优先写的，只是桌面端信息更密。

---

## 7. 关于隐私

- 页面里写了 `<meta name="robots" content="noindex">`，`robots.txt` 也整站屏蔽，搜索引擎不该收录。
- 站上只出现圈名，没有真名、学校、城市。
- `<meta name="referrer" content="no-referrer">`：从你站跳到别的站时，不告诉对方你从哪来。
- 想更保险，可以把仓库设成 Private 换成 Netlify 部署（那样链接就不可搜，但配置麻烦些）。
- 注意：**GitHub Pages 是公开的**，任何人拿到链接都能看。要真正上锁只能换别的方案。

---

## 8. 文件都是干什么的

```
index.html          骨架（结构、无障碍标签）
css/style.css       外观（配色、字体、排版、动效）
js/data.js          ★ 全部内容和链接，你只需要改这个
js/app.js           渲染与交互（切换语言、灯箱、复制 Discord）
assets/fonts/       字体（Syne + JetBrains Mono，本地文件，不依赖外网）
assets/works/       作品图放这里
assets/portraits/   立绘放这里
robots.txt          禁止搜索引擎收录
```
