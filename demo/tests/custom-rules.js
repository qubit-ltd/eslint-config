/**
 * 自定义规则测试
 * 这个文件测试我们配置中的自定义规则和覆盖规则
 * 验证与 airbnb-base 的差异是否按预期工作
 */

// ========== 我们允许但 airbnb 不允许的规则 ==========

// 1. camelcase: 'off' - 我们允许非驼峰命名
const snake_case_variable = 'allowed in our config';
const kebab_case_function = () => 'also allowed';
const SCREAMING_SNAKE_CASE = 'constants are fine';

// 2. class-methods-use-this: 'off' - 我们允许不使用 this 的类方法
class UtilityClass {
  // 这个方法不使用 this，但在我们的配置中是允许的
  static formatDate(date) {
    return date.toISOString();
  }

  // 实例方法不使用 this 也是允许的
  getCurrentTimestamp() {
    return Date.now();
  }
}

// 3. dot-notation: 'off' - 我们允许括号访问属性
const config = {
  'api-url': 'https://api.example.com',
  'max-retries': 3,
};

// 这些访问方式都是允许的
const apiUrl = config['api-url']; // 括号访问
const maxRetries = config['max-retries']; // 括号访问
const normalProp = config.normalProp; // 点访问

// 4. no-else-return: 'off' - 我们允许 else return
function processValue(value) {
  if (value > 0) {
    return 'positive';
  } else {
    return 'non-positive'; // 允许 else return
  }
}

// 5. no-new: 'off' - 我们允许 new 但不赋值
function initializeLibrary() {
  new Date(); // 允许这种用法
  new Promise((resolve) => resolve()); // 也允许
}

// 6. no-new-wrappers: 'off' - 我们允许包装对象
const stringObject = new String('test'); // 允许
const numberObject = new Number(42); // 允许
const booleanObject = new Boolean(true); // 允许

// 7. no-param-reassign: 'off' - 我们允许参数重新赋值
function modifyParameter(param) {
  param = param || 'default'; // 允许修改参数
  return param;
}

function modifyObjectParameter(obj) {
  obj.modified = true; // 允许修改对象属性
  return obj;
}

// 8. no-continue: 'off' - 我们允许 continue 语句
function processArray(items) {
  const results = [];

  for (const item of items) {
    if (!item.isValid) {
      continue; // 允许使用 continue
    }
    results.push(item.process());
  }

  return results;
}

// 9. no-plusplus: 'off' - 我们允许 ++ 和 --
function countUp(max) {
  const results = [];
  for (let i = 0; i < max; i++) { // 允许 i++
    results.push(i);
  }
  return results;
}

// 10. no-restricted-syntax: 'off' - 我们允许 for...in 和 for...of
function demonstrateLoops(obj, arr) {
  // for...in 循环是允许的
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key, obj[key]);
    }
  }

  // for...of 循环也是允许的
  for (const item of arr) {
    console.log(item);
  }
}

// 11. no-shadow: 'off' - 我们允许变量遮蔽
const name = 'global';

function shadowExample() {
  const name = 'local'; // 允许遮蔽全局变量
  return name;
}

// 12. no-underscore-dangle: 'off' - 我们允许下划线
const _privateVariable = 'allowed';
const obj = {
  _internalMethod() {
    return 'internal';
  },
  publicMethod() {
    return this._internalMethod();
  },
};

// 13. no-unused-expressions: 'off' - 我们允许未使用的表达式
function allowUnusedExpressions() {
  'use strict'; // 允许字符串表达式

  const result = someCondition && someFunction(); // 允许短路表达式

  someCondition ? doSomething() : doSomethingElse(); // 允许三元表达式
}

// ========== 我们的自定义配置 ==========

// 14. 我们的 no-unused-vars 配置允许 _ 变量
function withUnusedUnderscore() {
  const _ = 'this is allowed'; // 不会产生警告
  const unused = 'this will produce warning'; // 会产生警告

  return 'done';
}

// 15. 我们的 max-len 配置是 120 字符，并且忽略注释和字符串
const longString = 'This is a very long string that exceeds the normal line length but should be allowed because we ignore strings in our max-len rule configuration';

// 这个注释非常长，但应该被忽略：This is a very long comment that exceeds the normal line length but should be allowed because we ignore comments in our max-len rule configuration

// 16. 我们的 comma-dangle 配置
const multilineObject = {
  first: 'value',
  second: 'value',
  third: 'value', // 要求尾随逗号
};

const singleLineObject = { first: 'value', second: 'value' }; // 不要求尾随逗号

// 17. 我们的 indent 配置处理装饰器
class DecoratedClass {
  // 这种缩进应该是正确的，即使有装饰器
  @decorator
  decoratedMethod() {
    return 'decorated';
  }
}

// 18. 我们的 spaced-comment 配置
// 这是正确的注释格式
/* 这也是正确的块注释格式 */

//这种注释格式可能会产生警告（缺少空格）
/*这种块注释格式也可能会产生警告*/

// ========== Import/Export 自定义规则 ==========

// 我们的配置中这些 import 规则是关闭的或修改的：
// - import/no-unresolved: 'off'
// - import/no-extraneous-dependencies: 'off'
// - import/prefer-default-export: 'off'
// - import/first: 'off'
// - import/extensions: 'off'

// 因此这些应该是允许的：
import nonExistentModule from './non-existent-module.js'; // 通常会报错，但我们关闭了
import devDependency from 'some-dev-dependency'; // 通常会报错，但我们关闭了

// 单个导出不要求默认导出
export const singleExport = 'allowed';

// 导入不必须在顶部
const someCode = 'before import';
import lateImport from './some-module.js'; // 允许

// ========== 测试我们的环境配置 ==========

// 我们配置了多种环境，这些全局变量应该是可用的：

// Browser 环境
if (typeof window !== 'undefined') {
  console.log(window.location.href);
  document.getElementById('test');
}

// Node.js 环境
if (typeof process !== 'undefined') {
  console.log(process.env.NODE_ENV);
  console.log(__dirname, __filename);
}

// 测试环境
if (typeof describe !== 'undefined') {
  describe('test suite', () => {
    it('should work', () => {
      expect(true).toBe(true);
    });
  });
}

// ========== 导出 ==========
export {
  snake_case_variable,
  kebab_case_function,
  SCREAMING_SNAKE_CASE,
  UtilityClass,
  apiUrl,
  maxRetries,
  processValue,
  initializeLibrary,
  stringObject,
  numberObject,
  booleanObject,
  modifyParameter,
  modifyObjectParameter,
  processArray,
  countUp,
  demonstrateLoops,
  shadowExample,
  obj,
  allowUnusedExpressions,
  withUnusedUnderscore,
  longString,
  multilineObject,
  singleLineObject,
  DecoratedClass,
  singleExport,
  someCode,
};
