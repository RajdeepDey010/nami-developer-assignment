import React from 'react';

const TopNav: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      {/* Logo and Text on the Left */}
      <div className="flex items-center">
        <span className="text-xl font-semibold">ABCHotel</span>
      </div>

      {/* Notification Bell Icon */}
      <div className="flex items-center space-x-4">
        <button className="mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
        </button>

        {/* Profile Icon */}
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopNav;
