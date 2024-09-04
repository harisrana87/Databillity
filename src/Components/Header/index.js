import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Avatar from '@mui/material/Avatar';
import './style.css';

const DashboardHeader = ({ userName, onSidebarToggle, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    onSidebarToggle(); // Call the function to toggle the sidebar
  };

  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleMenuClick}
          className={`menuButton ${menuOpen ? 'shifted' : ''}`}
        >
          <MenuIcon />
        </IconButton>

        {/* Search bar */}
        <div className="search">
          <InputBase
            placeholder="SDF"
            classes={{
              root: 'inputRoot',
              input: 'inputInput',
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
        <Avatar sx={{ width: '25px', height: '25px', fontSize: '20px' }} className="avatar">
          {userName.charAt(0)}
        </Avatar>

        {/* Spacer to push logout button to the right */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Logout button */}
        <IconButton edge="end" color="inherit" onClick={onLogout}>
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;
