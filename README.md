# 产品轻咨询 · 落地页预约站

纯前端单页：案例说明 + 双路径服务（轻咨询 / 企业定制）+ 预约引导（微信 CTA，不提交服务器）。

## 如何打开

在本目录执行：

```bash
# 任选其一
python3 -m http.server 8765
# 或直接用浏览器打开
open index.html   # macOS
xdg-open index.html   # Linux
```

浏览器访问 `http://localhost:8765/` 或本地文件路径即可。无需后端、无需 API Key。

## 需要替换的占位内容

### 1. 微信号（必改）

文件：`app.js`

```js
var WECHAT_ID = "你的微信号";
```

同时检查 `index.html` 里 `#wechat-id` 的初始文案是否为同一占位（页面加载后会被 `app.js` 覆盖）。

### 2. 价格（建议上线前改）

在 `index.html` 中搜索以下 `data-price` 标记并改数字/文案：

| 标记 | 默认 | 含义 |
| --- | --- | --- |
| `data-price="consult-once"` | ¥399 | 轻咨询单次 |
| `data-price="consult-pack"` | ¥1999 | 轻咨询 4 周陪跑 |
| `data-price="custom-base"` | 按项目 / 按项目报价 | 企业定制 |

路径卡片与价格区各出现一次，改两处保持一致，或只保留价格区、路径卡片改为「见下方价格」。

### 3. 示例案例

`#cases` 三张卡片目前标明 **示例案例**。有真实可公开客户后，替换文案并去掉「示例案例」徽章说明。

### 4. 页头 / 页脚品牌名

默认「杨国栋 · 产品服务」。可按对外名称修改 `index.html` 中 `.logo` 与 `.footer-brand`。

## 设计说明

- 色板对齐 ysdtn.com：纸色 `#f0efe9`、海军蓝 `#00304a` / `#071a22` / `#102a36`、墨色 `#23343e`、强调色 `#39718b`
- 标题字体：本地 `fonts/InstrumentSerif-Regular.ttf`（回退宋体）
- 正文字体：本地 `fonts/Inter-Variable.ttf`
- 深色区块 + 纸色内容区，胶囊按钮，移动端优先

## 文件结构

```
2026-10-27-booking/
├── index.html
├── styles.css
├── app.js
├── README.md
├── fonts/
│   ├── InstrumentSerif-Regular.ttf
│   └── Inter-Variable.ttf
└── screenshots/   # 本地预览截图（可选）
```

## 预约表单行为

提交后**不会**请求任何服务器。页面展示微信号与可复制摘要，用户手动加微信并粘贴。

## 未做事项

- 未创建 GitHub 仓库
- 未部署到公网
