import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../Redux/Reducer/dashboardReducer';
import { Box, Typography, Avatar, Paper, Grid, Divider } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BulletIcon from '@mui/icons-material/FiberManualRecord';
import Feed from '../Feed';
import Sidebar from '../SideBar/index';
import Carousel from 'react-material-ui-carousel';

import "./style.css"

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
      <Sidebar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
      <Box className="main-container">
        <Box className="dashboard-container">
          <Box sx={{ flexDirection: 'row-start', display: 'flex',justifyContent: 'space-between' }} className="dashboard-header">
            <div className='offSite'>
          <BulletIcon sx={{ alignContent:'center',paddingRight: '3px', fontSize: '16px', color: 'grey' }} />Offsite
          </div>
            <Box className="date-time" >
              <Typography sx={{ color: 'rgb(1 145 189 / 98%)' }} variant="body2">
                {new Date(customerDetails.checkin_time).toLocaleDateString()}
              </Typography>
              <Typography sx={{border:'none'}}variant="body2">{new Date(customerDetails.checkin_time).toLocaleTimeString()}</Typography>
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
          
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Grid container spacing={0} justifyContent="center" sx={{ margin: '8%', width: '100%' }}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>
                  Persona
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>
                  LTV
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '20px', textAlign: 'center' }}>
                  Power
                </Typography>
              </Grid>
              {/* Data Rows */}
              {personaDetails && (
                <>
                  <Grid item xs={12} md={4}>
                    <Paper
                      sx={{
                        backgroundColor: 'rgb(178 234 240)',
                        color: 'rgb(1 145 189 / 98%)',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        textAlign: 'center',
                        fontSize: '8px',
                        marginTop:'10px',
                        marginLeft: '100px',
                        marginRight: '6px',
                      }}
                    >
                      <Typography>{personaDetails?.PrimaryPersona || 'Default Persona'}</Typography>
                    </Paper>
                    <Paper 
                     sx={{
                      backgroundColor: '#cbefcb',
                      color: '#49b949',
                      paddingTop: '10px',
                      marginTop:'10px',
                      paddingBottom: '10px',
                      textAlign: 'center',
                      fontSize: '8px',
                      marginLeft: '100px',
                        marginRight: '35px',
                    }}>
                    <Typography >{personaDetails?.SecondaryPersona || 'Default Persona'}</Typography>

                    </Paper>
                    
                  </Grid>
                
                  
                  <Grid item xs={12} md={4}>
                    <Typography sx={{ fontWeight: 'bold', marginRight:'15px',paddingTop: '10px', textAlign: 'center' }}>
                      {personaDetails?.SecondaryPersona?.LTV || '$0'}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography sx={{ fontWeight: 'bold', marginRight:'30px', paddingTop: '10px', textAlign: 'center' }}>
                      {personaDetails?.Power || '100'}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography sx={{ fontWeight: 'bold', padding: '10px', textAlign: 'center' }}>
                      {personaDetails?.SecondaryPersona?.LTV }
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography sx={{ fontWeight: 'bold', padding: '10px', textAlign: 'center' }}>
                      {personaDetails?.SecondaryPersona?.Power }
                    </Typography>
                  </Grid>
            
                    
                </>
              )}
            </Grid>
          </Box>

          <Divider sx={{ borderWidth: '2px', marginLeft: '200px', marginRight: '200px' }} />
          <Box sx={{ margin: '30px 0' }}>
    <Typography
        sx={{
            display: 'flex',
            justifyContent: 'left',
            fontWeight: 'bold',
            fontSize: '20px',
            marginLeft: '165px',
        }}
        variant="h6"
        className="preferences-title"
    >
        Preferences
    </Typography>

    <Carousel
        sx={{
            margin: '0px 238px 0px 164px',
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
                    flexDirection:'column',
                    justifyContent: 'space-between', // space out the items
                    padding: '10px',
                }}
            >
                {chunk.map((pref, i) => (
                    <Paper
                        key={i}
                        sx={{
                            flex: '1 1 30%', // allows items to take equal space and stay within the row
                            margin: '5px 10px', // small margin between boxes
                            padding: '10px',
                            backgroundColor: `rgba(178, 234, 240, ${0.5 + i * 0.25})`, // change intensity of blue
                            color: 'rgb(1 145 189 / 98%)',
                            textAlign: 'left',
                        }}
                    >
                        <Typography
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}
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
