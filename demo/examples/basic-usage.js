/**
 * 基础使用示例
 * 展示符合 ESLint 规范的基本 JavaScript 代码
 */

// ========== 变量声明 ==========
const APP_NAME = 'ESLint Demo';
const version = '1.0.0';
const _currentUser = null; // 使用下划线前缀避免未使用变量警告

// ========== 函数定义 ==========
function greetUser(name) {
  if (!name) {
    throw new Error('Name is required');
  }
  return `Hello, ${name}!`;
}

// 箭头函数
const calculateTotal = (items) => items.reduce((sum, item) => sum + item.price, 0);

// ========== 对象和数组 ==========
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
};

const supportedLanguages = [
  'javascript',
  'typescript',
  'python',
  'java',
];

// ========== 条件语句 ==========
function processUser(user) {
  if (user.isActive && user.hasPermission) {
    return {
      status: 'authorized',
      message: 'User can proceed',
    };
  }

  if (!user.isActive) {
    return {
      status: 'inactive',
      message: 'User account is inactive',
    };
  }

  return {
    status: 'unauthorized',
    message: 'User lacks required permissions',
  };
}

// ========== 循环 ==========
function findUserById(users, targetId) {
  for (const user of users) {
    if (user.id === targetId) {
      return user;
    }
  }
  return null;
}

// ========== 异步操作 ==========
async function fetchUserData(userId) {
  try {
    // 在实际项目中，fetch 是浏览器全局函数或需要导入 node-fetch
    const response = await globalThis.fetch(`${config.apiUrl}/users/${userId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}

// ========== 导出 ==========
export {
  APP_NAME,
  version,
  greetUser,
  calculateTotal,
  config,
  supportedLanguages,
  processUser,
  findUserById,
  fetchUserData,
};

export default {
  name: APP_NAME,
  version,
  initialized: false,
};
