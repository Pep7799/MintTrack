import Image from "next/image";
import saved from "../../public/saved.png";
import balance from "../../public/balance.png";
import spending from "../../public/spending.png";

export default function MainContent() {
  const months = [
    "All months",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const transactions = [
    { name: "Movie ticket", category: "Entertainment", amount: "₦3,000", time: "01:20 AM", date: "01/12/2023" },
    { name: "Vacation", category: "Goal", amount: "₦20,000", time: "09:00 AM", date: "01/15/2023" },
    { name: "Fuel", category: "Transportation", amount: "₦5,000", time: "02:30 PM", date: "01/22/2023" },
    { name: "Movie ticket", category: "Entertainment", amount: "₦3,000", time: "01:20 AM", date: "01/12/2023" },
    { name: "Vacation", category: "Goal", amount: "₦20,000", time: "09:00 AM", date: "01/15/2023" },
    { name: "Fuel", category: "Transportation", amount: "₦5,000", time: "02:30 PM", date: "01/22/2023" },

  ];

  return (
    <div className="flex-1 p-6 bg-sidebarBgColour text-white">
      <div className="text-2xl font-bold ml-5 mb-16 mt-4">Dashboard</div>
      <div className="grid grid-cols-3 gap-8 mb-6">
        <div className="bg-tbalBgColour p-4 rounded-lg flex items-center space-x-4 w-56">
          <Image
            src={balance}
            alt="balance"
            className="rounded-full bg-walletBg ml-4"
          />
          <div className="flex flex-col ml-4">
            <span className="text-xs font-thin text-textR mb-2">Total Balance</span>
            <span className="font-bold text-2xl"> ₦1000000</span>
          </div>
        </div>
        <div className="bg-mainBgColour p-4 rounded-lg flex items-center space-x-4 w-56">
          <Image
            src={spending}
            alt="spending"
            className="rounded-full bg-walletBg ml-4"
          />
          <div className="flex flex-col ml-4">
            <span className="text-xs font-thin text-textR mb-2">Total spending</span>
            <span className="font-bold text-2xl"> ₦500000</span>
          </div>
        </div>
        <div className="bg-mainBgColour p-4 rounded-lg flex items-center space-x-4 w-56">
          <Image
            src={saved}
            alt="saved"
            className="rounded-full bg-walletBg ml-4"
          />
          <div className="flex flex-col ml-4">
            <span className="text-xs font-thin text-textR mb-2">Total saved</span>
            <span className="font-bold text-2xl"> ₦150000</span>
          </div>
        </div>
      </div>

      {/* Spending Overview */}
      <div className="bg-mainBgColour p-6 rounded-lg mb-6">
        <div className="flex items-center space-x-16">
          <span className="text-white font-bold text-base mt-4">Spending Overview</span>

     
        <div className="flex items-center space-x-5 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <span className="text-white text-xs font-thin">Food</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
            <span className="text-white text-xs font-thin">Utilities</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-800 rounded-full"></div>
            <span className="text-white text-xs font-thin">Transportation</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-white text-xs font-thin">Entertainment</span>
          </div>

          {/* Months Dropdown */}
          <div className="w-40 ml-7">
           
            <select
              id="months"
              className="block w-full rounded-md border-gray-600 bg-gray-800 text-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            >
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
        </div>

        {/* Replace with chart */}
        <div className="h-40">
          <div className="mt-4 text-textA ">
            <ul className="">
           <li className="mb-3">N120000</li> 
           <li className="mb-3">N90000</li> 
           <li className="mb-3">N60000</li> 
           <li className="mb-3">N30000</li> 
            <li className="mb-3">N0</li>
            </ul>
          </div>
        </div>
      </div>



      {/* Recent Transactions */}
      <div className="bg-mainBgColour p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Recent Transactions</h3>
        <a href="#" className="text-green-500 text-sm font-semibold">
          See All &gt;
        </a>
      </div>
      <table className="w-full text-left text-sm text-gray-300">
        <thead>
          <tr className="bg-gray-800 text-gray-400">
            <th className="py-2 px-4">NAME</th>
            <th className="py-2 px-4">CATEGORY</th>
            <th className="py-2 px-4">AMOUNT</th>
            <th className="py-2 px-4">TIME</th>
            <th className="py-2 px-4">DATE</th>
          </tr>
        </thead>
        <tbody>
        {/* {transactions.map((transaction, index) => (
           
          ))} */}
        </tbody>
      </table>
    </div>
    </div>
  );
}
