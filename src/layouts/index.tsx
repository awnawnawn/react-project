import Sidebar from "./sidebar";
import Main from "./main";

export default function () {
  return (
    <div className="flex p-4 h-screen">
      <Sidebar />
      <Main />
    </div>
  )
}