
const mongoose = require("mongoose");

//to connect with databases
main()
.then(()=>{
    console.log("connection successfull");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema =new mongoose.Schema({
    name: String,
    email: String,
    age : Number,
})


const User = mongoose.model("User",userSchema);


// const user2 = new User({
//     name: "aniket",
//     email:"aniket2@gmail.com",
//     age : 15,
// });

// user2.save()
// .then((res) =>{console.log(res)})
// .catch((err)=> console.log(err));



// User.insertMany([
//     {name :"tony", email : "tony@gmail.com" , age:50},
//     {name :"bruce",email:"bruce@gmail.com",age:47},
//     {name :"peter", email: "peter@gmail.com",age:30},
// ]).then((data)=>{
//     console.log(data);
// })


// User.find().then((data)=>{
//     console.log(data);
// });


// User.find({age : {$gte: 47}}).then((data)=>{
// console.log(data[0]);
// }).catch((err)=>{
//     console.log(err);
// })

// User.findOne({age : {$gte: 47}}).then((data)=>{
//     console.log(data);
// });


// User.findById('662e1a91765faa45be297e5b').then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// User.updateOne({name:"aniket"},{age:17}).then((data)=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })


// User.updateMany({age : {$gte :45}}, {age : 40}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })


// User.findOneAndUpdate({name : "ankit"},{age : 21},{new : true})
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.findByIdAndUpdate("662d2b76e2f85513e1591f65",{name: "ankit kumar", age : 20} ,{new : true})
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


// User.deleteOne({name: "ankit kumar"})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });


// User.deleteMany({age : {$gt : 30}})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.findByIdAndDelete("662d2cab1c0c989adcea8753")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


User.findOneAndDelete({name : "peter"})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})









