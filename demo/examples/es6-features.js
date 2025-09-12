/**
 * ES6+ 特性使用示例
 * 展示现代 JavaScript 特性的正确使用方式
 */

// ========== 解构赋值 ==========
const user = {
  name: 'John Doe',
  email: 'john@example.com',
  address: {
    city: 'New York',
    country: 'USA',
  },
};

// 对象解构
const { name, email } = user;
const { city, country } = user.address;

// 数组解构
const colors = ['red', 'green', 'blue'];
const [primary, secondary, tertiary] = colors;

// ========== 模板字符串 ==========
const welcomeMessage = `Welcome, ${name}! You are from ${city}, ${country}.`;
const multilineTemplate = `
  This is a multiline
  template string that
  maintains formatting.
`;

// ========== 箭头函数 ==========
const numbers = [1, 2, 3, 4, 5];

// 简单箭头函数
const doubled = numbers.map((n) => n * 2);

// 带花括号的箭头函数
const processNumbers = (nums) => {
  const filtered = nums.filter((n) => n > 2);
  const mapped = filtered.map((n) => n ** 2);
  return mapped;
};

// ========== 展开运算符 ==========
const originalArray = [1, 2, 3];
const extendedArray = [...originalArray, 4, 5, 6];

const baseConfig = { timeout: 1000, retries: 3 };
const extendedConfig = {
  ...baseConfig,
  apiUrl: 'https://api.example.com',
  debug: true,
};

// ========== 默认参数 ==========
function createUser(name, role = 'user', isActive = true) {
  return {
    name,
    role,
    isActive,
    createdAt: new Date(),
  };
}

// ========== 剩余参数 ==========
function sum(first, ...rest) {
  return rest.reduce((total, num) => total + num, first);
}

// ========== Promise 和 async/await ==========
const delay = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

async function processWithDelay(data) {
  console.log('Processing started...');
  await delay(1000);

  const result = data.map((item) => ({
    ...item,
    processed: true,
    timestamp: Date.now(),
  }));

  console.log('Processing completed');
  return result;
}

// ========== 类和继承 ==========
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    return `${this.name} makes a sound`;
  }

  getInfo() {
    return `${this.name} is a ${this.species}`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'dog');
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks`;
  }

  fetch() {
    return `${this.name} fetches the ball`;
  }
}

// ========== Map 和 Set ==========
const userRoles = new Map([
  ['admin', ['read', 'write', 'delete']],
  ['editor', ['read', 'write']],
  ['viewer', ['read']],
]);

const uniqueIds = new Set([1, 2, 3, 3, 4, 4, 5]);

// ========== Symbol ==========
const PRIVATE_KEY = Symbol('privateKey');
const API_TOKEN = Symbol('apiToken');

const secureObject = {
  publicData: 'visible',
  [PRIVATE_KEY]: 'hidden',
  [API_TOKEN]: 'secret-token',
};

// ========== 生成器函数 ==========
function* numberGenerator(max) {
  let current = 0;
  while (current < max) {
    yield current;
    current += 1;
  }
}

// ========== 导出 ==========
export {
  name,
  email,
  city,
  country,
  welcomeMessage,
  multilineTemplate,
  doubled,
  processNumbers,
  extendedArray,
  extendedConfig,
  createUser,
  sum,
  processWithDelay,
  Animal,
  Dog,
  userRoles,
  uniqueIds,
  secureObject,
  numberGenerator,
  PRIVATE_KEY,
  API_TOKEN,
};
