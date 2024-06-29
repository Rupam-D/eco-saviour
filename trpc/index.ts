import { z } from "zod";
import { privateProcedure, publicProcedure, router } from "./trpc";
import { userSyncToDb } from "@/controllers/userSyncToDb";
import { generateSuggetion } from "@/controllers/wasteManageMentSuggestion";
import { getAllEvents } from "@/controllers/getAllEvents";
import { registerEvent } from "@/controllers/registerEvent";



export const appRouter = router({
  // all routes
  test: publicProcedure.query(() => {
    console.log("trpc route starting successfully");

    return { msg: "test route trpc23" };
  }),

  // //1
  syncToDb: publicProcedure.query(userSyncToDb),

  // 2
  suggestWasteManagement: publicProcedure.input(
    z.object({
      wasteType:z.string(),
    })
  ).query(generateSuggetion),

  // 3
  getEvents: publicProcedure.query(getAllEvents),
  //4
  eventRegister:privateProcedure.input(
    z.object({
      eventId:z.string()
    })
  ).mutation(registerEvent)
  
  
});
// export type definition of API
export type AppRouter = typeof appRouter;
