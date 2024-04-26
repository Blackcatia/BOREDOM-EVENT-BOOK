const __ = {
  poolDic: Symbol('poolDic')
}
export default class Pool {
  constructor() {
    this[__.poolDic] = {}
  }
    getPoolBySign(name) {
    return this[__.poolDic][name] || ( this[__.poolDic][name] = [] )
  }
