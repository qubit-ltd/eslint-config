// ESLint 配置文件示例
// 展示如何在项目中使用 @qubit-ltd/eslint-config

// 方式1: 直接使用（推荐）
// import config from '@qubit-ltd/eslint-config';
// export default config;

// 方式2: 本地开发时使用相对路径
import config from '@qubit-ltd/eslint-config/index.js';

// 方式3: 扩展配置，添加自定义规则
export default [
  ...config,
  {
    // 针对特定文件的规则
    files: ['**/*.test.js', '**/*.spec.js'],
    rules: {
      // 测试文件中允许使用 console.log
      'no-console': 'off',
      // 测试文件中允许使用魔法数字
      'no-magic-numbers': 'off',
    },
  },
  {
    // 针对配置文件的规则
    files: ['**/config/**/*.js', '**/*.config.js'],
    rules: {
      // 配置文件中允许使用 require
      'import/no-commonjs': 'off',
    },
  },
  {
    // 全局自定义规则
    rules: {
      // 示例: 如果你想要更严格的 console 规则
      // 'no-console': 'error',

      // 示例: 如果你想要允许某些下划线命名
      // 'no-underscore-dangle': ['error', {
      //   'allow': ['_id', '_type']
      // }],

      // 示例: 如果你想要自定义最大行长度
      // 'max-len': ['warn', {
      //   'code': 100,
      //   'ignoreUrls': true,
      //   'ignoreStrings': true
      // }],
    },
  },
];
