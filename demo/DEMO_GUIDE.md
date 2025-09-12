# ESLint 配置 Demo 使用指南

这个 demo 目录提供了完整的 ESLint 9.0 配置使用示例和测试用例。

## 🚀 快速开始

### 1. 安装依赖
```bash
cd demo
npm install
```

### 2. 运行演示
```bash
# 运行完整演示
npm run demo

# 检查示例文件
npm run lint:examples

# 运行测试用例
npm run test
```

## 📁 目录结构

```
demo/
├── README.md              # 基本说明
├── DEMO_GUIDE.md          # 本文件 - 详细使用指南
├── package.json           # Demo 项目配置
├── eslint.config.js       # ESLint 配置文件
├── run-demo.js           # 演示脚本
├── test-runner.js        # 测试运行器
├── examples/             # 正确代码示例
│   ├── basic-usage.js    # 基础 JavaScript 用法
│   ├── es6-features.js   # ES6+ 特性示例
│   ├── class-example.js  # 类的使用示例
│   ├── import-export.js  # 模块导入导出示例
│   └── eslint.config.js  # 配置文件示例
└── tests/                # 测试用例
    ├── error-cases.js    # 错误用例测试
    ├── warning-cases.js  # 警告用例测试
    └── custom-rules.js   # 自定义规则测试
```

## 🎯 示例文件说明

### examples/basic-usage.js
展示基础的 JavaScript 编程规范：
- 变量声明和命名
- 函数定义和调用
- 条件语句和循环
- 异步操作
- 模块导入导出

### examples/es6-features.js
展示 ES6+ 现代 JavaScript 特性：
- 解构赋值
- 模板字符串
- 箭头函数
- 展开运算符
- Promise 和 async/await
- 类和继承
- Map、Set、Symbol
- 生成器函数

### examples/class-example.js
展示面向对象编程规范：
- 基础类定义
- 继承和多态
- 抽象类模式
- Mixin 模式
- 工厂模式

### examples/import-export.js
展示模块系统的使用：
- 各种导入方式
- 导出方式
- 动态导入
- 重新导出

## 🧪 测试用例说明

### tests/error-cases.js
包含应该被标记为错误的代码：
- 语法错误（缺少分号、错误缩进等）
- 变量错误（未使用、重复声明等）
- 函数错误（参数重新赋值等）
- ES6 错误（重复类成员等）
- 其他错误（使用 eval、with 等）

### tests/warning-cases.js
包含应该被标记为警告的代码：
- 未使用变量
- 行长度超限
- 函数复杂度过高
- console 语句
- debugger 语句

### tests/custom-rules.js
测试我们的自定义规则配置：
- 允许非驼峰命名
- 允许不使用 this 的类方法
- 允许 else return
- 允许 continue 语句
- 允许下划线命名
- 其他自定义规则

## 📊 运行命令详解

### 基本检查命令
```bash
# 检查所有文件
npm run lint

# 自动修复可修复的问题
npm run lint:fix

# 只检查示例文件
npm run lint:examples

# 只检查测试文件
npm run lint:tests
```

### 测试命令
```bash
# 运行所有测试
npm test

# 运行错误用例测试
npm run test:errors

# 运行警告用例测试
npm run test:warnings

# 运行自定义规则测试
npm run test:custom

# 运行详细测试报告
npm run test:run
```

### 演示命令
```bash
# 运行完整演示
npm run demo
```

## 🔧 自定义配置示例

如果你想在项目中自定义 ESLint 规则，可以参考以下方式：

### 1. 基础使用
```javascript
// eslint.config.js
import config from '@qubit-ltd/eslint-config';

export default config;
```

### 2. 扩展配置
```javascript
// eslint.config.js
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
// eslint.config.js
import config from '@qubit-ltd/eslint-config';

export default [
  ...config,
  {
    files: ['**/*.test.js'],
    rules: {
      'no-console': 'off',
      'max-lines': 'off',
    },
  },
];
```

## 🐛 常见问题

### Q: 为什么有些示例文件显示警告？
A: 这是正常的。示例文件中的一些警告是故意保留的，用于展示 ESLint 的检测能力。

### Q: 如何在我的项目中使用这个配置？
A: 参考 `../UPGRADE_GUIDE.md` 中的详细说明。

### Q: 可以禁用某些规则吗？
A: 可以。在你的 `eslint.config.js` 中添加自定义规则即可覆盖默认配置。

### Q: 为什么测试用例会故意产生错误？
A: 测试用例的目的是验证 ESLint 规则是否正确工作，所以错误和警告是预期的。

## 📚 更多资源

- [ESLint 9.0 官方文档](https://eslint.org/docs/latest/)
- [ESLint 配置迁移指南](https://eslint.org/docs/latest/use/configure/migration-guide)
- [JavaScript 编码规范](https://github.com/airbnb/javascript)

## 🤝 贡献

如果你发现问题或有改进建议，欢迎提交 Issue 或 Pull Request。
