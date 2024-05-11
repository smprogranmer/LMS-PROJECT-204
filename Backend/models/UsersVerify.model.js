import mongoose from "mongoose";
import { Schema } from "mongoose";
import bcrypt from "bcrypt"
const emailVerify = new Schema({
    userEmail: {type:String,required:true},
    emailOtp:{type:String,required:true},
    createdAt: {type:Date,default: Date.now(),expires:"1m"},
    expireAt:{type:Date}
})

// otp hashing with bcrypt
emailVerify.pre("save",async function(next){
    if(!this.isModified("emailOtp")){
         next()
    }
    this.emailOtp = await bcrypt.hash(this.emailOtp,10)
    next()
})

// otp compare with bcrypt
emailVerify.methods.compareOtp = async function(enteredOtp){
    console.log("🚀 ~ emailVerify.methods.compareOtp=function ~ enteredOtp:", enteredOtp)
    
    const data = await bcrypt.compare(enteredOtp, this.emailOtp);
    console.log("🚀 ~ emailVerify.methods.compareOtp=function ~ data:", data)
    return data
}

// UserSchema.methods.comperPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
//   };
  
export const Verify = mongoose.models.EmailVerify || mongoose.model("EmailVerify", emailVerify)