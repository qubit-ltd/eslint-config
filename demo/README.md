# ESLint 配置 Demo 和测试

这个目录包含了 ESLint 配置的完整示例和测试用例，帮助你理解和验证配置的正确性。

## 目录结构

```
demo/
├── README.md           # 本文件
├── examples/           # 使用示例
│   ├── basic-usage.js  # 基础使用示例
│   ├── es6-features.js # ES6 特性示例
│   ├── class-example.js # 类的使用示例
│   ├── import-export.js # 模块导入导出示例
│   └── eslint.config.js # ESLint 配置文件
├── tests/              # 测试用例
│   ├── error-cases.js  # 错误用例测试
│   ├── warning-cases.js # 警告用例测试
│   └── custom-rules.js # 自定义规则测试
└── package.json        # Demo 项目配置
```

## 如何使用

### 1. 安装依赖
```bash
cd demo
npm install
```

### 2. 运行 ESLint 检查
```bash
# 检查所有示例文件
npm run lint

# 检查特定文件
npm run lint examples/basic-usage.js

# 自动修复可修复的问题
npm run lint:fix
```

### 3. 运行测试
```bash
# 运行所有测试
npm test

# 运行特定测试
npm run test:errors
npm run test:warnings
```

## 示例说明

- **examples/**: 包含正确的代码示例，展示如何编写符合规范的代码
- **tests/**: 包含各种测试用例，验证 ESLint 规则是否正确工作

## 自定义配置示例

如果你需要在项目中自定义 ESLint 规则，可以参考 `examples/eslint.config.js` 中的示例。
