const {connectDB, mongoose}= require('./db');
const {User}= require('./models/User');
const {Task} = require('./models/Task');

async function main() {
  await connectDB();


// // CREATE
//   const hamizan = await User.create({
//     name:"hamzina",
//     email: "hamzina@example.com",
//     role:"user",
//   })
//   console.log(hamizan);



// // READ
// const user = await User.find().select('name email');
// console.log("All Users", user);








// // UPDATE

// await User.deleteOne({emai:"john@example.com"},{role:"admin"})
// console.log("john is updated");

// await User.updateOne({ email: "john@example.com"}, { role: "admin"});
//     console.log("Updated John's role");


// // DELETE
// await User.deleteOne({email:"john@example.com"}
// );
// console.log("GOOD BYE JOHN");


// // AGGREGATION
// const bystatus = User.addListener({
//     $group:{_id:"status", total:{$sum:1}}
// })
// console.log(bystatus);

const byStatus = await Task.aggregate([
        { $group: { _id: "$status", total: { $sum: 1 } } }
    ]);
    console.log("Tasks by Status: ", byStatus);















//   await User.insertOne({
//     name:"alex",
//     email: "alex@gmail.c0om",
//     role:"user",
//   })
//   await User.insertMany([{
//     name:"fuad",
//     email:"fuad@gmail.com",
//     role: "user",
//   },
// {
//     name:"alex",
//     email:"alex@gmail.com",
//     role:"user",
// }]);
// await User.deleteOne({email: "nati@example.com"});


// await User.insertMany([{
//     name:"john",
//     email:"john@example.com",
//     role:"user",
// },{
//     name:"namd",
//     email:"namd@gmail.com",
//     role:"user",
// }])




// // UPDATE

// await User.deleteOne({emai:"john@example.com"},{role:"admin"})
// console.log("john is updated");
    // console.log("Bye nati")
// await User.deleteOne({email:"nati@example.com"})
// console.log("data populated");
await mongoose.disconnect();
};
main();



