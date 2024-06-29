import mongoose from "mongoose";
const eventSchema = new mongoose.Schema(
  {
    
    eveName: {
      type: String,
      
    },
    eveDesc: {
      type: String,
      trim: true,
    },
    eveImgUrl: {
      type: String,
    },
    eveTags: 
    [
        {
            type:String
        }
    ],
    evePoints: {
      type: Number,
    },
    participats:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]
    // allFiles: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "File",
    //   },
    // ],
    // messages: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Message",
    //   },
    // ],
  },
  { timestamps: true }
);

export const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
