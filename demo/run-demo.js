#!/usr/bin/env node

/**
 * ESLint 配置演示脚本
 * 展示配置的各种功能和规则
 */

import { execSync } from 'child_process';

console.log('🎯 ESLint 9.0 配置演示');
console.log('='.repeat(50));

console.log('\n📋 1. 检查正确的代码示例:');
try {
  execSync('npx eslint examples/basic-usage.js', { stdio: 'inherit' });
  console.log('✅ 基础示例检查完成');
} catch (error) {
  console.log('⚠️  基础示例有一些问题需要注意');
}

console.log('\n📋 2. 检查 ES6 特性示例:');
try {
  execSync('npx eslint examples/es6-features.js', { stdio: 'inherit' });
  console.log('✅ ES6 特性检查完成');
} catch (error) {
  console.log('⚠️  ES6 示例有一些问题需要注意');
}

console.log('\n📋 3. 检查类的使用示例:');
try {
  execSync('npx eslint examples/class-example.js', { stdio: 'inherit' });
  console.log('✅ 类示例检查完成');
} catch (error) {
  console.log('⚠️  类示例有一些问题需要注意');
}

console.log('\n📋 4. 测试错误检测能力:');
try {
  execSync('npx eslint tests/error-cases.js --format=compact', { stdio: 'inherit' });
  console.log('❌ 错误检测测试失败 - 应该检测到错误');
} catch (error) {
  console.log('✅ 错误检测正常 - 成功检测到代码问题');
}

console.log('\n📋 5. 测试警告检测能力:');
try {
  execSync('npx eslint tests/warning-cases.js --format=compact', { stdio: 'inherit' });
  console.log('❌ 警告检测测试失败 - 应该检测到警告');
} catch (error) {
  console.log('✅ 警告检测正常 - 成功检测到代码问题');
}

console.log('\n📋 6. 测试自定义规则:');
try {
  execSync('npx eslint tests/custom-rules.js --format=compact', { stdio: 'inherit' });
  console.log('❌ 自定义规则测试失败 - 应该允许某些代码');
} catch (error) {
  console.log('✅ 自定义规则正常 - 按预期工作');
}

console.log('\n🎉 演示完成!');
console.log('\n📚 更多信息:');
console.log('- 查看 examples/ 目录了解正确的代码写法');
console.log('- 查看 tests/ 目录了解各种规则的测试用例');
console.log('- 查看 README.md 了解详细使用说明');
console.log('- 查看 ../UPGRADE_GUIDE.md 了解升级指南');
