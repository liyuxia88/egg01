const { json } = require('body-parser')

module.exports = {
  home(req, res) {
    //暂时把obj当成从数据库MySQL中读取的数据：model层
    let obj = {
      name: '张三',
      age: 18,
      sex: '男',
    }
    res.end(JSON.stringify(obj))
  },
  login(req, res) {
    res.end('login')
  },
}
