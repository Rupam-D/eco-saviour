import { z } from "zod";
import { publicProcedure, router } from "./trpc";


export const appRouter = router({
  // all routes
  test: publicProcedure.query(() => {
    console.log("trpc route starting successfully");

    return { msg: "test route trpc23" };
  }),

  // //1
  // syncToDb: publicProcedure.query(userSyncToDb),
  // carbonCalculator: publicProcedure
  //   .input(
  //     z.object({
  //       dist: z.number(),
  //       electricity: z.number(),
  //       meals: z.number(),
  //       waste: z.number(),
  //     })
  //   )
  //   .query(() => calculateCarbonEmission),
});
// export type definition of API
export type AppRouter = typeof appRouter;
