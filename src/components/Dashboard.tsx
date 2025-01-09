import Main1 from "./Main1";
import Sidebar from "./Sidebar";
import RightPanel from "./RightPanel";

export default function Dashboard() {
  return (
    <div className="flex bg-gray-800 min-h-screen">
      <Sidebar />
      <Main1/>
      <RightPanel/>
    </div>
  );
}
