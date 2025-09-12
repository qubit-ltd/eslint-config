/**
 * 模块导入导出示例
 * 展示符合 ESLint 规范的模块系统使用方式
 */

// ========== 从其他示例文件导入 ==========
import {
  APP_NAME,
  version,
  greetUser,
  calculateTotal,
} from './basic-usage.js';

import {
  name,
  email,
  processNumbers,
  createUser,
  Animal,
  Dog,
} from './es6-features.js';

import {
  User,
  AdminUser,
  Rectangle,
  Circle,
  UserFactory,
} from './class-example.js';

// ========== 默认导入 ==========
import defaultExport from './basic-usage.js';

// ========== 命名空间导入 ==========
import * as ES6Features from './es6-features.js';
import * as ClassExamples from './class-example.js';

// ========== 工具函数 ==========
const formatCurrency = (amount, currency = 'USD') => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency,
}).format(amount);

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

const throttle = (func, limit) => {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
};

// ========== 常量定义 ==========
export const API_ENDPOINTS = {
  USERS: '/api/users',
  PRODUCTS: '/api/products',
  ORDERS: '/api/orders',
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^\+?[\d\s-()]+$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
};

// ========== 配置对象 ==========
export const appConfig = {
  name: APP_NAME,
  version,
  api: {
    baseUrl: 'https://api.example.com',
    timeout: 10000,
    retries: 3,
  },
  features: {
    darkMode: true,
    notifications: true,
    analytics: false,
  },
};

// ========== 服务类 ==========
export class ApiService {
  constructor(baseUrl = appConfig.api.baseUrl) {
    this.baseUrl = baseUrl;
    this.timeout = appConfig.api.timeout;
  }

  async get(endpoint) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async post(endpoint, data) {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}

// ========== 用户管理服务 ==========
export class UserService extends ApiService {
  async getAllUsers() {
    return this.get(API_ENDPOINTS.USERS);
  }

  async getUserById(id) {
    return this.get(`${API_ENDPOINTS.USERS}/${id}`);
  }

  async createUser(userData) {
    const user = createUser(userData.name, userData.role, userData.isActive);
    return this.post(API_ENDPOINTS.USERS, user);
  }

  async updateUser(id, userData) {
    return this.post(`${API_ENDPOINTS.USERS}/${id}`, userData);
  }
}

// ========== 演示函数 ==========
export function demonstrateImports() {
  // 使用导入的函数
  const greeting = greetUser(name);

  // 使用导入的类
  const user = new User('Test User', email);
  const admin = new AdminUser('Admin User', 'admin@example.com', ['all']);

  // 使用工厂模式
  const guestUser = UserFactory.createUser('guest', {});

  // 使用几何类
  const rectangle = new Rectangle(10, 20);
  const circle = new Circle(5);

  // 使用动物类
  const dog = new Dog('Buddy', 'Golden Retriever');

  // 计算示例
  const items = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 },
  ];
  const total = calculateTotal(items);

  return {
    greeting,
    users: [user, admin, guestUser],
    shapes: [rectangle, circle],
    animals: [dog],
    total: formatCurrency(total),
    appInfo: defaultExport,
  };
}

// ========== 异步模块加载示例 ==========
export async function loadModuleDynamically(moduleName) {
  try {
    const module = await import(`./${moduleName}.js`);
    return module;
  } catch (error) {
    console.error(`Failed to load module ${moduleName}:`, error);
    throw error;
  }
}

// ========== 条件导出 ==========
let conditionalExport;

if (process.env.NODE_ENV === 'development') {
  conditionalExport = {
    debug: true,
    logLevel: 'verbose',
  };
} else {
  conditionalExport = {
    debug: false,
    logLevel: 'error',
  };
}

export { conditionalExport };

// ========== 重新导出 ==========
export {
  // 从 basic-usage.js 重新导出
  greetUser as sayHello,
  calculateTotal as sumPrices,

  // 从 es6-features.js 重新导出
  processNumbers,
  createUser as makeUser,

  // 从 class-example.js 重新导出
  User as BaseUser,
  AdminUser as SuperUser,
};

// ========== 默认导出 ==========
export default {
  name: 'ImportExportDemo',
  version: '1.0.0',
  services: {
    api: ApiService,
    user: UserService,
  },
  utils: {
    formatCurrency,
    debounce,
    throttle,
  },
  constants: {
    API_ENDPOINTS,
    HTTP_STATUS,
    VALIDATION_RULES,
  },
  config: appConfig,
  demonstrate: demonstrateImports,
  loadModule: loadModuleDynamically,
};
