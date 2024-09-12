import React, { useState } from 'react';
import { Grid, Box, Button, Typography, Avatar, Rating, Skeleton } from '@mui/material';
import './style.css'; // for additional styling
import Sidebar from '../SideBar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; 
import ShuffleIcon from '@mui/icons-material/Shuffle';
import DashboardHeader from '../Header';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import { Google, Facebook, Storefront, OnlinePrediction, SocialDistance, Attribution } from '@mui/icons-material'; // Import icons
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

const Insights = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState('segments'); // State to toggle between Segments and Individuals view

  const buttons = [
    { name: 'Google Ads', icon: <Google />, key: 'google', campaign: 'Campaign #0122' },
    { name: 'Facebook', icon: <Facebook />, key: 'facebook', campaign: 'Campaign #0122' },
   
    { name: 'Check-In', icon: <Storefront />, key: 'checkin', campaign: 'Campaign #0122' },
    { name: 'Ticketing #0122', icon: <Attribution />, key: 'campaign', campaign: 'Campaign #0122' },
    { name: 'Online', icon: <OnlinePrediction />, key: 'online', campaign: 'Campaign #0122' },
    { name: 'Social', icon: <SocialDistance />, key: 'social', campaign: 'Campaign #0122' },
    { name: 'Attribution', icon: <Attribution />, key: 'attribution', campaign: 'Campaign #0122' },
    { name: 'In-Store', icon: <LocalGroceryStoreIcon />, key: 'In-Store', campaign: 'Campaign #0122' },
   
  ];
  const [isLoading, setIsLoading] = useState(false); 

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <>
      <div className="body">
        <DashboardHeader
          userName="John Doe"
          onSidebarToggle={handleSidebarToggle}
          onLogout={handleLogout}
        />
        <Sidebar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />

        <h1>Insights</h1>
        
        {/* Navigation Buttons to switch between Segments and Individuals */}
        <div style={{ marginBottom: '20px' }}>
          <Button
            variant={view === 'segments' ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => setView('segments')}
          >
            Segments
          </Button>
          <Button
            variant={view === 'individuals' ? 'contained' : 'outlined'}
            color="secondary"
            onClick={() => setView('individuals')}
            style={{ marginLeft: '10px' }}
          >
            Individuals
          </Button>
        </div>
      </div>

      <div className="insights-page">
        {view === 'segments' ? (
          <>
            {/* Segments View */}
            <Grid container spacing={2}>
              {/* Profiles Section */}
              <Grid item xs={6}>
                <Box className="profiles-container" p={2} boxShadow={2}>
                  <Typography fontWeight="bold" variant="h6" color="black" textAlign='left'>Profile</Typography>
                  <Avatar
                    alt="Business Profile"
                    src="/pic.jpeg"
                    sx={{ width: 100, height: 100, margin: '0 auto' }} // Center the avatar
                  />
                  <Rating value={4.5} precision={0.5} readOnly />
                  <Typography variant="h6">Business Name</Typography>
                  <Box mt={2} textAlign="center">
                    <Typography backgroundColor="#9cf79c" fontWeight={'bold'} variant="body2" color="green">Research Oriented</Typography>
                    <Typography backgroundColor="#a8e2fb" fontWeight={"bold"} variant="body2" color="#0285f7">Needs Based</Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Sales Section */}
              <Grid item xs={6}>
                <Box className="sales-container" p={2} boxShadow={2}>
                  <div>
                    <Typography fontWeight="bold" variant="h6" color="black" textAlign='left'>Sales</Typography>
                    <Typography fontWeight="bold" variant="h6" color="black" textAlign='left'>$13,666,239</Typography>
                  </div>
                  <Box mt={2}>
                    {/* Placeholder for sales graph */}
                    <img
                      src="/graph.png" // Replace with actual graph later
                      alt="Sales Graph"
                      style={{ width: '100%', height: '188px', objectFit: 'fill' }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Second line: Customer LTV, Upsell, Cross-Sell */}
            <Grid container spacing={2} mt={2}>
              {/* Customer LTV Section */}
              <Grid item xs={4}>
                <Box className="ltv-box" p={2} boxShadow={2} display="flex">
                  <LocalSeeIcon fontSize='large' color='action'/>
                  <div style={{ flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="h6">Customer LTV</Typography>
                    <Typography variant="h6" color="black">$0</Typography>
                    <Typography variant="body2" color="textSecondary">You made an extra $0 this month</Typography>
                  </div>
                </Box>
              </Grid>

              {/* Upsell Section */}
              <Grid item xs={4}>
                <Box className="upsell-box" p={2} boxShadow={2} display="flex">
                  <AttachMoneyIcon alignItems='left' fontSize="large" color="action" />
                  <div style={{ flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="h6">Upsell</Typography>
                    <Typography variant="h6" color="black">$0</Typography>
                    <Typography variant="body2" color="textSecondary">You made an extra $0 this month</Typography>
                  </div>
                </Box>
              </Grid>

              {/* Cross-Sell Section */}
              <Grid item xs={4}>
                <Box className="cross-sell-box" p={2} boxShadow={2} display="flex">
                  <ShuffleIcon fontSize="large" color="action" />
                  <div style={{ flexDirection: "column" }}>
                    <Typography variant="h6">Cross-Sell</Typography>
                    <Typography variant="h6" color="black">$0</Typography>
                    <Typography variant="body2" color="textSecondary">You made an extra $0 this month</Typography>
                  </div>
                </Box>
              </Grid>
            </Grid>

            {/* Third line: Buying Journey with 8 buttons and SVG */}
            <Box mt={2} p={2} className="buying-journey-container" boxShadow={2} position="relative">
              <Typography variant="h6">Buying Journey</Typography>
              
              {isLoading ? (
                <Skeleton variant="rectangular" width="100%" height={118} />
              ) : (
                <Grid container spacing={1} mt={1} justifyContent="center" alignItems="center">
                  <Grid item xs={3}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      {buttons.slice(0, 4).map(({ name, icon, key }) => (
                        <Button
                          variant="outlined"
                          className="buying-journey-button"
                          key={key}
                          startIcon={icon}
                          sx={{
                            marginBottom: 1,
                            '&:hover': {
                              backgroundColor: 'blue',
                              color: 'white',
                            },
                          }}
                        >
                          {name}
                        </Button>
                      ))}
                    </Box>
                  </Grid>

                  {/* SVG Image in the Center */}
                  <Grid item xs={6} container justifyContent="center" alignItems="center">
  <img
    src="https://app.stg.databillity.com/static/media/buying-journey-mobile.4bd75376defc0ccae68b735fc61cae31.svg"
    alt="Buying Journey"
    style={{ 
      width: '100%', 
      maxWidth: '300px', 
      transform: 'rotate(-90deg)', // Rotate the image 90 degrees counterclockwise
      transformOrigin: 'center center' // Rotate around the center
    }}
  />
</Grid>

                  <Grid item xs={3}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      {buttons.slice(4).map(({ name, icon, key }) => (
                        <Button
                          variant="outlined"
                          className="buying-journey-button"
                          key={key}
                          startIcon={icon}
                          sx={{
                            marginBottom: 1,
                            '&:hover': {
                              backgroundColor: 'blue',
                              color: 'white',
                            },
                          }}
                        >
                          {name}
                        </Button>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              )}

              {/* Dotted lines */}
              <Box className="dotted-lines">
                {/* Add CSS for dotted lines if needed */}
              </Box>
            </Box>

            {/* Fourth and Fifth lines: Ratings, CLTV, Sales Lift, etc. */}
            <Grid container spacing={2} mt={2}>
              {['Ratings', 'CLTV', 'Sales Lift', 'Average Order Value', 'Customer Acquisition Cost', 'Timing'].map((name, index) => (
                <Grid item xs={4} key={index}>
                  <Box className="stat-box" p={2} boxShadow={2}>
                    <Typography variant="h6">{name}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Sixth line: Product Affinity and Top Sellers */}
            <Grid container spacing={2} mt={2}>
              <Grid item xs={6}>
                <Box className="product-affinity-box" p={2} boxShadow={2}>
                  <Typography variant="h6">Product Affinity</Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box className="top-sellers-box" p={2} boxShadow={2}>
                  <Typography variant="h6">Top Sellers</Typography>
                </Box>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            {/* Individuals View */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box className="individuals-container" p={2} boxShadow={2}>
                  <Typography variant="h6">Individuals</Typography>
                  {/* Sample Individuals Data */}
                  <Grid container spacing={2}>
                    {['John Doe', 'Jane Smith', 'Michael Johnson'].map((name, index) => (
                      <Grid item xs={4} key={index}>
                        <Box p={2} boxShadow={2}>
                          <Typography variant="body1">{name}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </>
  );
};

export default Insights;
