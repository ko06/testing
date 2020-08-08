const express = require('express')
const Login = require('./model/Users')
const required = require('./db/mangoose')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.listen(port, ()=> {
  console.log('connected successfully')
})

app.post('/users',(req, res) => {
  let user = new Login(req.body);
  user.save().then( () => {
    console.log('saved')
  }).catch((error)=> {
    console.log(error)
  })
  res.send({ji:'name'})
})