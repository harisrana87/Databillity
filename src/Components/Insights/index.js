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
import ArrowRightIcon from '@mui/icons-material/ArrowRight'; // Import ArrowRightIcon here
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'; //
import InsightsIcon from '@mui/icons-material/Insights';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';




const Insights = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [timingOn, setTimingOn] = useState(true);
  const [view, setView] = useState('segments'); // State to toggle between Segments and Individuals view
  const handleTimingToggle = () => {
    setTimingOn(!timingOn);
  };
  const performancePercentage = 75; 
  const sampleData = [
    { date: '2024-09-01', name: 'John Doe', status: 'Active', persona: 'Luxury   Needs Based', rating: 4.5, activity: 'High', transaction: 'Completed' },
    { date: '2024-09-02', name: 'Jane Smith', status: 'Inactive', persona: 'Luxury  Needs Based', rating: 3.8, activity: 'Medium', transaction: 'Pending' },
    { date: '2024-09-03', name: 'Michael Johnson', status: 'Active', persona: 'Luxury  Needs Based', rating: 4.0, activity: 'Low', transaction: 'Failed' }
  ];
  const buttons = [
    { name: 'Google Ads', icon: <Google />, key: 'google', campaign: 'Campaign #0122' },
    { name: 'Facebook', icon: <Facebook />, key: 'facebook', campaign: 'Campaign #0122' },
   
    { name: 'Check-In', icon: <Storefront />, key: 'checkin', campaign: 'Campaign #0122' },
    { name: 'Ticketing #0122', icon: <Attribution />, key: 'campaign', campaign: 'Campaign #0122' },
    { name: 'Online', icon: <LocalGroceryStoreIcon />, key: 'online', campaign: 'Campaign #0122' },
    { name: 'Social', icon: <SocialDistance />, key: 'social', campaign: 'Campaign #0122' },
    { name: 'In-Store', icon: <OnlinePrediction />, key: 'In-Store', campaign: 'Campaign #0122' },
    { name: 'Attribution', icon: <Attribution />, key: 'attribution', campaign: 'Campaign #0122' },
   
   
  ];
  const [isLoading] = useState(false); 

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
       

        <h1 style={{marginLeft:'3%'}}>Insights</h1>
        
        {/* Navigation Buttons to switch between Segments and Individuals */}
        <div style={{marginLeft:'3%', marginBottom: '20px' }}>
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
                <Box position='relative' className="profiles-container" p={2} boxShadow={2}>
                  <Typography position="absolute" paddingTop='3%' paddingBottom='3%' paddingLeft='2.7%' paddingRight= '86%' borderRadius='5px' backgroundColor="#c0ebfb" variant="h5" color="black" textAlign='left'>Profile</Typography>
                  <Avatar
                    alt="Business Profile"
                    src="/pic.jpeg"
                    sx={{  border: '5px solid #fff',
                        height: '100px',
                        margin: '0 auto !important',
                        width: '100px', }} // Center the avatar
                  />
                  <Box>
                  <Rating value={4.5} precision={0.5} readOnly />
                  
                  </Box>
                 
                  <Box display={'flex'} justifyContent={'space-between'} mr={16} ml={16} mb={9} mt={9} textAlign="center">
                    <Typography borderRadius={"5px"} paddingTop={'10px'} paddingBottom={'10px'} paddingLeft={'10px'} paddingRight={'10px'} backgroundColor="#9cf79c" fontWeight={'bold'} variant="body2" color="green">Research Oriented</Typography>
                    <Typography borderRadius={"5px"} backgroundColor="#a8e2fb" fontWeight={"bold"} variant="body2" paddingTop={'10px'} paddingBottom={'10px'} paddingLeft={'10px'} paddingRight={'10px'} color="#0285f7">Needs Based</Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Sales Section */}
              <Grid item xs={6}>
                <Box className="sales-container" p={2} boxShadow={2}>
                  <div className='Sales'>
                    <Typography  variant="h6" color="black" textAlign='left'>Sales</Typography>
                    <Typography fontSize={"1.75rem"} fontWeight="bold" variant="h6" color="black" textAlign='left'>$13,666,239</Typography>
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
                  <div style={{ flexDirection: "column", textAlign:'left', alignItems: "left" }}>
                    <Typography  color={'grey'}  variant="h8">Customer LTV</Typography>
                    <Typography variant="h6" color="black">$0</Typography>
                    <Typography variant="body2" color="textSecondary">You made an extra $0 this month</Typography>
                  </div>
                </Box>
              </Grid>

              {/* Upsell Section */}
              <Grid item xs={4}>
                <Box className="upsell-box" p={2} boxShadow={2} display="flex">
                  <AttachMoneyIcon alignItems='left' fontSize="large" color="action" />
                  <div style={{ flexDirection: "column", textAlign:'left', alignItems: "left"  }}>
                    <Typography color={'grey'}  variant="h8">Upsell</Typography>
                    <Typography variant="h6" color="black">$0</Typography>
                    <Typography variant="body2" color="textSecondary">You made an extra $0 this month</Typography>
                  </div>
                </Box>
              </Grid>

              {/* Cross-Sell Section */}
              <Grid item xs={4}>
                <Box className="cross-sell-box" p={2} boxShadow={2} display="flex">
                  <ShuffleIcon fontSize="large" color="action" />
                  <div style={{ flexDirection: "column" , textAlign:'left', alignItems: "left"  }}>
                    <Typography  color={'grey'}  variant="h8">Cross-Sell</Typography>
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
          <Box className="stat-box" p={2} boxShadow={4} display="flex" alignItems="center">
            <StarsIcon fontSize="large" color="action" />
            <Box sx={{display:'flex' }} ml={2}>
                <div  >
              <Typography sx={{color:'grey' }} variant="h6">Ratings</Typography>
              <Rating value={4.5} precision={0.5} readOnly />
              <Typography   marginTop='8px' variant="body2" color="textSecondary">
                out of ratings stars
              </Typography>
              </div>
            
              
            </Box>
          </Box>
        </Grid>

        {/* CLTV Section */}
        <Grid item xs={4}>
          <Box className="stat-box" p={2} boxShadow={4} position="relative">
       
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
          <Box className="stat-box" p={2} boxShadow={4} position="relative">
            
           
            <Box  display="flex" alignItems="left">
              <InsightsIcon fontSize="large" color="action" />
              <Typography sx={{color:'grey',fontWeight:'500' }}variant="h6">Sales Lift</Typography>
           
            </Box>
            <Typography fontWeight='bold'  marginTop='13px' variant="h6" color="black" textAlign="center">
                  $NaN
                </Typography>
          </Box>
        </Grid>

        {/* Average Order Value Section */}
        <Grid item xs={4}>
          <Box className="stat-box" p={2} boxShadow={4} position="relative">
           
           
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
          <Box className="stat-box" p={2} boxShadow={4} position="relative">
          
        
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
          <Box className="stat-box" p={2} boxShadow={4} display="flex" flexDirection= 'column' >
          
            <Box display="flex" flexDirection= 'row' justifyContent=' space-evenly'>
            <WbSunnyIcon />
                <Typography color='grey' variant="h6">Timing</Typography>

            <Switch color='black' checked={timingOn} onChange={handleTimingToggle} />
            </Box>
            <Typography fontSize='1.8rem'  fontWeight='bold' variant="h6" color="black">
              {timingOn ? "12:00 PM" : "OFF"}
            </Typography>
          </Box>
        </Grid>
      </Grid>
     

      <Grid container spacing={2} mt={2}>
      {/* Product Affinity Section */}
      <Grid item xs={6}>
        <Box className="product-affinity-box" p={2} boxShadow={2}>
          <Typography textAlign={'left'} fontSize='1.3rem' variant="h6">Product Affinity</Typography>
          {/* Divider after Heading */}
          <Box my={2} style={{ borderBottom: '1px solid #e0e0e0' }} />

          {/* Product Affinity Table */}
          <table className="product-affinity-table">
            {/* <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Price Range</th>
                <th>Percentage</th>
               
              </tr>
            </thead> */}
            <tbody>
              {/* Example data row */}
              <tr>
                <td>
                  <img src="/pic.jpeg" alt="Product Photo" style={{ borderRadius:'10px',width: '50px', height: '50px' }} />
                </td>
                <td style={{ fontSize:'15px',color:'#000632fa', fontWeight: 'bold' }}>All Weather Mats</td>
                
                <td>
                  <div  style={{
                    marginLeft:'20px',
                    position: 'relative',
                    height: '10px',
                    width: '100%',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '5px',
                    marginTop: '5px'
                  }}>
                    <div style={{
                      
                      height: '100%',
                      width: `${performancePercentage}%`,
                      backgroundColor: '#01378afa',
                      borderRadius: '5px',
                      transition: 'width 0.3s ease-in-out'
                    }} />
                      <td style={{fontSize:'1rem'}} >$199</td>
                      <td style={{paddingLeft:'70px'}} >$199</td>
                      <td style={{paddingLeft:'70px'}} >$199</td>
                      
                  </div>
                </td>
                <td style={{ color:'#000632fa', fontSize:'1rem', fontWeight:'bold', paddingLeft:'40px'}} >75%</td>
                <Box my={2} style={{justifyContent:'end',marginTop: '34px', borderBottom: '1px solid #e0e0e0' }} />
              </tr>
              {/* Repeat for more rows */}
            </tbody>
            {/* Divider */}
            <Box my={2} style={{ borderBottom: '1px solid #e0e0e0' }} />
            <tbody>
              {/* Example data row */}
              <tr>
                <td>
                  <img src="/pic.jpeg" alt="Product Photo" style={{ borderRadius:'10px',width: '50px', height: '50px' }} />
                </td>
                <td style={{ fontSize:'15px',color:'#000632fa', fontWeight: 'bold' }}>All Weather Mats</td>
                
                <td>
                  <div  style={{
                    marginLeft:'20px',
                    position: 'relative',
                    height: '10px',
                    width: '100%',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '5px',
                    marginTop: '5px'
                  }}>
                    <div style={{
                      
                      height: '100%',
                      width: `${performancePercentage}%`,
                      backgroundColor: '#01378afa',
                      borderRadius: '5px',
                      transition: 'width 0.3s ease-in-out'
                    }} />
                      <td style={{fontSize:'1rem'}} >$199</td>
                      <td style={{paddingLeft:'70px'}} >$199</td>
                      <td style={{paddingLeft:'70px'}} >$199</td>
                      
                  </div>
                </td>
                <td style={{ color:'#000632fa', fontSize:'1rem', fontWeight:'bold', paddingLeft:'40px'}} >75%</td>
                <Box my={2} style={{justifyContent:'end',marginTop: '34px', borderBottom: '1px solid #e0e0e0' }} />
              </tr>
              {/* Repeat for more rows */}
            </tbody>
          </table>
          <Box my={2} style={{ borderBottom: '1px solid #e0e0e0' }} />

          {/* Pagination for Product Affinity */}
          <Box display="flex" justifyContent="Right" alignItems="center" mt={2}>
      <IconButton 
        sx={{ 
          color: 'text.secondary',
          '&:hover': { backgroundColor: 'transparent' }
        }}
      >
        <ArrowLeftIcon />
      </IconButton>
      <IconButton 
        sx={{ 
          fontSize:'1rem',
          width: 40, 
          height: 40, 
          borderRadius: '50%', 
          backgroundColor: 'action.selected',
          color: 'text.primary',
          fontWeight: 'bold',
          mr: 1,
          '&:hover': { backgroundColor: 'action.selected' }
        }}
      >
        1
      </IconButton>
      <IconButton 
        sx={{ 
          fontSize:'1rem',
          color: 'text.secondary',
          mr: 1,
          '&:hover': { backgroundColor: 'transparent' }
        }}
      >
        2
      </IconButton>
      <IconButton 
        sx={{ 
          color: 'text.secondary',
          '&:hover': { backgroundColor: 'transparent' }
        }}
      >
        <ArrowRightIcon />
      </IconButton>
    </Box>
        </Box>
      </Grid>

      {/* Top Sellers Section */}
      <Grid item xs={6}>
        <Box className="top-sellers-box" p={2} boxShadow={2}>
          <Typography textAlign={'left'} fontSize='1.3rem' variant="h6">Top Sellers</Typography>
        {/* Divider */}
          <Box my={2} style={{ borderBottom: '1px solid #e0e0e0' }} />

          {/* Top Sellers Table */}
          <table className="top-sellers-table">
            {/* <thead>
              <tr>
                <th>Photo</th>
                <th>Service Name</th>
                <th>Services</th>
                <th>Percentage</th>
              </tr>
            </thead> */}
            <tbody>
              {/* Example data row */}
              <tr>
                <td>
                  <img src="/pic.jpeg" alt="Service Photo" style={{ borderRadius:'30px',width: '50px', height: '50px' }} />
                </td>
                <td>Oil Change</td>
                <td style={{ fontWeight:'400', fontSize:'0.8rem',paddingLeft:'40px'}}>Services</td>
                <td style={{ fontWeight:'400',fontSize:'0.8rem',paddingLeft:'40px'}}>Services</td>
                <td style={{ fontWeight:'400', fontSize:'0.8rem',paddingLeft:'40px'}}>Services</td>
                <td style={{ color:'#000632fa', fontSize:'1rem', fontWeight:'bold', paddingLeft:'40px'}}>32%</td>
              </tr>
              {/* Repeat for more rows */}
            </tbody>
           
            <Box my={2} style={{ borderBottom: '1px solid #e0e0e0' }} />
            <tbody>
              {/* Example data row */}
              <tr>
                <td>
                  <img src="/pic.jpeg" alt="Service Photo" style={{ borderRadius:'30px',width: '50px', height: '50px' }} />
                </td>
                <td>Oil Change 2</td>
                <td style={{ fontWeight:'400', fontSize:'0.8rem',paddingLeft:'40px'}}>Services</td>
                <td style={{ fontWeight:'400', fontSize:'0.8rem',paddingLeft:'40px'}}>Services</td>
                <td style={{ fontWeight:'400', fontSize:'0.8rem',paddingLeft:'40px'}}>Services</td>
                <td style={{ color:'#000632fa', fontSize:'1rem', fontWeight:'bold', paddingLeft:'40px'}}>32%</td>
              </tr>
              {/* Repeat for more rows */}
            </tbody>
          </table>
          <Box my={2} style={{ borderBottom: '1px solid #e0e0e0' }} />
          {/* Pagination for Top Sellers */}
          <Box display="flex" justifyContent={'Right'}  mt={2}>
      <IconButton 
        sx={{ 
          color: 'text.secondary',
          '&:hover': { backgroundColor: 'transparent' }
        }}
      >
        <ArrowLeftIcon />
      </IconButton>
      <IconButton 
        sx={{ 
          fontSize:'1rem',
          width: 40, 
          height: 40, 
          borderRadius: '50%', 
          backgroundColor: 'action.selected',
          color: 'text.primary',
          fontWeight: 'bold',
          mr: 1,
          '&:hover': { backgroundColor: 'action.selected' }
        }}
      >
        1
      </IconButton>
      <IconButton 
        sx={{ 
          fontSize:'1rem',
          color: 'text.secondary',
          mr: 1,
          '&:hover': { backgroundColor: 'transparent' }
        }}
      >
        2
      </IconButton>
      <IconButton 
        sx={{ 
          color: 'text.secondary',
          '&:hover': { backgroundColor: 'transparent' }
        }}
      >
        <ArrowRightIcon />
      </IconButton>
    </Box>
        </Box>
        
      </Grid>
    </Grid>  </>
        ) : (
       
          <>
            {/* Individuals View */}
            <Grid container spacing={2}>
      <Grid item xs={12}>
        {/* <Box className="individuals-container" p={2} boxShadow={2}> */}
         
          <TableContainer component={Paper}>
          <Typography padding="10px" variant="h6">Customers</Typography>
            <Table>
              <TableHead>
                <TableRow style={{backgroundColor:'rgb(112 112 112 / 26%)'}}>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Persona</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Activity</TableCell>
                  <TableCell>Transaction</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sampleData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.persona}</TableCell>
                    <TableCell>{row.rating}</TableCell>
                    <TableCell>{row.activity}</TableCell>
                    <TableCell>{row.transaction}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        {/* </Box> */}
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
