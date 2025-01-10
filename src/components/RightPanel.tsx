import { CiSearch } from "react-icons/ci";
import { IoNotificationsSharp } from "react-icons/io5";
import pp from '../../public/pp.png'
import Image from "next/image";

export default function RightPanel() {
    return (
      <div className="w-1/4 p-4 text-white bg-sidebarBgColour">
       
        <div className="mb-6">
          <div className="flex items-center gap-2 ml-40">
            <CiSearch/>
            <IoNotificationsSharp/>
            <div className="w-40 h-10 bg-gray-600 rounded-3xl flex flex-row">  <Image src={pp} alt="PP" className="rounded-lg ml-4 my-1 flex items-center h-8 w-8" /> <span className="">Shuaib</span></div>
           
          </div>
        </div>
  
        {/* Bill Payment Tracker */}
        <div className="mb-6">
          <h3 className="text-lg mb-4">Bill Payment Tracker</h3>
          {/* Replace with bill tracker */}
          <p>Bill data here</p>
        </div>
  
        {/* Saving Goals */}
        <div>
          <h3 className="text-lg mb-4">Saving Goals</h3>
          {/* Replace with goals */}
          <p>Goal data here</p>
        </div>
      </div>
    );
  }
  