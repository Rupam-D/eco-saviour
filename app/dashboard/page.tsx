import Dashboardmain from "@/components/Dashboard-main"
import { trpc_server } from "../_trpc/serverClient"
import LeftSidebar from "@/components/LeftSidebar"



const Dashboard = async () => {
  const userInfo = await trpc_server.syncToDb()
  console.log(userInfo.dbUser)
  

  return (
    <main className='bg-gray-100 flex flex-row p-8 gap-x-10'>


      <LeftSidebar />
      <div className='bg-white  rounded-xl shadow-md'>
       {userInfo.dbUser&& <Dashboardmain name={userInfo.dbUser.name} />}
      </div>
      {/* <CarbonCalculator /> */}
    </main>
  )
}

export default Dashboard


