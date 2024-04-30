
const mongoose = require("mongoose");

//to connect with databases
main()
.then(()=>{
    console.log("connection successfull");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Amazon');
}

// const bookSchema = new mongoose.Schema({
//     title : String,
//     author : String,
//     price : Number,
// })


const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    author : {
        type : String,
    },
    price : {
        type : Number,
        min : [1 , "please enter a valid price"],
    },
    discount : {
        type : Number,
        default: 0,
    },
    genre : [String],
    category : {
        type:String,
        enum : ["fiction","non-fiction"],
    }
})

const Book = mongoose.model("Book", bookSchema);


// const book1 = new Book({
//     title : "mathematics",
//     author : "Rd sharma",
//     price : 1200,
// })

// book1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


// Book.findByIdAndUpdate("662e71ac115f1ccb9c1f8fbe",{price : -500}, {runValidators : true})
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err.errors.price.properties.message);
// })





