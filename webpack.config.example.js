const path = require('path');
const modifyVars = require('./src/theme/modify-vars.json');

module.exports = {
  // ... 其他配置
  
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
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.less'],
  },
};

