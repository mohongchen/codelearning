/**
 * 构造函数
 * @param {string} name
 * @param {number} age
 * @param {number} height
 */
function coder(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
  this.runing = function () {
    console.log('runing')
  }
}
var stu1 = new coder('why', 18, 1.88)
stu1.runing()
console.log(typeof stu1)
