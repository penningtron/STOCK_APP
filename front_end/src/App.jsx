

import './App.css'
import 'tailwindcss/tailwind.css';
import Sidebar from './components/Sidebar';
import DashBoard from './components/DashBoard';


function App() {
  

  return (
    <>
       <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 overflow-hidden">
        <Dashboard />
      </div>
    </div>
      

    </>
  )
}

export default App
