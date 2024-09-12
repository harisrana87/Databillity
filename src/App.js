import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import DashboardHeader from './Components/Header';
import Sidebar from './Components/SideBar';
import "../src/App.css";
import Insights from './Components/Insights'; // Assuming InsightsPage is a separate component
import CustomerTable from './Components/customerTable';

function DashboardPage() {
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

function App() {
  const userId = useSelector((state) => state.auth.user);

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={userId ? <Navigate to="/dashboard" /> : <Login />} 
        />
        <Route 
          path="/dashboard" 
          element={userId ? <DashboardPage /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/insights"
          element={userId ? <Insights /> : <Navigate to="/login" />}
        />
        <Route 
          path="*" 
          element={<Navigate to="/login" />} 
        />

         <Route path="/individuals" element={<CustomerTable />} />
      </Routes>
    </Router>
  );
}

export default App;
