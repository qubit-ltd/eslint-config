# ESLint 9.0 升级指南

本版本将 ESLint 配置从 8.x 升级到 9.x，采用了新的扁平化配置格式，并移除了对 `eslint-config-airbnb-base` 的依赖。

## 主要变更

### 1. 版本升级
- ESLint: 8.12.0 → 9.35.0
- 移除依赖: `eslint-config-airbnb-base`
- 新增依赖: `@eslint/js`
- Node.js 最低版本要求: 18.18.0+

### 2. 配置格式变更
- 从传统的 `.eslintrc` 格式迁移到扁平化配置格式
- 配置文件现在使用 ES 模块格式
- 不再依赖外部配置包，所有规则都内置

### 3. 规则保持
- 保持了所有原有的自定义规则
- 集成了 airbnb-base 的核心规则
- 维持了与原配置的兼容性

## 使用方法

### 在项目中使用

1. **安装依赖**
```bash
npm install @qubit-ltd/eslint-config@^2.0.0 --save-dev
```

2. **创建 eslint.config.js**
```javascript
import config from '@qubit-ltd/eslint-config';

export default config;
```

3. **运行 ESLint**
```bash
npx eslint .
```

### 自定义配置

如果需要自定义规则，可以扩展配置：

```javascript
import baseConfig from '@qubit-ltd/eslint-config';

export default [
  ...baseConfig,
  {
    rules: {
      // 你的自定义规则
      'no-console': 'error',
    },
  },
];
```

## 迁移注意事项

1. **Node.js 版本**: 确保使用 Node.js 18.18.0 或更高版本
2. **配置文件**: 删除旧的 `.eslintrc.*` 文件，创建新的 `eslint.config.js`
3. **package.json**: 如果项目使用 CommonJS，需要设置 `"type": "module"` 或使用 `.mjs` 扩展名

## 测试验证

升级后可以运行以下命令验证配置是否正常工作：

```bash
npx eslint --print-config index.js
```

## 支持的环境

- Browser
- Node.js
- CommonJS
- AMD
- ES6 Modules
- 测试框架: Mocha, Jest, Jasmine
- 其他: PhantomJS, Protractor
