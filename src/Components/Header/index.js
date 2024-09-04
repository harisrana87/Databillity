import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './style.css';

const DashboardHeader = ({ userName, onSidebarToggle, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    onSidebarToggle();
  };

  const handleSearchClick = () => {
    setSearchOpen(!searchOpen);
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
     <div className='right-header'>  <div className='h1mobile-only'> DataBillity </div>        {/* Conditionally render the search bar or search icon based on screen size */}
        <div className={`search-container ${searchOpen ? 'search-open' : ''}`}>
          <IconButton
            color="inherit"
            onClick={handleSearchClick}
            className="searchIcon mobile-only"
            sx={{  size: '100px'}} 
          >
            < SearchIcon />
          </IconButton>
          <div className="search desktop-only">
            <InputBase
               placeholder="SDF"
               classes={{
                 root: 'inputRoot',
                 input: 'inputInput',
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </div>

        <Avatar sx={{ width: '25px', height: '25px', fontSize: '20px' }} className="avatar">
          {userName.charAt(0)}
        </Avatar>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton className='logoutIcon' edge="end" color="inherit" onClick={onLogout}>
          <ExitToAppIcon />
        </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;
