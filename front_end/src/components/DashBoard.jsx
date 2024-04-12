import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="container mx-auto">
          {/* Dashboard content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Card 1</h2>
              <p>This is the content of card 1.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Card 2</h2>
              <p>This is the content of card 2.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Card 3</h2>
              <p>This is the content of card 3.</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-lg font-semibold mb-2">Card 4</h2>
              <p>This is the content of card 4.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
