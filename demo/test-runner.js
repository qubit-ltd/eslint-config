#!/usr/bin/env node

/**
 * Demo 测试运行器
 * 运行各种 ESLint 测试并生成报告
 */

import { execSync } from 'child_process';
import { writeFileSync } from 'fs';

const tests = [
  {
    name: '正确示例测试',
    command: 'npx eslint examples/basic-usage.js --format=json',
    expectErrors: false,
  },
  {
    name: '错误用例测试',
    command: 'npx eslint tests/error-cases.js --format=json',
    expectErrors: true,
  },
  {
    name: '警告用例测试',
    command: 'npx eslint tests/warning-cases.js --format=json',
    expectErrors: true,
  },
  {
    name: '自定义规则测试',
    command: 'npx eslint tests/custom-rules.js --format=json',
    expectErrors: true,
  },
];

const results = [];

console.log('🚀 开始运行 ESLint 配置测试...\n');

for (const test of tests) {
  console.log(`📋 运行: ${test.name}`);

  try {
    const output = execSync(test.command, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
    });

    const result = JSON.parse(output);
    const totalErrors = result.reduce((sum, file) => sum + file.errorCount, 0);
    const totalWarnings = result.reduce((sum, file) => sum + file.warningCount, 0);

    results.push({
      name: test.name,
      success: !test.expectErrors ? totalErrors === 0 : totalErrors > 0,
      errors: totalErrors,
      warnings: totalWarnings,
      details: result,
    });

    if (test.expectErrors) {
      console.log(`   ✅ 检测到 ${totalErrors} 个错误, ${totalWarnings} 个警告 (符合预期)`);
    } else {
      console.log(`   ✅ 无错误, ${totalWarnings} 个警告`);
    }

  } catch (error) {
    if (test.expectErrors) {
      // 对于期望有错误的测试，命令失败是正常的
      try {
        const result = JSON.parse(error.stdout);
        const totalErrors = result.reduce((sum, file) => sum + file.errorCount, 0);
        const totalWarnings = result.reduce((sum, file) => sum + file.warningCount, 0);

        results.push({
          name: test.name,
          success: true,
          errors: totalErrors,
          warnings: totalWarnings,
          details: result,
        });

        console.log(`   ✅ 检测到 ${totalErrors} 个错误, ${totalWarnings} 个警告 (符合预期)`);
      } catch (parseError) {
        results.push({
          name: test.name,
          success: false,
          error: error.message,
        });
        console.log(`   ❌ 测试失败: ${error.message}`);
      }
    } else {
      results.push({
        name: test.name,
        success: false,
        error: error.message,
      });
      console.log(`   ❌ 测试失败: ${error.message}`);
    }
  }

  console.log('');
}

// 生成测试报告
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    total: results.length,
    passed: results.filter((r) => r.success).length,
    failed: results.filter((r) => !r.success).length,
  },
  results,
};

writeFileSync('test-report.json', JSON.stringify(report, null, 2));

console.log('📊 测试总结:');
console.log(`   总计: ${report.summary.total}`);
console.log(`   通过: ${report.summary.passed}`);
console.log(`   失败: ${report.summary.failed}`);
console.log(`\n📄 详细报告已保存到: test-report.json`);

if (report.summary.failed > 0) {
  process.exit(1);
}
