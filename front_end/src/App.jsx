

import './App.css'
import 'tailwindcss/tailwind.css';
import Sidebar from './components/Sidebar';
import DashBoard from './components/DashBoard';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { api } from './utilities';


// export default function App() {
//   const [user, setUser] = useState(null);

//   return <Outlet />;
// }

function App() {
  const [user, setUser] = useState(null);

  // const testConnection = async() => { 
  //   const response = await api.get("/user");
  //   console.log(response.data);
  // }
  // useEffect(() => {
  //   testConnection();
  // },[])

  return (
    <>
    
      <Sidebar user={user} />
      
      <Outlet context={{user, setUser}} />
    </>
    
  );
}

export default App;
