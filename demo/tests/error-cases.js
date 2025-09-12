/**
 * 错误用例测试
 * 这个文件包含各种应该被 ESLint 标记为错误的代码
 * 用于验证 ESLint 规则是否正确工作
 */

/* eslint-disable */
// 注意: 这个文件故意包含错误，用于测试 ESLint 规则

// ========== 语法错误 ==========

// 缺少分号
const missingsemicolon = 'this line is missing a semicolon'

// 使用 var 而不是 const/let
var oldStyleVariable = 'should use const or let';

// 使用双等号而不是三等号
function badComparison(value) {
  if (value == 'test') {
    return true;
  }
  return false;
}

// ========== 样式错误 ==========

// 使用双引号而不是单引号
const wrongQuotes = "should use single quotes";

// 缺少空格
const noSpaces=1+2+3;

// 错误的缩进
function badIndentation() {
console.log('bad indentation');
  if (true) {
console.log('inconsistent indentation');
  }
}

// 多余的空行


const tooManyEmptyLines = 'above';

// 行尾空格
const trailingSpaces = 'this line has trailing spaces';

// ========== 变量错误 ==========

// 未使用的变量
const unusedVariable = 'this variable is never used';

// 重复声明
let duplicateVar = 1;
let duplicateVar = 2;

// 使用未声明的变量
function useUndeclaredVariable() {
  return undeclaredVariable;
}

// ========== 函数错误 ==========

// 箭头函数不必要的花括号
const unnecessaryBraces = (x) => {
  return x * 2;
};

// 函数参数重新赋值
function reassignParameter(param) {
  param = 'modified';
  return param;
}

// 空函数体
function emptyFunction() {
}

// ========== 对象和数组错误 ==========

// 对象属性引号不一致
const inconsistentQuotes = {
  'quoted': 'value',
  unquoted: 'value'
};

// 数组中多余的逗号
const arrayWithExtraComma = [1, 2, 3,];

// 对象中缺少逗号
const missingComma = {
  first: 'value'
  second: 'value'
};

// ========== ES6 错误 ==========

// 不必要的构造函数
class UnnecessaryConstructor {
  constructor() {
    super();
  }
}

// 重复的类成员
class DuplicateMembers {
  method() {
    return 'first';
  }

  method() {
    return 'duplicate';
  }
}

// 无用的重命名
const { name: name } = { name: 'test' };

// ========== 导入导出错误 ==========

// 导入不存在的模块
import nonExistentModule from './non-existent.js';

// 重复导入
import { something } from './module.js';
import { something } from './module.js';

// 导出可变绑定
export let mutableExport = 'should not export mutable';

// ========== 其他错误 ==========

// 使用 eval
const dangerousEval = eval('1 + 1');

// 使用 with 语句
with (Math) {
  const result = sqrt(16);
}

// 不安全的否定
if (!key in object) {
  console.log('unsafe negation');
}

// 无限循环
while (true) {
  break;
}

// 不可达代码
function unreachableCode() {
  return 'early return';
  console.log('this will never execute');
}

// 空的 catch 块
try {
  riskyOperation();
} catch (error) {
  // 空的 catch 块
}

// 魔法数字
function calculateArea(radius) {
  return 3.14159 * radius * radius;
}

// console.log 在生产环境中
if (process.env.NODE_ENV === 'production') {
  console.log('this should not be in production');
}

// 导出（这些导出会产生错误）
export {
  missingsemicolon,
  oldStyleVariable,
  badComparison,
  wrongQuotes,
  noSpaces,
  badIndentation,
  unnecessaryBraces,
  reassignParameter,
  emptyFunction,
  inconsistentQuotes,
  UnnecessaryConstructor,
  DuplicateMembers,
  dangerousEval,
  calculateArea,
};
