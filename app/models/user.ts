import mongoose,{Schema,Document} from "mongoose";

export interface Message extends Document{
    content:string,
    createdAt: Date
}

export interface User extends Document{
    userName:String,
    email:String,
    password:String,
    verifyCode:String,
    verifyCodeExpiry:Date,
    isAcceptingMessage:boolean;
    message:Message[]
}

const MessageSchema:Schema<Message>=new Schema({
    content:{
        type: String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})

const userSchema:Schema<User>=new Schema({
    userName:{
        type:String,
        required:[true,"Username must be filled."],
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/,'Please use the valid email addresss!']
    },
    password:{
        type:String,
        required:[true,'Password is must'],
    },
    
    verifyCode:{
        type:String,
         required:[true,'verifyCode is must'],
    },

    verifyCodeExpiry:{
        type:Date,
         required:[true,'verifyCodeExpiry is must'],
    },

    isAcceptingMessage:{
        type:Boolean,
        default:true
    },
    message:[MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || (mongoose.model('User',userSchema))

export default UserModel