# 快速开始指南

## 🚀 5分钟快速上手

### 1. 安装
```bash
npm install --save-dev eslint @qubit-ltd/eslint-config
```

### 2. 创建配置文件
创建 `eslint.config.js`：
```javascript
import config from '@qubit-ltd/eslint-config';

export default config;
```

### 3. 添加脚本
在 `package.json` 中添加：
```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### 4. 运行检查
```bash
npm run lint
```

## 🎯 常用配置

### 自定义规则
```javascript
import config from '@qubit-ltd/eslint-config';

export default [
  ...config,
  {
    rules: {
      'no-console': 'warn',  // 自定义规则
    },
  },
];
```

### 测试文件配置
```javascript
import config from '@qubit-ltd/eslint-config';

export default [
  ...config,
  {
    files: ['**/*.test.js'],
    rules: {
      'no-console': 'off',
    },
  },
];
```

## 📚 更多信息

- 详细文档: [README.md](./README.md)
- 升级指南: [UPGRADE_GUIDE.md](./UPGRADE_GUIDE.md)
- 示例代码: [demo/](./demo/)

## ❓ 遇到问题？

1. 确保 Node.js >= 18.18.0
2. 确保 ESLint >= 9.0.0
3. 查看 [demo 示例](./demo/examples/)
4. 提交 Issue 寻求帮助
