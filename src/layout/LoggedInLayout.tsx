import { Outlet } from "react-router"
import { Sidebar } from "../components/SideBar"
import MobileBottomNav from "../components/MobileMenu"

export default function LoggedInLayout() {
  return (
    <div className="bg-[#dfdfdf] flex min-h-screen max-w-[100vw] pb-10 w-full h-full overflow-hidden">
      <Sidebar />
      <MobileBottomNav />
      <div className="relative flex flex-col items-center justify-start w-full h-full">
        <main
          id="content"
          className="mt-8 md:ml-44 md:mb-0 mb-16 ml-2 w-[89%] inset-shadow-1 min-h-max rounded-4xl bg-white shadow-2xl"
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}