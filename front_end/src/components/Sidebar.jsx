import React from 'react';

const Sidebar = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gray-800 flex-shrink-0">
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-center h-16 bg-gray-900 text-white">
            <span className="text-lg font-bold">Sidebar</span>
          </div>

          {/* Sidebar content */}
          <div className="flex flex-col flex-1 overflow-y-auto">
            {/* Sidebar items */}
            <a href="#" className="flex items-center py-2 px-4 text-gray-200 hover:bg-gray-700">
              <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a7 7 0 100 14 7 7 0 000-14zM5.293 6.707a1 1 0 011.414-1.414L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707z" clipRule="evenodd" />
              </svg>
              Dashboard
            </a>
            <a href="#" className="flex items-center py-2 px-4 text-gray-200 hover:bg-gray-700">
              <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Projects
            </a>
            {/* Add more sidebar items as needed */}
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-auto">
        {/* Add your main content here */}
      </div>
    </div>
  );
};

export default Sidebar;

