import React, { useState } from 'react';
import './App.css';
import DashboardHeader from './Components/Header';
import Sidebar from './Components/SideBar';
import Dashboard from './Components/Dashboard';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    // Add your logout functionality here
    console.log('Logout clicked');
  };

  return (
    <div className="App">
      <DashboardHeader
        userName="John Doe"
        onSidebarToggle={handleSidebarToggle}
        onLogout={handleLogout}
      />
      <div className="main-container">
        <Sidebar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
        <div className="dashboard-wrapper">
          <h1>Dashboard</h1>
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;