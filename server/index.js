const express=require("express"); 
const mongoose=require("mongoose"); 
const UserModel=require("./models/Users"); 
const app=express(); 
app.use(express.static('build'))

app.use(express.json());
mongoose.connect("mongoDB_URL", 
{useNewUrlParser: true, },()=>console.log("Connected to DB")); 
app.post("/newreg",async(req,res)=>{
    const Firstname=req.body.Firstname;
    const Lastname=req.body.Lastname;
    const Role=req.body.Role;
    const Username=req.body.Username;
    const Password=req.body.Password;
    const user=new UserModel({Firstname:Firstname,Lastname:Lastname,Username:Username,Password:Password,Role:Role});
    try{
    await user.save();
    res.send("Inserted Values");}

catch(err){
    console.log(err);
}});
app.get("/display",async(req,res)=>{
    UserModel.find({},(err,result)=>{
        if(err){
            res.send(err);
        }
        res.json(result);
    });
});

app.listen(3028,()=>console.log("Server Ready."))
