/**
 * 类的使用示例
 * 展示符合 ESLint 规范的类定义和使用方式
 */

// ========== 基础类定义 ==========
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.createdAt = new Date();
    this.isActive = true;
  }

  // 实例方法
  getDisplayName() {
    return this.name.toUpperCase();
  }

  updateEmail(newEmail) {
    if (!this.isValidEmail(newEmail)) {
      throw new Error('Invalid email format');
    }
    this.email = newEmail;
  }

  deactivate() {
    this.isActive = false;
  }

  // 私有方法（使用约定命名）
  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // 静态方法
  static createGuestUser() {
    return new User('Guest', 'guest@example.com');
  }

  static validateUserData(userData) {
    const requiredFields = ['name', 'email'];
    return requiredFields.every((field) => userData[field]);
  }
}

// ========== 继承示例 ==========
class AdminUser extends User {
  constructor(name, email, permissions = []) {
    super(name, email);
    this.permissions = permissions;
    this.role = 'admin';
  }

  addPermission(permission) {
    if (!this.permissions.includes(permission)) {
      this.permissions.push(permission);
    }
  }

  removePermission(permission) {
    this.permissions = this.permissions.filter((p) => p !== permission);
  }

  hasPermission(permission) {
    return this.permissions.includes(permission);
  }

  // 重写父类方法
  getDisplayName() {
    return `[ADMIN] ${super.getDisplayName()}`;
  }
}

// ========== 抽象类模式 ==========
class Shape {
  constructor(color) {
    if (this.constructor === Shape) {
      throw new Error('Cannot instantiate abstract class Shape');
    }
    this.color = color;
  }

  // 抽象方法（需要子类实现）
  getArea() {
    throw new Error('getArea method must be implemented by subclass');
  }

  getPerimeter() {
    throw new Error('getPerimeter method must be implemented by subclass');
  }

  // 具体方法
  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }
}

class Rectangle extends Shape {
  constructor(width, height, color = 'black') {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }

  getDimensions() {
    return {
      width: this.width,
      height: this.height,
    };
  }
}

class Circle extends Shape {
  constructor(radius, color = 'black') {
    super(color);
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  getDiameter() {
    return 2 * this.radius;
  }
}

// ========== Mixin 模式 ==========
const Serializable = {
  serialize() {
    return JSON.stringify(this);
  },

  deserialize(jsonString) {
    const data = JSON.parse(jsonString);
    Object.assign(this, data);
    return this;
  },
};

const Timestamped = {
  addTimestamp() {
    this.timestamp = Date.now();
  },

  getAge() {
    return Date.now() - (this.timestamp || 0);
  },
};

// 应用 Mixin
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name}: $${this.price}`;
  }
}

// 混入功能
Object.assign(Product.prototype, Serializable, Timestamped);

// ========== 工厂模式 ==========
class UserFactory {
  static createUser(type, userData) {
    switch (type) {
      case 'admin':
        return new AdminUser(userData.name, userData.email, userData.permissions);
      case 'regular':
        return new User(userData.name, userData.email);
      case 'guest':
        return User.createGuestUser();
      default:
        throw new Error(`Unknown user type: ${type}`);
    }
  }

  static createUsersFromArray(usersData) {
    return usersData.map((userData) => this.createUser(userData.type, userData));
  }
}

// ========== 使用示例 ==========
function demonstrateClasses() {
  // 创建用户
  const regularUser = new User('John Doe', 'john@example.com');
  const adminUser = new AdminUser('Jane Smith', 'jane@example.com', ['read', 'write']);

  // 使用工厂创建用户
  const guestUser = UserFactory.createUser('guest', {});

  // 创建形状
  const rectangle = new Rectangle(10, 5, 'blue');
  const circle = new Circle(7, 'red');

  // 创建产品并添加时间戳
  const product = new Product('Laptop', 999);
  product.addTimestamp();

  return {
    users: [regularUser, adminUser, guestUser],
    shapes: [rectangle, circle],
    product,
  };
}

// ========== 导出 ==========
export {
  User,
  AdminUser,
  Shape,
  Rectangle,
  Circle,
  Product,
  UserFactory,
  Serializable,
  Timestamped,
  demonstrateClasses,
};
