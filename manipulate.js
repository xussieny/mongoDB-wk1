const {connectDB, mongoose}=require('./db');
const {User} = require('./models/User');
const {Task} = require('./models/Task');
async function main(){
await connectDB();


const hamizan= await User.create({
    name:"hamzina", 
    email:"hamzina@example.com",
    role:"user",
});
console.log(hamizan);

    // // CREATE
    // const john = await User.create({ name: "John Wachira", email: "john@plp.com" });
    // console.log("Created: ", john);

await mongoose.disconnect();
}
main();