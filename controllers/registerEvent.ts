import { dbConnect } from "@/db/connect";
import { User } from "@/db/models/userSchema";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export interface UserType {
    userId: string;
    user: KindeUser;
  }

export const registerEvent=async({ctx,input}:{ctx:UserType,input:any})=>{
    const { userId } = ctx;
    const {eventId}=input
    console.log(eventId,"id")
    await dbConnect()
   const user=await User.findById(userId)
   user.events.push(eventId)
   await user.save()
  return {status:200,msg:"registered"}
}