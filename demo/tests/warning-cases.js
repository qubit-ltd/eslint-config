/**
 * 警告用例测试
 * 这个文件包含应该被 ESLint 标记为警告的代码
 * 用于验证警告级别的规则是否正确工作
 */

// ========== 未使用变量警告 ==========

// 未使用的变量（应该产生警告）
const unusedString = 'this variable is not used';
const unusedNumber = 42;
const unusedArray = [1, 2, 3];

// 使用下划线的变量不应该产生警告
const _ = 'this is allowed';

// 使用的变量不应该产生警告
const usedVariable = 'this is used';
console.log(usedVariable);

// ========== 行长度警告 ==========

// 超过 120 字符的行（应该产生警告）
const veryLongLineOfCodeThatExceedsTheMaximumLineLengthConfigurationAndShouldTriggerAWarningFromESLintBecauseItIsTooLong = 'long line';

// 正常长度的行
const normalLine = 'this line is within the limit';

// ========== 函数复杂度警告 ==========

// 复杂度较高的函数（可能产生警告）
function complexFunction(a, b, c, d) {
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        if (d > 0) {
          return a + b + c + d;
        }
        return a + b + c;
      }
      return a + b;
    }
    return a;
  }
  return 0;
}

// ========== 类相关警告 ==========

// 每个文件多个类（可能产生警告）
class FirstClass {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class SecondClass {
  constructor(value) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

// ========== 函数名称警告 ==========

// 匿名函数表达式（可能产生警告）
const anonymousFunction = function (x) {
  return x * 2;
};

// 命名函数表达式（更好的做法）
const namedFunction = function multiply(x) {
  return x * 2;
};

// ========== console 语句警告 ==========

// 在开发环境中，console.log 应该是允许的
if (process.env.NODE_ENV === 'development') {
  console.log('Development mode logging');
  console.warn('Development warning');
  console.error('Development error');
}

// 在生产环境中，console 语句应该产生警告
if (process.env.NODE_ENV === 'production') {
  console.log('This might produce a warning in production');
}

// ========== debugger 语句警告 ==========

// debugger 在生产环境中应该产生警告
if (process.env.NODE_ENV === 'production') {
  debugger; // 这应该产生警告
}

// ========== 注释相关 ==========

// TODO: 这是一个待办事项注释（可能产生警告）
// FIXME: 这是一个修复注释（可能产生警告）
// XXX: 这是一个注意注释（可能产生警告）

// 正常注释不应该产生警告
// 这是一个正常的注释

// ========== 对象属性访问 ==========

const testObject = {
  'kebab-case': 'value',
  normalProperty: 'value',
};

// 使用点号访问可能产生警告的属性
// console.log(testObject.kebab-case); // 这会产生语法错误

// 使用括号访问是正确的
console.log(testObject['kebab-case']);
console.log(testObject.normalProperty);

// ========== 数组方法使用 ==========

const numbers = [1, 2, 3, 4, 5];

// 使用 for...in 遍历数组（可能产生警告）
for (const index in numbers) {
  console.log(numbers[index]);
}

// 更好的做法
for (const number of numbers) {
  console.log(number);
}

// 或者使用数组方法
numbers.forEach((number) => {
  console.log(number);
});

// ========== 正则表达式 ==========

// 可能产生警告的正则表达式使用
const regexWithoutFlags = new RegExp('pattern');

// 更好的做法
const regexWithFlags = /pattern/gi;

// ========== 类型检查 ==========

function checkType(value) {
  // 使用 typeof 检查（正确做法）
  if (typeof value === 'string') {
    return 'is string';
  }

  // 可能产生警告的类型检查
  if (value instanceof String) {
    return 'is String object';
  }

  return 'unknown type';
}

// ========== 导出 ==========
export {
  unusedString, // 这个导出可能产生警告，因为变量本身未使用
  usedVariable,
  veryLongLineOfCodeThatExceedsTheMaximumLineLengthConfigurationAndShouldTriggerAWarningFromESLintBecauseItIsTooLong,
  normalLine,
  complexFunction,
  FirstClass,
  SecondClass,
  anonymousFunction,
  namedFunction,
  testObject,
  numbers,
  regexWithFlags,
  checkType,
};
