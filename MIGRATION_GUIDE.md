# TSD Tokens → Arco Design 映射指南

本文档详细说明了 TSD Global Tokens 是如何映射到 Arco Design 的设计变量系统的。

## 🎨 颜色映射详解

### 品牌主色（Brand / Primary）

TSD 使用黄色系作为品牌色，Arco Design 默认使用蓝色系。我们将 TSD 的品牌黄映射到 Arco 的 `arcoblue` 系列：

| TSD Token | 值 | Arco 变量 | 用途 |
|-----------|---|-----------|------|
| `clr.brand1` | `#ffdd4c` | `@arcoblue-6` | 品牌主色，用于主要按钮、链接等 |
| `clr.brand2` | `#d2b032` | `@arcoblue-7` | 品牌主色加深版 |
| `clr.brand3` | `rgba(255,224,80,0.3)` | `@arcoblue-1` | 品牌浅色背景 |
| `clr.brand5` | `#fff28d` | `@arcoblue-5` | 品牌亮色 |
| `clr.brand6` | `#ffe577` | `@arcoblue-4` | Hover 状态 |
| `clr.brand7` | `#fff0ae` | `@arcoblue-3` | Pressed 状态 |

**影响的组件：**
- Button (type="primary")
- Link
- Progress
- Switch (checked 状态)
- Radio/Checkbox (checked 状态)
- Tag (primary)

### 错误/危险色（Error / Danger）

| TSD Token | 值 | Arco 变量 | 用途 |
|-----------|---|-----------|------|
| `clr.error1` | `#fc5555` | `@red-6` | 错误主色 |
| `clr.error2` | `#ffece8` | `@red-1` | 错误浅色背景 |
| `clr.error3` | `#fd7772` | `@red-5` | 错误中等色 |
| `clr.error4` | `#780a15` | `@red-9` | 错误深色 |

**影响的组件：**
- Button (status="danger")
- Alert (type="error")
- Message (type="error")
- Form 验证错误提示

### 成功色（Success）

| TSD Token | 值 | Arco 变量 | 用途 |
|-----------|---|-----------|------|
| `clr.success1` | `#1cb95a` | `@green-6` | 成功主色 |
| `clr.success2` | `#e8ffed` | `@green-1` | 成功浅色背景 |
| `clr.success3` | `#129e4f` | `@green-7` | 成功深色 |

**影响的组件：**
- Button (status="success")
- Alert (type="success")
- Message (type="success")
- Progress (成功状态)

### 警告色（Warning）

| TSD Token | 值 | Arco 变量 | 用途 |
|-----------|---|-----------|------|
| `clr.warning1` | `#ff9900` | `@orange-6` | 警告主色 |
| `clr.warning3` | `#fffae8` | `@orange-1` | 警告浅色背景 |

**影响的组件：**
- Button (status="warning")
- Alert (type="warning")
- Message (type="warning")

### 信息色（Info）

| TSD Token | 值 | Arco 变量 | 用途 |
|-----------|---|-----------|------|
| `clr.info1` | `#3083ff` | `@blue-6` | 信息主色 |
| `clr.info2` | `#e8f5ff` | `@blue-1` | 信息浅色背景 |
| `clr.info3` | `#559fff` | `@blue-5` | 信息中等色 |
| `clr.info6` | `#7ab8ff` | `@blue-4` | 信息浅色 |

**影响的组件：**
- Alert (type="info")
- Message (type="info")
- Notification

### 背景色（暗色主题）

| TSD Token | 值 | Arco 变量 | 说明 |
|-----------|---|-----------|------|
| `clr.bg1` | `rgba(16,17,19,1)` | `@dark-color-bg-1` | 🟠 导航栏、画布背景 |
| `clr.bg2` | `rgba(35,37,43,1)` | `@dark-color-bg-2` | 🟠 操作面板背景色 |
| `clr.bg3` | `rgba(45,47,52,1)` | `@dark-color-bg-3` | 🟠 弹窗背景色 |
| `clr.bg6` | `rgba(70,73,81,1)` | `@dark-color-bg-4` | 🟪 按钮、tab选中、开关底色 |
| `clr.bg10` | `rgba(55,58,67,1)` | `@dark-color-bg-5` | Toast/Tooltip 背景 |

**影响的组件：**
- Layout (背景)
- Modal / Drawer (弹窗)
- Card
- Table
- Menu
- Tooltip / Popover

### 文本色（暗色主题）

| TSD Token | 值 | Arco 变量 | 说明 |
|-----------|---|-----------|------|
| `clr.opacity_w2` | `rgba(255,255,255,0.85)` | `@dark-color-text-1` | 主文本（85%） |
| `clr.opacity_w3` | `rgba(255,255,255,0.7)` | `@dark-color-text-2` | 次要文本（70%） |
| `clr.opacity_w4` | `rgba(255,255,255,0.55)` | `@dark-color-text-3` | 辅助文本（55%） |
| `clr.opacity_w5` | `rgba(255,255,255,0.3)` | `@dark-color-text-4` | 禁用文本（30%） |

**影响的组件：**
- Typography
- Button 文字
- Input 输入框文字
- Select 选项文字
- 所有组件的文本内容

### 填充色（暗色主题）

| TSD Token | 值 | Arco 变量 | 说明 |
|-----------|---|-----------|------|
| `clr.opacity_w9` | `rgba(255,255,255,0.06)` | `@dark-color-fill-1` | 最浅填充 |
| `clr.opacity_w8` | `rgba(255,255,255,0.12)` | `@dark-color-fill-2` | 浅填充 |
| `clr.opacity_w7` | `rgba(255,255,255,0.15)` | `@dark-color-fill-3` | 中等填充 |
| `clr.opacity_w6` | `rgba(255,255,255,0.2)` | `@dark-color-fill-4` | 深填充 |

**影响的组件：**
- Input 背景
- Select 下拉框背景
- Table 行背景
- Card hover 状态

## 📏 尺寸映射详解

### 圆角（Border Radius）

| TSD Token | 值 | Arco 变量 | 说明 |
|-----------|---|-----------|------|
| `radius.r1` | `2px` | `@border-radius-small` | 🟧 主要圆角 |
| `radius.r2` | `4px` | `@border-radius-medium` | 🟩 外层、大模块 |
| `radius.r4` | `8px` | `@border-radius-large` | 大圆角 |

**影响的组件：**
- Button
- Input / Select
- Card
- Modal
- Tag
- Badge

### 边框宽度（Border Width）

| TSD Token | 值 | Arco 变量 | 说明 |
|-----------|---|-----------|------|
| `border_width.mini` | `0px` | `@border-none` | 无边框 |
| `border_width.s` | `1px` | `@border-1` | 标准边框 |
| `border_width.m` | `2px` | `@border-2` | 中等边框 |
| `border_width.l` | `5px` | `@border-5` | 粗边框 |

**影响的组件：**
- Input / Select 边框
- Button 边框
- Card 边框
- Divider

### 间距（Spacing）

| TSD Token | 值 | Arco 变量 | 常用场景 |
|-----------|---|-----------|----------|
| `spacing.s0` | `0px` | `@spacing-none` | 无间距 |
| `spacing.s2` | `2px` | `@spacing-1` | 最小间距 |
| `spacing.s4` | `4px` | `@spacing-2` | 紧凑间距 |
| `spacing.s6` | `6px` | `@spacing-3` | 小间距 |
| `spacing.s8` | `8px` | `@spacing-4` | 标准小间距 |
| `spacing.s10` | `10px` | `@spacing-5` | 默认间距 |
| `spacing.s12` | `12px` | `@spacing-6` | 舒适间距 |
| `spacing.s16` | `16px` | `@spacing-7` | 大间距 |
| `spacing.s20` | `20px` | `@spacing-8` | 更大间距 |
| `spacing.s24` | `24px` | `@spacing-9` | 卡片间距 |
| `spacing.s32` | `32px` | `@spacing-10` | 区域间距 |

**影响的组件：**
- Button padding
- Input padding
- Card padding
- Modal padding
- Grid gutter
- Space 组件

### 阴影（Shadow）

| TSD Token | 值 | Arco 变量 | 说明 |
|-----------|---|-----------|------|
| `box_shadow` | `0px 1px 4px 0px rgba(0,0,0,0.5)` | `@shadow1-down` | 🟠 悬浮组件阴影 |

**影响的组件：**
- Card (带阴影版本)
- Modal
- Dropdown
- Select 下拉
- Tooltip / Popover

## ✏️ 字体映射详解

### 字号（Font Size）

| TSD Token | 值 | Arco 变量 | 用途 |
|-----------|---|-----------|------|
| `typo.h3` | `32px / 500` | `@font-size-display-1` | H3 标题 |
| `typo.h2` | `24px / 500` | `@font-size-title-3` | H2 标题 |
| `typo.h1` | `20px / 500` | `@font-size-title-2` | H1 标题 |
| `typo.first_m` | `16px / 500` | `@font-size-title-1` | 🟡 弹窗大标题 |
| `typo.secondary_s` | `14px / 400` | `@font-size-body-3` | ✅ 弹窗正文、checkbox |
| `typo.tertiary_s` | `13px / 400` | `@font-size-body-2` | 🟠 弹窗标题 |
| `typo.fourth_s` | `12px / 400` | `@font-size-body-1` | 🔵 主要字体 |

### 字重（Font Weight）

| 值 | Arco 变量 | 用途 |
|---|-----------|------|
| `400` | `@font-weight-400` | Regular（常规） |
| `500` | `@font-weight-500` | Medium（中等） |
| `600` | `@font-weight-600` | Semibold（半粗） |

## 🔄 不透明度映射

| TSD Token | 值 | Arco 变量 | 说明 |
|-----------|---|-----------|------|
| `opacity.o1` | `100%` | `@opacity-10` | 常态 |
| `opacity.o2` | `85%` | `@opacity-8` | - |
| `opacity.o3` | `70%` | `@opacity-7` | 按压态 |
| `opacity.o4` | `55%` | `@opacity-5` | - |
| `opacity.o5` | `30%` | `@opacity-3` | 全局禁用态 |

## 📝 未映射的 TSD Tokens

以下 TSD tokens 没有直接对应的 Arco 变量，但已保留在 `custom-tokens.less` 中作为扩展变量：

### 特殊背景色
- `clr.bg5` - `rgba(53,55,58,1)`
- `clr.bg7` - `rgba(85,89,98,1)` - bg6的hover态
- `clr.bg8` - `rgba(95,99,109,1)` - bg6的active态
- `clr.bg9` - `rgba(25,26,31,1)` - 分段器背景色
- `clr.bg11` - `rgba(9,9,10,1)`

### 纯色变量（Solid Colors）
- `clr.solid_b*` - 黑色纯色系列
- `clr.solid_w*` - 白色纯色系列

这些可以在您的自定义组件中直接使用。

## ⚠️ 注意事项

### 1. 颜色语义变化

TSD 的品牌色是黄色系，而 Arco Design 默认是蓝色系。替换后：
- 所有 `type="primary"` 的组件会显示为黄色
- 这可能需要您的用户重新适应

### 2. 暗色主题优先

当前映射主要针对暗色主题。如果您需要浅色主题，需要额外配置。

### 3. 组件特定样式

某些组件可能有硬编码的颜色值，这些不会受到 token 替换的影响。如需完全定制，可能需要：
1. 使用组件的 `className` 属性
2. 编写额外的 CSS 覆盖

### 4. 构建性能

使用 `modifyVars` 会在每次构建时重新编译所有 Less 变量，可能会增加构建时间。

## 🔍 验证映射

要验证 token 是否正确应用，可以：

1. **视觉检查**：创建一个包含各种组件的测试页面
2. **开发者工具**：检查计算后的 CSS 值
3. **对比测试**：与 TSD 设计稿对比颜色值

## 📞 需要帮助？

如果发现映射不正确或需要调整：

1. 编辑 `scripts/token-mapping.json` 修改映射关系
2. 运行 `npm run convert-tokens` 重新生成
3. 查看生成的 `src/theme/custom-tokens.less` 确认更改

