import React, { useState } from 'react';
import { Grid, Box, Button, Typography, Avatar, Rating, Skeleton, IconButton, Switch, Container } from '@mui/material';
import './style.css'; // for additional styling
import Sidebar from '../SideBar';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; 
import ShuffleIcon from '@mui/icons-material/Shuffle';
import DashboardHeader from '../Header';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import { Google, Facebook, Storefront, OnlinePrediction, SocialDistance, Attribution } from '@mui/icons-material'; // Import icons
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import StarsIcon from '@mui/icons-material/Stars';
import PersonIcon from '@mui/icons-material/Person';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import TimerIcon from '@mui/icons-material/Timer';
import InsightsIcon from '@mui/icons-material/Insights';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


const Insights = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [timingOn, setTimingOn] = useState(true);
  const [view, setView] = useState('segments'); // State to toggle between Segments and Individuals view
  const handleTimingToggle = () => {
    setTimingOn(!timingOn);
  };

  const buttons = [
    { name: 'Google Ads', icon: <Google />, key: 'google', campaign: 'Campaign #0122' },
    { name: 'Facebook', icon: <Facebook />, key: 'facebook', campaign: 'Campaign #0122' },
   
    { name: 'Check-In', icon: <Storefront />, key: 'checkin', campaign: 'Campaign #0122' },
    { name: 'Ticketing #0122', icon: <Attribution />, key: 'campaign', campaign: 'Campaign #0122' },
    { name: 'Online', icon: <OnlinePrediction />, key: 'online', campaign: 'Campaign #0122' },
    { name: 'Social', icon: <SocialDistance />, key: 'social', campaign: 'Campaign #0122' },
    { name: 'In-Store', icon: <LocalGroceryStoreIcon />, key: 'In-Store', campaign: 'Campaign #0122' },
    { name: 'Attribution', icon: <Attribution />, key: 'attribution', campaign: 'Campaign #0122' },
   
   
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
     <DashboardHeader
          userName="John Doe"
          onSidebarToggle={handleSidebarToggle}
          onLogout={handleLogout}
        />
        <Sidebar className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`} isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
      <div className="body">
       

        <h1 style={{marginLeft:'10%'}}>Insights</h1>
        
        {/* Navigation Buttons to switch between Segments and Individuals */}
        <div style={{marginLeft:'10%', marginBottom: '20px' }}>
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
      
      <Container maxWidth="lg">
      <div className="insights-page">
    
        {view === 'segments' ? (
          <>
            {/* Segments View */}
            <Grid container spacing={2}>
              {/* Profiles Section */}
              <Grid item xs={6}>
                <Box className="profiles-container" p={2} boxShadow={2}>
                  <Typography backgroundColor="#2b9dff"fontWeight="bold" variant="h6" color="black" textAlign='left'>Profile</Typography>
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
                          variant="grey"
                          
                          className="buying-journey-button left-button"
                          key={key}
                          startIcon={icon}
                          sx={{
                            marginBottom: 1,
                            border: '1px solid ', /* Adjust border thickness if needed */

                          
                            
                            
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
                      className="buying-journey-svg"
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      {buttons.slice(4).map(({ name, icon, key }) => (
                        <Button
                          variant="grey"
                          className="buying-journey-button right-button"
                          key={key}
                     
                          sx={{
                            marginBottom: 1,
                            border: '1px solid', 
                           
                            
                          }}
                        >
                          <Box display="flex" flexDirection="column" alignItems="center">
                            {icon}
                            <Typography variant="body2">{name}</Typography>
                          </Box>
                        </Button>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              )}


            </Box>


            {/* Fourth and Fifth lines: Ratings, CLTV, Sales Lift, etc. */}
      <Grid  container spacing={2} mt={2}>
        {/* Ratings Section */}
        <Grid item xs={4}>
          <Box className="stat-box" p={2} boxShadow={2} display="flex" alignItems="center">
            <StarsIcon fontSize="large" color="action" />
            <Box sx={{display:'flex' }} ml={2}>
                <div  >
              <Typography sx={{color:'grey' }} variant="h6">Ratings</Typography>
              <Rating value={4.5} precision={0.5} readOnly />
              </div>
              <Typography variant="body2" color="textSecondary">
                out of ratings stars
              </Typography>
              
            </Box>
          </Box>
        </Grid>

        {/* CLTV Section */}
        <Grid item xs={4}>
          <Box className="stat-box" p={2} boxShadow={2} position="relative">
       
            <Box display="flex" alignItems="left" padding= '0px'>
            <PersonIcon fontSize="large" color="action"/>
            
                <Typography  sx={{color:'grey',fontWeight:'500' ,margin: '10px' }} variant="h6">CLTV</Typography>
               
            
            </Box>
            <Typography fontWeight='bold' variant="h6" color="black" textAlign="center">
                  $NaN
                </Typography>
          </Box>
        </Grid>

        {/* Sales Lift Section */}
        <Grid item xs={4}>
          <Box className="stat-box" p={2} boxShadow={2} position="relative">
            
           
            <Box  display="flex" alignItems="left">
              <InsightsIcon fontSize="large" color="action" />
              <Typography sx={{color:'grey',fontWeight:'500' }}variant="h6">Sales Lift</Typography>
           
            </Box>
            <Typography fontWeight='bold' variant="h6" color="black" textAlign="center">
                  $NaN
                </Typography>
          </Box>
        </Grid>

        {/* Average Order Value Section */}
        <Grid item xs={4}>
          <Box className="stat-box" p={2} boxShadow={2} position="relative">
           
           
            <Box display="flex" alignItems="left">
              <CardGiftcardIcon fontSize="large" color="action" />

                <Typography  sx={{color:'grey',fontWeight:'500' ,margin: '10px' }} variant="h6">Average Order Value</Typography>
                

            </Box>
            <Typography fontWeight='bold' variant="h6" color="black" textAlign="center">
                  $NaN
                </Typography>
          </Box>
        </Grid>

        {/* Customer Acquisition Cost Section */}
        <Grid item xs={4}>
          <Box className="stat-box" p={2} boxShadow={2} position="relative">
          
        
            <Box display="flex" alignItems="left">
              <BusinessCenterIcon fontSize="large" color="action" />
    
                <Typography  sx={{color:'grey',fontWeight:'500' ,margin: '10px' }} variant="h6">Customer Acquisition Cost</Typography>
            
 
            </Box>
            <Typography variant="h6" fontWeight='bold' color="black" textAlign="center">
                  $NaN
                </Typography>
          </Box>
        </Grid>

        {/* Timing Section */}
        <Grid item xs={4}>
          <Box className="stat-box" p={2} boxShadow={2} display="flex" flexDirection= 'column' >
          
            <Box display="flex" flexDirection= 'row' justifyContent=' space-evenly'>
            <WbSunnyIcon />
                <Typography color='grey' variant="h6">Timing</Typography>

            <Switch color='black' checked={timingOn} onChange={handleTimingToggle} />
            </Box>
            <Typography marginTop='30px' fontWeight='bold' variant="h6" color="black">
              {timingOn ? "12:00 PM" : "OFF"}
            </Typography>
          </Box>
        </Grid>
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
      </Container>
      </div>
      
    </>
  );
};

export default Insights;
