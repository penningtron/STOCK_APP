

import './App.css'
import 'tailwindcss/tailwind.css';
import Sidebar from './components/Sidebar';
import DashBoard from './components/DashBoard';
import { Outlet } from 'react-router-dom';


export default function App() {
  return <Outlet />;
}
