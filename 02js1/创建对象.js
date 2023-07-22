/**
 * 构造函数,实际上是别的语言里类的角色
 * @param {string} name
 * @param {number} age
 * @param {number} height
 */
function Coder(name, age, height) {
  this.name = name
  this.age = age
  this.height = height
  this.runing = function () {
    console.log('runing')
  }
}
var stu1 = new Coder('why', 18, 1.88)
stu1.runing()
console.log(typeof stu1)
