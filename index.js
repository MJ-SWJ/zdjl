// index.js

module.exports = {
  say: function () {
    console.log('你好');
  },
  greet: function (name) {
    if (name) {
      console.log(`欢迎使用 zdjl 模块, ${name}!`);
    } else {
      console.log('欢迎使用 zdjl 模块!');
    }
  },
  add: function (a, b) {
    return a + b;
  }
};
