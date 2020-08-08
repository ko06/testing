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
    console.log('saved successfully')
  }).catch((error)=> {
    console.log(error)
  })
  res.send(req.body)
})


app.get('/users', (req,res) => {
  let user= new Login()
  Login.find({}).then((res) => {
     console.log(res)
     res.send(res)

  }).catch(()=> {
    res.status(500).status()
    console.log('Error on getting user')
  })
})

app.get('/users/:id', async (req, res) => {
  console.log(req.params)
  try {
    let getData =  await Login.findById(req.params.id)
    res.send(getData)
  } catch(e){
     console.log(e)
  }
  // let user = new Login(req.body);
  // Login.findById(req.params.id).then( (user) => {
  //   console.log('saved successfully')
  //   res.send(user)
  // }).catch((error) => {
  //   console.log(error)
  // })
})


app.patch('/users', async (req, res) => {
 try {
   console.log(req.body)
  let data = await Login.findByIdAndUpdate(req.body.id, {name: req.body.name}, {new: true})
  res.send(data)
 } catch(e) {
    console.log(e)
 }
})