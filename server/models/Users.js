const mongoose=require("mongoose");
const UserSchema=mongoose.Schema({
    Firstname:
    {
        type:String,
        required:true
    },
    Lastname:
    {
        type:String,
        required:true
    },
    Username:
    {
        type:String,
        required:true
    },
    Password:
    {
        type:String,
        required:true
    }
});
const User=mongoose.model("UserData",UserSchema);
module.exports=User;