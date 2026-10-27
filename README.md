# 企业落地页 / 小工具定制 · 预约与诊断站

纯前端单页。团队投票后主推 **B：企业落地页 / 小工具定制（可升内容包月）**；钩子为 **¥99 文字诊断**（问卷，几乎不做实时聊天）。轻咨询保留为次要 / 可选入口。

线上：https://ysdtn.com/vibe-booking/  
仓库：https://github.com/yguodong627-star/vibe-booking

## 如何打开

```bash
python3 -m http.server 8765
# 浏览器访问 http://localhost:8765/
```

无需后端、无需 API Key。

## 需要替换的占位内容

### 1. 微信号（必改）

文件：`app.js`

```js
var WECHAT_ID = "你的微信号";
```

页面加载后会写入 `#wechat-id`。未改时仍显示「你的微信号」。

### 2. 价格（建议上线前改）

在 `index.html` 中按 `data-price` 搜索并替换：

| 标记 | 默认占位 | 含义 |
| --- | --- | --- |
| `diag-99` | ¥99 | 文字诊断 |
| `landing-start` | ¥2,999 起 | 落地页起步 |
| `retain-month` | ¥699 / 月起 | 包月维护 |
| `tool-base` | 按项目报价 | 小工具定制 |
| `consult-once` / `consult-pack` | ¥399 / ¥1999 | 轻咨询（次要） |

### 3. 示例案例

`#cases` 标明 **示例案例**，偏小业务落地页 / 预约页前后对比。有真实可公开案例后替换并去掉「示例」徽章。

## 设计说明

- 色板对齐 ysdtn.com：纸色 `#f0efe9`、海军蓝 `#00304a` / `#071a22` / `#102a36`、墨色 `#23343e`、强调色 `#39718b`
- 双色调：深色 Hero / 诊断区 + 纸色内容区
- 本地字体：`fonts/InstrumentSerif-Regular.ttf`、`fonts/Inter-Variable.ttf`
- 含 `.nojekyll`，GitHub Pages 直出静态文件

## 诊断问卷行为

提交后**不会**请求任何服务器。页面展示微信号与可复制摘要，用户手动加微信并粘贴。字段：个人/小店、卡点、试过什么、本周最想解决的一件事、方便联系的微信。

## 文件结构

```
├── index.html
├── styles.css
├── app.js
├── README.md
├── .nojekyll
├── fonts/
└── screenshots/
```
