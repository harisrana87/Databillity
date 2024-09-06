import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../Redux/Actions/Dashboard/dashboardActions';
import { Box, Typography, Avatar, Paper, Grid, Divider } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BulletIcon from '@mui/icons-material/FiberManualRecord';
import Feed from '../Feed';
import Sidebar from '../SideBar/index';
import Carousel from 'react-material-ui-carousel';
import DashboardHeader from '../Header/index'

import "./style.css";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { preferenceDetails, personaDetails, customerDetails, status, error } = useSelector((state) => state.dashboard);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchDashboardData());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <Typography>Loading...</Typography>;
  }

  if (status === 'failed') {
    return <Typography>Error: {error}</Typography>;
  }

  // Convert preference details to an array if it's an object and chunk into groups of 3
  const preferencesArray = preferenceDetails
    ? Object.values(preferenceDetails).filter(val => typeof val === 'string')
    : [];
    
  const chunkedPreferences = [];
  for (let i = 0; i < preferencesArray.length; i += 3) {
    chunkedPreferences.push(preferencesArray.slice(i, i + 3));
  }

  return (
    <>
    <DashboardHeader/>
      <Sidebar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
      <Box className="main-container">
        <Box className="dashboard-container">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }} className="dashboard-header">
            <div className='offSite'>
              <BulletIcon sx={{ fontSize: '16px', color: 'grey' }} />Offsite
            </div>
            <Box className="date-time">
              <Typography sx={{ color: 'rgb(1 145 189 / 98%)' }} variant="body2">
                {new Date(customerDetails.checkin_time).toLocaleDateString()}
              </Typography>
              <Typography variant="body2">
                {new Date(customerDetails.checkin_time).toLocaleTimeString()}
              </Typography>
            </Box>
          </Box>
          
          <Box className="profile-section">
            <Avatar
              alt={customerDetails.name || 'Profile Picture'}
              src={customerDetails.picture || `${process.env.PUBLIC_URL}/pic.jpeg`}
              sx={{ width: 110, height: 110 }}
              className="profile-avatar"
            />
            <Typography sx={{ margin: '13px', fontWeight: 'bold', fontSize: '1.15rem' }} variant="h2" className="profile-name">
              {customerDetails.name || 'Kyle Test'}
              <Box
                className="rating-star"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  border: '1px solid grey',
                  padding: '2px 8px',
                  borderRadius: '8px',
                  marginLeft: '10px',
                }}
              >
                <StarIcon sx={{ color: 'grey', fontSize: '16px' }} />
                <Typography sx={{ fontSize: '11px', fontWeight: 'bold', marginLeft: '4px' }}>
                  {customerDetails.rating || '3.25'}
                </Typography>
              </Box>
            </Typography>
            <Typography variant="body2" className="contact-info">
              <EmailIcon sx={{ fontSize: '15px' }} className="contact-icon" /> {customerDetails.email || 'kyle@test.com'}
              <PhoneIcon sx={{ fontSize: '15px' }} className="contact-icon" /> {customerDetails.phone || '777-999-1234'}
            </Typography>
          </Box>
         
          <Box className='persona-section' sx={{ mb: 2 }}>
  <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }}>
    {/* <Grid item xs={12} md={4}> */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', fontSize: '18px', textAlign: 'center', flex: 1 }}
      >
        Persona
      </Typography>
    {/* </Grid> */}
    {/* <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}> */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', fontSize: '18px', marginTop:'60px' ,marginRight:'10px', textAlign: 'center' }}
      >
        LTV
      </Typography>
    {/* </Grid> */}
    {/* <Grid item xs={12} md={4} sx={{ display: 'flex',  justifyContent: 'flex-end' }}> */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', fontSize: '18px',marginRight:'80px', textAlign: 'center' }}
      >
        Power
      </Typography>
    </Grid>
  {/* </Grid> */}
</Box>
           
            {/* Data Rows */}
            {personaDetails && (
              <Grid container spacing={2}>
                <Box className='persona-detail'>
                 <Grid item xs={12} md={4}>
                  <Paper
                    sx={{
                      backgroundColor: 'rgb(178 234 240)',
                      color: 'rgb(1 145 189 / 98%)',
                      padding: '10px',
                      textAlign: 'center',
                      fontSize: '14px',
                      mb: 2,
                    }}
                  >
                    <Typography>{personaDetails?.PrimaryPersona || 'Default Persona'}</Typography>
                  </Paper>
                  <Paper
                    sx={{
                      backgroundColor: '#cbefcb',
                      color: '#49b949',
                      padding: '10px',
                      textAlign: 'center',
                      fontSize: '14px',
                      mb: 2,
                    }}
                  >
                    <Typography>{personaDetails?.SecondaryPersona || 'Default Persona'}</Typography>
                  </Paper>
                </Grid>
                
                <Grid item xs={12} md={4}>
                  <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    {personaDetails?.SecondaryPersona?.LTV || '$0'}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    {personaDetails?.Power || '100'}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    {personaDetails?.SecondaryPersona?.LTV || '$0'}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    {personaDetails?.SecondaryPersona?.Power || '100'}
                  </Typography>
                </Grid>
                </Box>
              </Grid>
            )}
         

          <Divider className='divider' sx={{ borderWidth: '2px', my: 3 }} />
          
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontWeight: 'bold',
                fontSize: '20px',
                ml: 2,
              }}
              variant="h6"
              className="preferences-title"
            >
              Preferences
            </Typography>

            <Carousel
              sx={{
                mx: 2,
              }}
              // animation="slide"
              // indicators={true}
              // navButtonsAlwaysVisible={true}
            >
              {chunkedPreferences.map((chunk, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px',
                  }}
                >
                  {chunk.map((pref, i) => (
                    <Paper
                      key={i}
                      sx={{
                        margin: '5px 0',
                        padding: '10px',
                        backgroundColor: `rgba(178, 234, 240, ${0.5 + i * 0.25})`, // change intensity of blue
                        color: 'rgb(1 145 189 / 98%)',
                        textAlign: 'left',
                      }}
                    >
                      <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <span className="bullet-icon"></span>
                        {" "}{pref}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              ))}
            </Carousel>
          </Box>
        </Box>

        <Box className="feed-section">
          <Feed />
        </Box>
      </Box>
    </>
  );
}
