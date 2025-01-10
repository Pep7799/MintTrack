import Image from "next/image";
import logo from "../../public/logo.png";
import Dashboard from "../../public/Dashboard.png";
import budget from "../../public/budget.png";
import goals from "../../public/goals.png";
import transact from "../../public/transact.png";

export default function Sidebar() {
  return (
    <div className="bg-sidebarBgColour text-white w-1/5 h-screen p-4">
      <div className="flex items-center gap-2 text-white my-8">
        <Image src={logo} alt="Logo" className="rounded-lg shadow-lg" />
        <span className="font-bold text-base mt-4 -ml-2">MintTrack</span>
      </div>

      <nav className="space-y-12 pl-4 pb-6  p-4">
        <div className="mb-8">
        <a href="" className="flex items-center gap-2 text-gray-400 rounded-lg bg-buttonColour w-48 py-4">
          {/* <a
            href=""
            className="flex items-center gap-2 text-gray-400 relative py-4 rounded-lg bg-buttonColour w-48"
          > */}
            <Image
              src={Dashboard}
              alt="Dashboard"
              className="rounded-lg shadow-lg ml-4"
            />
            <span className="">Dashboard</span>
          </a>
        </div>
        <div className="mb-">
          <a href="" className="flex items-center gap-2 text-gray-400">
            <Image
              src={transact}
              alt="Transaction"
              className="rounded-lg shadow-lg"
            />
            <span>Transaction</span>
          </a>
        </div>
        <div className="mb-8">
          <a href="#" className="flex items-center gap-2 text-gray-400">
            <Image src={budget} alt="Budget" className="rounded-lg shadow-lg" />
            <span>Budget</span>
          </a>
        </div>
      <div className="mt-8">
        <a href="#" className="flex items-center gap-2 text-gray-400">
          <Image src={goals} alt="Goals" className="rounded-lg shadow-lg" />
          <span>Goals</span>
        </a>
        </div>
      </nav>

      <div className="mt-64 ml-4">
        <button className="text-sm bg-gray-800 px-4 py-2 rounded">
          Light  Dark
        </button>
      </div>
    </div>
  );
}
