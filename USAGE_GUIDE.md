# TSD Custom Theme 使用指南

## 快速上手（3 步完成）

### 第 1 步：生成主题文件

```bash
npm run convert-tokens
```

这个命令会将您的 `tsd-global-tokens.json` 转换成 Arco Design 可以识别的格式。

### 第 2 步：选择集成方式

#### 🅰️ 方式 A：使用 Vite（推荐）

1. 将 `vite.config.example.js` 重命名为 `vite.config.js`
2. 在入口文件导入 Less：

```jsx
// src/main.jsx 或 src/index.jsx
import '@arco-design/web-react/es/index.less';
import { Button } from '@arco-design/web-react';
```

#### 🅱️ 方式 B：使用 Webpack

1. 将 `webpack.config.example.js` 重命名为 `webpack.config.js`
2. 在入口文件导入 Less：

```jsx
// src/index.js
import '@arco-design/web-react/es/index.less';
import { Button } from '@arco-design/web-react';
```

#### 🅲️ 方式 C：直接使用编译后的 CSS

如果不想配置构建工具，可以直接导入 CSS 和自定义覆盖：

```jsx
import '@arco-design/web-react/dist/css/arco.css';
import './theme/custom-tokens.less';  // 需要 less-loader
```

### 第 3 步：启用暗色主题

在 HTML 的 `<body>` 标签上添加 `arco-theme="dark"` 属性：

```html
<body arco-theme="dark">
  <div id="root"></div>
</body>
```

或者在 JavaScript 中动态设置：

```javascript
document.body.setAttribute('arco-theme', 'dark');
```

## 📋 常见问题

### Q1: 为什么颜色没有生效？

**A:** 检查以下几点：
1. 确保运行了 `npm run convert-tokens`
2. 如果使用 Less 导入方式，确保构建工具配置了 `modifyVars`
3. 如果使用 CSS 导入方式，确保 `custom-tokens.less` 在 Arco CSS 之后导入
4. 检查浏览器控制台是否有 Less 编译错误

### Q2: 如何只修改某些颜色？

**A:** 有两种方式：

**方式 1：** 修改 `tsd-global-tokens.json` 中的颜色值，然后重新运行 `npm run convert-tokens`

**方式 2：** 直接编辑 `src/theme/custom-tokens.less`，修改对应的变量值

### Q3: 如何添加浅色主题支持？

**A:** 目前的配置主要针对暗色主题。要添加浅色主题：

1. 编辑 `scripts/convert-tokens.js`，添加浅色主题的颜色映射
2. 在生成的主题文件中添加条件判断：

```less
// 浅色主题
body:not([arco-theme='dark']) {
  @color-bg-1: #ffffff;
  @color-text-1: rgba(0, 0, 0, 0.9);
  // ... 其他浅色主题变量
}
```

### Q4: Token 转换后丢失了某些变量？

**A:** 检查 `scripts/token-mapping.json`，确保您需要的 Token 有正确的映射关系。如果 TSD 中的某个 Token 在 Arco 中没有对应项，可以：

1. 在 `custom-tokens.less` 中添加自定义变量
2. 修改映射配置，选择最接近的 Arco 变量

### Q5: 如何在组件中使用这些 Token？

**A:** 在 Less/CSS 文件中直接引用变量：

```less
// MyComponent.module.less
@import '~@arco-design/web-react/es/style/theme/global.less';

.my-component {
  background-color: @color-bg-2;
  border-radius: @border-radius-medium;
  padding: @spacing-6;
  color: @color-text-1;
}
```

或在 JavaScript 中使用 CSS 变量（需要先将 Less 变量转换为 CSS 变量）。

## 🎯 最佳实践

### 1. 版本控制

将生成的主题文件加入版本控制：

```bash
git add src/theme/
git commit -m "Add custom theme files"
```

### 2. 自动化流程

在 `package.json` 的 `scripts` 中添加构建前的钩子：

```json
{
  "scripts": {
    "prebuild": "npm run convert-tokens",
    "build": "vite build"
  }
}
```

### 3. 主题切换

如果需要支持多主题切换，可以创建多个 token 文件：

```
tsd-global-tokens.json          # 暗色主题
tsd-global-tokens-light.json    # 浅色主题
```

然后修改转换脚本支持参数：

```bash
node scripts/convert-tokens.js --theme=dark
node scripts/convert-tokens.js --theme=light
```

### 4. 文档化自定义变量

在 `custom-tokens.less` 顶部添加注释说明每个变量的用途：

```less
// 导航栏背景色 - 来自 TSD bg1
@dark-color-bg-1: rgba(16,17,19,1);

// 操作面板背景色 - 来自 TSD bg2
@dark-color-bg-2: rgba(35,37,43,1);
```

## 🔍 调试技巧

### 查看最终生成的 CSS 变量

在浏览器开发者工具中：

1. 打开 Elements 标签
2. 选择 `<body>` 或任何元素
3. 在 Styles 面板中查看计算后的 CSS 变量值

### 验证 Less 变量是否生效

在组件中临时使用一个特别的颜色值来验证：

```less
// 测试：将背景色设置为品牌色
.test-component {
  background-color: @arcoblue-6; // 应该显示为 TSD 的品牌黄色
}
```

### 检查 modifyVars 配置

运行构建并查看输出，确保 Less 编译时应用了正确的变量：

```bash
# Vite
npm run build -- --debug

# Webpack
npm run build -- --display-modules
```

## 📞 获取帮助

如果遇到问题：

1. 查看 `README.md` 中的完整文档
2. 检查 Arco Design 官方文档的主题配置部分
3. 查看生成的 `src/theme/modify-vars.json` 确认变量是否正确转换
4. 在项目 Issues 中搜索类似问题或提出新问题

## 🎨 设计资源

- TSD Design Tokens: `tsd-global-tokens.json`
- Token 映射配置: `scripts/token-mapping.json`
- 自定义变量: `src/theme/custom-tokens.less`
- 构建配置变量: `src/theme/modify-vars.json`

