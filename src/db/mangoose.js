const mongoose= require('mongoose')

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

// const Login = mongoose.model('Login', {name: String, Pwd: String})

// let selva = new Login({name:'selva', pwd:'hcjgfhgjf'})

// selva.save().then((data)=>{
//    console.log(data)
// }).catch((err)=>{
//    console.log(err)
// })