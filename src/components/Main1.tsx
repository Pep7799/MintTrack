export default function MainContent() {
    return (
      <div className="flex-1 p-6 bg-gray-800 text-white">
        {/* Top Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-700 p-4 rounded">Total Balance: ₦1,000,000</div>
          <div className="bg-gray-700 p-4 rounded">Total Spending: ₦500,000</div>
          <div className="bg-gray-700 p-4 rounded">Total Saved: ₦150,000</div>
        </div>
  
        {/* Spending Overview */}
        <div className="bg-gray-700 p-6 rounded mb-6">
          <h3 className="text-lg mb-4">Spending Overview</h3>
          {/* Replace with chart */}
          <div className="h-48 bg-gray-600"></div>
        </div>
  
        {/* Recent Transactions */}
        <div className="bg-gray-700 p-6 rounded">
          <h3 className="text-lg mb-4">Recent Transactions</h3>
          <div>
            {/* Replace with transaction table */}
            <p>Transaction data here</p>
          </div>
        </div>
      </div>
    );
  }
  