import { FaHome } from "react-icons/fa";
import Image from 'next/image'
import logo from '../../public/logo.png'

export default function Sidebar() {
    return (
      <div className="bg-gray-900 text-white w-1/5 h-screen p-4">
      
      <div className="flex items-center gap-2 text-white my-8">
      <Image
        src={logo} 
        alt="Logo"
        
        className="rounded-lg shadow-lg"
      />
            <span className="font-bold text-base mt-4 -ml-2">MintTrack</span>
          </div>
       
    
       
        <nav className="space-y-4">
          <a href="" className="flex items-center gap-2 text-gray-400 border-2 relative py-4 rounded-lg bg-#C8EE44">
          <FaHome className="w-5 h-5 ml-2" /> 
            <span className="">Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-400">
            <span>Transaction</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-400">
            <span>Budget</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-400">
            <span>Goals</span>
          </a>
        </nav>
        <div className="mt-10">
          <button className="text-sm bg-gray-800 px-4 py-2 rounded">
            Light / Dark
          </button>
        </div>
      </div>
    );
  }
  