import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
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
      {/* <Divider /> */}
      <List className="sidebarList">
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <WifiTetheringIcon />
          </ListItemIcon>
          <ListItemText primary="Connections" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InsightsIcon />
          </ListItemIcon>
          <ListItemText primary="Insights" />
        </ListItem>
        <ListItem button>
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