import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" });

const sendToEc2=async(cloudthingUrl:string)=>{
  console.log("calling 1")
  const response=await fetch("http://43.205.243.165/waste-classifier",{
    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      "url":cloudthingUrl
    })
  })
  console.log("calling 2")
  const awaitedRes=await response.json()
  return awaitedRes
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {

  
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute

    // ##########
    .middleware(async ({ req }) => {
      const hrdr = req.headers
      // const {...}=hrdr;
// console.log(Headers.referer);

     
      // const pathname = heads.get('next-url')
      console.log(hrdr,"server")
      // This code runs on your server before upload
      

      // If you throw, the user will not be able to upload
      if (!headers) throw new UploadThingError("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return {headers };
    })
    // ##########

    .onUploadComplete(async ({ file }) => {
      // This code RUNS ON YOUR SERVER after upload
      
      console.log("Upload complete for userId Test");

      console.log("file url", file.url);

      // 🔰call the model deployed in AWS
     const res=await sendToEc2(file.url)

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: "Rupam" ,res};
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
