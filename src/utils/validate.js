/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @description: 手机号校验
 * @param {*} str
 * @return {Boolean}
 */
export function validUserMobile(str) {
  return /^1[3-9]\d{9}$/.test(str)
}
