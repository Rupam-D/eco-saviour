import { dbConnect } from "@/db/connect";
import { Event } from "@/db/models/eventSchema";

export const getAllEvents=async()=>{
    await dbConnect()
    const allEve=await Event.find()
    return allEve;

}