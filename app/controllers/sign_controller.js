import parse from "co-body"
export default {
  toRegister:function* (){
    this.body = yield this.render('login/register');

  },

  doRegister:function* (){
    var attr = yield parse.json(this);
    console.log("attr:",attr);
    this.body = "success!";
  }
}
