export default function RightPanel() {
    return (
      <div className="w-1/4 p-4 bg-gray-900 text-white">
        {/* User Profile */}
        <div className="mb-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-600 rounded-full"></div>
            <span>Shuaib</span>
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
  