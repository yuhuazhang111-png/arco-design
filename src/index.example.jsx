import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, ConfigProvider } from '@arco-design/web-react';

// 方式1: 导入 Arco Design 默认样式 + 自定义主题覆盖
import '@arco-design/web-react/dist/css/arco.css';
import './theme/custom-tokens.less';
import './theme/dark-theme.less';

// 方式2: 如果使用 Less，直接导入并让 modifyVars 生效
// import '@arco-design/web-react/es/index.less';

function App() {
  return (
    <ConfigProvider>
      <div style={{ padding: '20px' }}>
        <h1>TSD Custom Theme for Arco Design</h1>
        
        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
          <Button type="primary">Primary Button</Button>
          <Button type="secondary">Secondary Button</Button>
          <Button status="success">Success Button</Button>
          <Button status="warning">Warning Button</Button>
          <Button status="danger">Danger Button</Button>
        </div>
        
        <div style={{ marginTop: '20px' }}>
          <p>这个示例展示了如何使用 TSD custom tokens 来定制 Arco Design 的主题。</p>
          <p>所有的颜色、间距、圆角等都已经替换为您自定义的 token 值。</p>
        </div>
      </div>
    </ConfigProvider>
  );
}

// 应用暗色主题（可选）
document.body.setAttribute('arco-theme', 'dark');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

