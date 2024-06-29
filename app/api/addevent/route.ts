import { dbConnect } from "@/db/connect";
import { Event } from "@/db/models/eventSchema";
import { NextRequest, NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function POST(req:NextRequest) {
   const obj=await req.json()
   const {eveName,eveDesc,eveImgUrl,eveTags,evePoints}=obj;  
   await dbConnect()
   const eve=await Event.create({
        eveName,eveDesc,eveImgUrl,eveTags,evePoints
    })
    return NextResponse.json({status:"Event Created", eve})

}