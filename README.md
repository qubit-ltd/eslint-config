# @qubit-ltd/eslint-config

一个为 JavaScript 编码风格定制的 ESLint 规则配置包，基于 Airbnb 风格指南，并针对我们公司的编码规范进行了优化。

## ✨ 特性

- 🚀 **ESLint 9.0+** - 支持最新的 ESLint 版本和扁平化配置
- 📦 **零依赖** - 不再依赖 `eslint-config-airbnb-base`，所有规则内置
- 🎯 **定制化** - 基于 Airbnb 规则，针对公司编码规范进行优化
- 🔧 **灵活配置** - 支持自定义规则和扩展配置
- 🌍 **多环境支持** - 支持浏览器、Node.js、测试框架等多种环境
- 📚 **完整示例** - 提供详细的使用示例和测试用例

## 📋 系统要求

- **Node.js**: >= 18.18.0
- **ESLint**: >= 9.0.0

## 🚀 安装

### 使用 npm
```bash
npm install --save-dev eslint @qubit-ltd/eslint-config
```

### 使用 yarn
```bash
yarn add --dev eslint @qubit-ltd/eslint-config
```

## 📖 使用方法

### 1. 基础使用

创建 `eslint.config.js` 文件（ESLint 9.0+ 推荐格式）：

```javascript
import config from '@qubit-ltd/eslint-config';

export default config;
```

### 2. 扩展配置

如果需要自定义规则，可以扩展配置：

```javascript
import config from '@qubit-ltd/eslint-config';

export default [
  ...config,
  {
    rules: {
      // 你的自定义规则
      'no-console': 'error',
      'max-len': ['warn', { code: 100 }],
    },
  },
];
```

### 3. 针对特定文件的配置

```javascript
import config from '@qubit-ltd/eslint-config';

export default [
  ...config,
  {
    // 测试文件的特殊配置
    files: ['**/*.test.js', '**/*.spec.js'],
    rules: {
      'no-console': 'off',
      'max-lines': 'off',
    },
  },
  {
    // 配置文件的特殊配置
    files: ['**/config/**/*.js', '**/*.config.js'],
    rules: {
      'import/no-commonjs': 'off',
    },
  },
];
```

### 4. 与其他配置组合

```javascript
import config from '@qubit-ltd/eslint-config';
import typescriptConfig from '@typescript-eslint/eslint-plugin';

export default [
  ...config,
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptConfig,
    },
    rules: {
      // TypeScript 特定规则
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },
];
```

## 🎯 支持的环境

配置自动支持以下环境的全局变量：

- **浏览器环境**: `window`, `document`, `navigator`, `console` 等
- **Node.js 环境**: `process`, `Buffer`, `__dirname`, `__filename` 等
- **模块系统**: CommonJS, AMD, ES6 Modules
- **测试框架**: Jest, Mocha, Jasmine 等
- **其他工具**: PhantomJS, Protractor 等

## 📝 package.json 脚本

在你的 `package.json` 中添加 ESLint 脚本：

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "lint:check": "eslint . --max-warnings 0"
  }
}
```

## 🔧 自定义规则说明

我们的配置基于 Airbnb 风格指南，但进行了以下自定义：

### 允许的规则（与 Airbnb 不同）

- ✅ **非驼峰命名** (`camelcase: 'off'`) - 允许 `snake_case` 等命名方式
- ✅ **类方法不使用 this** (`class-methods-use-this: 'off'`) - 允许工具方法
- ✅ **else return** (`no-else-return: 'off'`) - 允许 else 中的 return
- ✅ **new 不赋值** (`no-new: 'off'`) - 允许 `new Date()` 等用法
- ✅ **包装对象** (`no-new-wrappers: 'off'`) - 允许 `new String()` 等
- ✅ **参数重新赋值** (`no-param-reassign: 'off'`) - 允许修改参数
- ✅ **continue 语句** (`no-continue: 'off'`) - 允许使用 continue
- ✅ **++ 和 --** (`no-plusplus: 'off'`) - 允许自增自减操作符
- ✅ **for...in 和 for...of** (`no-restricted-syntax: 'off'`) - 允许这些循环
- ✅ **变量遮蔽** (`no-shadow: 'off'`) - 允许变量名重复
- ✅ **下划线命名** (`no-underscore-dangle: 'off'`) - 允许 `_private` 等
- ✅ **未使用表达式** (`no-unused-expressions: 'off'`) - 允许某些表达式

### 自定义配置

- 🎯 **未使用变量** - 允许 `_` 变量不产生警告
- 🎯 **最大行长度** - 120 字符，忽略注释、字符串、URL 等
- 🎯 **缩进** - 2 空格，特殊处理装饰器缩进问题
- 🎯 **分号** - 强制使用分号
- 🎯 **引号** - 强制使用单引号
- 🎯 **尾随逗号** - 多行时强制使用

## 🧪 测试和示例

我们提供了完整的示例和测试用例：

```bash
# 克隆仓库后，进入 demo 目录
cd demo
npm install

# 运行演示
npm run demo

# 查看示例代码
npm run lint:examples

# 运行测试用例
npm test
```

### 示例文件

- `demo/examples/basic-usage.js` - 基础 JavaScript 用法
- `demo/examples/es6-features.js` - ES6+ 特性示例
- `demo/examples/class-example.js` - 类的使用示例
- `demo/examples/import-export.js` - 模块系统示例

### 测试用例

- `demo/tests/error-cases.js` - 错误用例测试
- `demo/tests/warning-cases.js` - 警告用例测试
- `demo/tests/custom-rules.js` - 自定义规则测试

## 🔄 从旧版本迁移

### 从 ESLint 8.x 迁移

如果你正在使用旧版本的配置，请参考 [升级指南](./UPGRADE_GUIDE.md)。

主要变更：
1. 配置格式从 `.eslintrc.*` 迁移到 `eslint.config.js`
2. 使用 ES 模块导入语法
3. Node.js 版本要求提升到 18.18.0+

### 旧配置格式（不推荐）

如果你必须使用旧的 `.eslintrc` 格式，可以这样配置：

```json
{
  "root": true,
  "extends": ["@qubit-ltd/eslint-config"]
}
```

但我们强烈建议迁移到新的扁平化配置格式。

## 🛠️ 开发和调试

### 查看当前配置

```bash
# 查看特定文件的配置
npx eslint --print-config src/index.js

# 检查配置是否正确加载
npx eslint --debug src/
```

### 常见问题

#### Q: 为什么某些规则没有生效？
A: 确保你使用的是 ESLint 9.0+ 和正确的配置格式。

#### Q: 如何禁用特定规则？
A: 在你的配置中添加规则覆盖：
```javascript
export default [
  ...config,
  {
    rules: {
      'rule-name': 'off',
    },
  },
];
```

#### Q: 如何为特定文件禁用规则？
A: 使用 ESLint 注释：
```javascript
/* eslint-disable rule-name */
// 你的代码
/* eslint-enable rule-name */
```

## 📚 相关资源

- [ESLint 官方文档](https://eslint.org/)
- [ESLint 9.0 迁移指南](https://eslint.org/docs/latest/use/configure/migration-guide)
- [Airbnb JavaScript 风格指南](https://github.com/airbnb/javascript)
- [升级指南](./UPGRADE_GUIDE.md)
- [Demo 使用指南](./demo/DEMO_GUIDE.md)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个配置。

## 📄 许可证

MIT License - 详见 [LICENSE](./LICENSE) 文件。

## 📞 支持

如果你在使用过程中遇到问题，可以：

1. 查看 [demo 目录](./demo/) 中的示例
2. 阅读 [升级指南](./UPGRADE_GUIDE.md)
3. 提交 Issue 描述问题
4. 联系开发团队

---

**版本**: 2.0.0
**更新时间**: 2024年
**兼容性**: ESLint 9.0+, Node.js 18.18.0+