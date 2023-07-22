/**
 * 数字转换对应的字母
 * @param {number} number 数字
 * @returen {string} letter 字母
 *
 */

function numberToLetter(number) {
  if (number < 0 || number > 26) {
    return '' // 数字不在0-26的范围内，返回空字符串
  }
  const baseCharCode = 'A'.charCodeAt(0) // 获取字母'A'的Unicode编码
  // 将数字转换为对应的字母
  const letter = String.fromCharCode(baseCharCode + number)
  return letter
}
