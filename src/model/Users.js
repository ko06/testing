const mongoose= require('mongoose')


const Login = mongoose.model('Login', {name: String, Pwd: String})

let selva = new Login({name:'selva', pwd:'hcjgfhgjf'})

module.exports = Login;