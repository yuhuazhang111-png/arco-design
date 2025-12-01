# TSD Custom Theme for Arco Design

这个项目展示了如何将自定义的 TSD Design Tokens 应用到 Arco Design 组件库中，实现完整的主题定制。

## 📁 项目结构

```
tsd-test/
├── tsd-global-tokens.json          # TSD 原始 Design Tokens
├── scripts/
│   ├── convert-tokens.js           # Token 转换脚本
│   └── token-mapping.json          # Token 映射配置
├── src/
│   └── theme/
│       ├── custom-tokens.less      # 生成的自定义 Less 变量（覆盖 Arco）
│       ├── dark-theme.less         # 暗色主题覆盖
│       └── modify-vars.json        # 构建工具配置用变量
├── webpack.config.example.js       # Webpack 配置示例
├── vite.config.example.js          # Vite 配置示例
└── src/index.example.jsx           # 使用示例
```

## 🚀 快速开始

### 1. 转换 Tokens

将 `tsd-global-tokens.json` 转换为 Arco Design 兼容的 Less 变量：

```bash
npm run convert-tokens
# 或
npm run build:theme
```

这会生成以下文件：
- `src/theme/custom-tokens.less` - 自定义 Less 变量
- `src/theme/dark-theme.less` - 暗色主题配置
- `src/theme/modify-vars.json` - 用于构建工具的变量映射

### 2. 配置构建工具

#### 使用 Webpack

```javascript
// webpack.config.js
const modifyVars = require('./src/theme/modify-vars.json');

module.exports = {
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: modifyVars,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
    ],
  },
};
```

#### 使用 Vite

```javascript
// vite.config.js
import { defineConfig } from 'vite';
import modifyVars from './src/theme/modify-vars.json';

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: modifyVars,
        javascriptEnabled: true,
      },
    },
  },
});
```

### 3. 在项目中使用

#### 方式 1: 导入编译后的 CSS + 自定义覆盖

```jsx
import '@arco-design/web-react/dist/css/arco.css';
import './theme/custom-tokens.less';
import './theme/dark-theme.less';
```

#### 方式 2: 直接使用 Less（推荐）

```jsx
// 导入 Less 源文件，让 modifyVars 在编译时生效
import '@arco-design/web-react/es/index.less';
```

#### 启用暗色主题

```javascript
// 在 body 上设置 arco-theme 属性
document.body.setAttribute('arco-theme', 'dark');
```

或在 HTML 中：

```html
<body arco-theme="dark">
  <div id="root"></div>
</body>
```

## 🎨 Token 映射说明

### 颜色系统

| TSD Token | Arco Token | 说明 |
|-----------|-----------|------|
| `clr.brand*` | `@arcoblue-*` | 品牌主色（黄色系） |
| `clr.error*` | `@red-*` | 错误/危险色 |
| `clr.success*` | `@green-*` | 成功色 |
| `clr.warning*` | `@orange-*` | 警告色 |
| `clr.info*` | `@blue-*` | 信息色 |
| `clr.bg*` | `@dark-color-bg-*` | 背景色（暗色主题） |
| `clr.opacity_w*` | `@dark-color-text-*` | 文本色（白色透明度） |

### 尺寸系统

| TSD Token | Arco Token | 说明 |
|-----------|-----------|------|
| `radius.r*` | `@border-radius-*` | 圆角 |
| `border_width.*` | `@border-*` | 边框宽度 |
| `spacing.s*` | `@spacing-*` | 间距 |
| `size.s*` | `@size-*` | 尺寸 |

### 排版系统

| TSD Token | Arco Token | 说明 |
|-----------|-----------|------|
| `typo.h*` | `@font-size-*` | 标题字号 |
| `typo.*_m/s` | `@font-size-body-*` | 正文字号 |
| Font Weight | `@font-weight-*` | 字重 |

## 📝 自定义映射

如果需要调整 Token 映射关系，编辑 `scripts/token-mapping.json`，然后重新运行转换脚本：

```bash
npm run convert-tokens
```

## 🔧 高级配置

### 只覆盖部分变量

如果只想覆盖特定的变量，可以手动编辑 `src/theme/custom-tokens.less`，删除不需要覆盖的变量。

### 扩展自定义变量

TSD tokens 中的某些特殊变量（如 `clr.bg6`、`clr.solid_*` 等）可以作为扩展变量添加：

```less
// src/theme/custom-tokens.less
@custom-bg-special: rgba(70,73,81,1);
@custom-text-opacity: rgba(255,255,255,0.55);
```

### 支持浅色主题

当前配置主要针对暗色主题。如需支持浅色主题，可以：

1. 修改 `scripts/convert-tokens.js` 中的颜色映射逻辑
2. 为浅色主题创建单独的变量集
3. 在 `dark-theme.less` 中添加浅色主题的条件覆盖

## 📚 参考资料

- [Arco Design 官方文档](https://arco.design/)
- [Arco Design 主题配置](https://arco.design/react/docs/theme)
- [Less 变量覆盖](http://lesscss.org/features/#variables-feature-variable-variables)
- [Design Tokens 规范](https://design-tokens.github.io/community-group/format/)

## 🤝 贡献

如果您发现 Token 映射有问题或有改进建议，欢迎提出 Issue 或 Pull Request。

## 📄 许可证

ISC

