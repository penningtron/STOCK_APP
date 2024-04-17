

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
  // useEffect(() => {
  // const validUser = async() => {
  //   let token = localStorage.getItem('token');
  //   if (token){
  //     api.defaults.headers.common["Authorization"] = `Token ${token}`;
  //     let response = await api.get('users/');
  //     setUser(response.data);
  //     setUserID(response.data.id)
  //   }
  // }
  // },[]);


  // const testConnection = async() => { 
  //   const response = await api.get("/user");
  //   console.log(response.data);
  // }
  // useEffect(() => {
  //   testConnection();
  // },[])

  return (
    <>
    <Sidebar user={user} setUser={setUser} />
    
      
      
      <Outlet context={{user, setUser}} />
    </>
    
  );
}

export default App;
