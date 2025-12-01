const fs = require('fs');
const path = require('path');

// 读取 TSD tokens 和映射配置
const tsdTokens = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../tsd-global-tokens.json'), 'utf8')
);
const mapping = JSON.parse(
  fs.readFileSync(path.join(__dirname, './token-mapping.json'), 'utf8')
);

/**
 * 将 rgba 颜色转换为 hex 格式
 */
function rgbaToHex(rgba) {
  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!match) return rgba;
  
  const [, r, g, b, a] = match;
  const hex = `#${[r, g, b].map(x => {
    const hex = parseInt(x).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('')}`;
  
  if (a && parseFloat(a) < 1) {
    return rgba; // 保留带透明度的颜色为 rgba
  }
  return hex;
}

/**
 * 生成 Less 变量
 */
function generateLessVariables() {
  const lessVars = [];
  
  lessVars.push('// ===================================');
  lessVars.push('// TSD Custom Tokens for Arco Design');
  lessVars.push('// Auto-generated from tsd-global-tokens.json');
  lessVars.push('// ===================================\n');
  
  // ========== 颜色变量 ==========
  lessVars.push('// ========== Colors ==========\n');
  
  // 基础色板 - 品牌色（映射到 arcoblue）
  lessVars.push('// Brand Colors (Primary)');
  const brandColors = tsdTokens.global.clr;
  lessVars.push(`@arcoblue-6: ${rgbaToHex(brandColors.brand1.value)}; // 品牌主色`);
  lessVars.push(`@arcoblue-7: ${rgbaToHex(brandColors.brand2.value)}; // 品牌主色 darker`);
  lessVars.push(`@arcoblue-1: ${brandColors.brand3.value}; // 品牌浅色`);
  lessVars.push(`@arcoblue-5: ${rgbaToHex(brandColors.brand5.value)}; // 品牌亮色`);
  lessVars.push(`@arcoblue-4: ${rgbaToHex(brandColors.brand6.value)}; // hover态`);
  lessVars.push(`@arcoblue-3: ${rgbaToHex(brandColors.brand7.value)}; // pressed态\n`);
  
  // 错误色
  lessVars.push('// Error Colors');
  lessVars.push(`@red-6: ${rgbaToHex(brandColors.error1.value)}; // 错误红-500`);
  lessVars.push(`@red-1: ${rgbaToHex(brandColors.error2.value)}; // 错误红-50`);
  lessVars.push(`@red-5: ${rgbaToHex(brandColors.error3.value)}; // 错误红-400`);
  lessVars.push(`@red-9: ${rgbaToHex(brandColors.error4.value)}; // 错误红-800`);
  lessVars.push(`@red-7: ${rgbaToHex(brandColors.error5.value)}; // 错误红-600`);
  lessVars.push(`@red-4: ${rgbaToHex(brandColors.error8.value)}; // 错误红-300\n`);
  
  // 成功色
  lessVars.push('// Success Colors');
  lessVars.push(`@green-6: ${rgbaToHex(brandColors.success1.value)}; // 成功绿-500`);
  lessVars.push(`@green-1: ${rgbaToHex(brandColors.success2.value)}; // 成功绿-50`);
  lessVars.push(`@green-7: ${rgbaToHex(brandColors.success3.value)}; // 成功绿-600\n`);
  
  // 警告色
  lessVars.push('// Warning Colors');
  lessVars.push(`@orange-6: ${rgbaToHex(brandColors.warning1.value)}; // 警告橙-500`);
  lessVars.push(`@orange-1: ${rgbaToHex(brandColors.warning3.value)}; // 警告橙-50\n`);
  
  // 信息色
  lessVars.push('// Info Colors');
  lessVars.push(`@blue-6: ${rgbaToHex(brandColors.info1.value)}; // 信息蓝-500`);
  lessVars.push(`@blue-1: ${rgbaToHex(brandColors.info2.value)}; // 信息蓝-50`);
  lessVars.push(`@blue-5: ${rgbaToHex(brandColors.info3.value)}; // 信息蓝-400`);
  lessVars.push(`@blue-4: ${rgbaToHex(brandColors.info6.value)}; // 信息蓝-300\n`);
  
  // 灰度色（使用现有的透明度白色和黑色）
  lessVars.push('// Gray Scale Colors');
  lessVars.push(`@gray-1: ${rgbaToHex(brandColors.opacity_w1.value)}; // 最浅灰`);
  lessVars.push(`@gray-3: ${rgbaToHex(brandColors.solid_w4.value)}; // 浅灰`);
  lessVars.push(`@gray-6: ${rgbaToHex(brandColors.solid_w5.value)}; // 中灰`);
  lessVars.push(`@gray-8: ${rgbaToHex(brandColors.solid_w7.value)}; // 深灰`);
  lessVars.push(`@gray-10: ${rgbaToHex(brandColors.solid_b2.value)}; // 最深灰\n`);
  
  // 暗色主题背景色
  lessVars.push('// Dark Theme Background Colors');
  lessVars.push(`@dark-color-bg-1: ${rgbaToHex(brandColors.bg1.value)}; // 导航栏、画布`);
  lessVars.push(`@dark-color-bg-2: ${rgbaToHex(brandColors.bg2.value)}; // 操作面板背景`);
  lessVars.push(`@dark-color-bg-3: ${rgbaToHex(brandColors.bg3.value)}; // 弹窗背景`);
  lessVars.push(`@dark-color-bg-4: ${rgbaToHex(brandColors.bg6.value)}; // 三级容器背景`);
  lessVars.push(`@dark-color-bg-5: ${rgbaToHex(brandColors.bg10.value)}; // Tooltips背景\n`);
  
  // 暗色主题文本色
  lessVars.push('// Dark Theme Text Colors');
  lessVars.push(`@dark-color-text-1: ${brandColors.opacity_w2.value}; // 主文本 85%`);
  lessVars.push(`@dark-color-text-2: ${brandColors.opacity_w3.value}; // 次要文本 70%`);
  lessVars.push(`@dark-color-text-3: ${brandColors.opacity_w4.value}; // 辅助文本 55%`);
  lessVars.push(`@dark-color-text-4: ${brandColors.opacity_w5.value}; // 禁用文本 30%\n`);
  
  // 暗色主题填充色
  lessVars.push('// Dark Theme Fill Colors');
  lessVars.push(`@dark-color-fill-1: ${brandColors.opacity_w9.value}; // 填充色1`);
  lessVars.push(`@dark-color-fill-2: ${brandColors.opacity_w8.value}; // 填充色2`);
  lessVars.push(`@dark-color-fill-3: ${brandColors.opacity_w7.value}; // 填充色3`);
  lessVars.push(`@dark-color-fill-4: ${brandColors.opacity_w6.value}; // 填充色4\n`);
  
  // 暗色主题边框色
  lessVars.push('// Dark Theme Border Colors');
  lessVars.push(`@dark-color-border: ${brandColors.opacity_w7.value}; // 边框色\n`);
  
  // ========== 尺寸变量 ==========
  lessVars.push('// ========== Sizes ==========\n');
  
  // 圆角
  lessVars.push('// Border Radius');
  const radiusTokens = tsdTokens.global.radius;
  lessVars.push(`@border-radius-none: 0;`);
  lessVars.push(`@border-radius-small: ${radiusTokens.r1.value}; // 主要`);
  lessVars.push(`@border-radius-medium: ${radiusTokens.r2.value}; // 外层、大模块`);
  lessVars.push(`@border-radius-large: ${radiusTokens.r4.value};\n`);
  
  // 边框宽度
  lessVars.push('// Border Width');
  const borderTokens = tsdTokens.global.border_width;
  lessVars.push(`@border-none: ${borderTokens.mini.value};`);
  lessVars.push(`@border-1: ${borderTokens.s.value};`);
  lessVars.push(`@border-2: ${borderTokens.m.value};`);
  lessVars.push(`@border-5: ${borderTokens.l.value};\n`);
  
  // 间距
  lessVars.push('// Spacing');
  const spacingTokens = tsdTokens.global.spacing;
  lessVars.push(`@spacing-none: ${spacingTokens.s0.value};`);
  lessVars.push(`@spacing-1: ${spacingTokens.s2.value};`);
  lessVars.push(`@spacing-2: ${spacingTokens.s4.value};`);
  lessVars.push(`@spacing-3: ${spacingTokens.s5.value};`);
  lessVars.push(`@spacing-4: ${spacingTokens.s6.value};`);
  lessVars.push(`@spacing-5: ${spacingTokens.s7.value};`);
  lessVars.push(`@spacing-6: ${spacingTokens.s8.value};`);
  lessVars.push(`@spacing-7: ${spacingTokens.s10.value};`);
  lessVars.push(`@spacing-8: ${spacingTokens.s18.value};`);
  lessVars.push(`@spacing-9: ${spacingTokens.s11.value};`);
  lessVars.push(`@spacing-10: ${spacingTokens.s12.value};\n`);
  
  // 阴影
  lessVars.push('// Shadow');
  const shadowToken = tsdTokens.global.box_shadow.value;
  lessVars.push(`@shadow1-down: ${shadowToken.x}px ${shadowToken.y}px ${shadowToken.blur}px ${shadowToken.spread}px ${shadowToken.color};\n`);
  
  // ========== 字体变量 ==========
  lessVars.push('// ========== Typography ==========\n');
  
  const typoTokens = tsdTokens.global.typo;
  lessVars.push('// Font Size');
  lessVars.push(`@font-size-display-1: ${typoTokens.h3.value.fontSize}; // H3`);
  lessVars.push(`@font-size-title-3: ${typoTokens.h2.value.fontSize}; // H2`);
  lessVars.push(`@font-size-title-2: ${typoTokens.h1.value.fontSize}; // H1`);
  lessVars.push(`@font-size-title-1: ${typoTokens.first_m.value.fontSize}; // 弹窗大标题`);
  lessVars.push(`@font-size-body-3: ${typoTokens.secondary_s.value.fontSize}; // 主要字体`);
  lessVars.push(`@font-size-body-2: ${typoTokens.tertiary_s.value.fontSize}; // 弹窗标题`);
  lessVars.push(`@font-size-body-1: ${typoTokens.fourth_s.value.fontSize}; // 主要字体\n`);
  
  lessVars.push('// Font Weight');
  lessVars.push(`@font-weight-400: 400; // Regular`);
  lessVars.push(`@font-weight-500: 500; // Medium`);
  lessVars.push(`@font-weight-600: 600; // Semibold\n`);
  
  // ========== 不透明度 ==========
  lessVars.push('// ========== Opacity ==========\n');
  const opacityTokens = tsdTokens.global.opacity;
  lessVars.push(`@opacity-10: ${opacityTokens.o1.value}; // 常态`);
  lessVars.push(`@opacity-8: ${opacityTokens.o2.value};`);
  lessVars.push(`@opacity-7: ${opacityTokens.o3.value}; // 按压态`);
  lessVars.push(`@opacity-5: ${opacityTokens.o4.value};`);
  lessVars.push(`@opacity-3: ${opacityTokens.o5.value}; // 禁用态\n`);
  
  return lessVars.join('\n');
}

/**
 * 生成暗色主题覆盖文件
 */
function generateDarkThemeOverrides() {
  const lessVars = [];
  
  lessVars.push('// ===================================');
  lessVars.push('// TSD Dark Theme Overrides');
  lessVars.push('// ===================================\n');
  
  lessVars.push('@import \'./custom-tokens.less\';\n');
  
  lessVars.push('// 应用暗色主题变量');
  lessVars.push('body[arco-theme=\'dark\'] {');
  lessVars.push('  // 这些变量会自动应用到所有 Arco 组件');
  lessVars.push('}');
  
  return lessVars.join('\n');
}

// 生成文件
const outputDir = path.join(__dirname, '../src/theme');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入自定义 tokens 文件
const customTokensPath = path.join(outputDir, 'custom-tokens.less');
fs.writeFileSync(customTokensPath, generateLessVariables());
console.log('✅ Generated custom-tokens.less');

// 写入暗色主题覆盖文件
const darkThemePath = path.join(outputDir, 'dark-theme.less');
fs.writeFileSync(darkThemePath, generateDarkThemeOverrides());
console.log('✅ Generated dark-theme.less');

// 生成 modifyVars 配置（用于 webpack/vite）
const modifyVars = {};

// 导出 modifyVars 对象供构建工具使用
const modifyVarsPath = path.join(outputDir, 'modify-vars.json');
const lessContent = generateLessVariables();
const varPattern = /@([\w-]+):\s*([^;]+);/g;
let match;

while ((match = varPattern.exec(lessContent)) !== null) {
  modifyVars[match[1]] = match[2].trim();
}

fs.writeFileSync(modifyVarsPath, JSON.stringify(modifyVars, null, 2));
console.log('✅ Generated modify-vars.json');

console.log('\n🎉 Token conversion completed!');
console.log('\nGenerated files:');
console.log(`  - ${customTokensPath}`);
console.log(`  - ${darkThemePath}`);
console.log(`  - ${modifyVarsPath}`);

