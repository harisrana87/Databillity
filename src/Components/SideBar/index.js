import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import PeopleIcon from '@mui/icons-material/People';
import InsightsIcon from '@mui/icons-material/Insights';
import CookieIcon from '@mui/icons-material/Cookie';
import SettingsIcon from '@mui/icons-material/Settings';
import './style.css';

const Sidebar = ({ isOpen, onToggle }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebarTitle">
        <Typography variant="h5" className="titleText">DATABILLITY</Typography>
      </div>
      <List className="sidebarList">
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/connections">
          <ListItemIcon>
            <WifiTetheringIcon />
          </ListItemIcon>
          <ListItemText primary="Connections" />
        </ListItem>
        <ListItem button component={Link} to="/insights">
          <ListItemIcon>
            <InsightsIcon />
          </ListItemIcon>
          <ListItemText primary="Insights" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
