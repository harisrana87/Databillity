import React, { useEffect } from 'react';
import './style.css';
import { Box, Typography, Avatar, Paper, Grid, Divider, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedData } from '../Redux/Actions/Feed/feedActions';
import { fetchDashboardData } from '../Redux/Actions/Dashboard/dashboardActions'; // Import dashboard action
import Carousel from 'react-material-ui-carousel';


export default function Feed() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.feed);


  useEffect(() => {
    dispatch(fetchFeedData());
  }, [dispatch]);

  if (!data) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography>Error: {error}</Typography>;
  }


  const handleNameClick = (id) => {

    dispatch(fetchDashboardData(id));
    console.log('ID:', id);
    


  };


  const groupedData = [];
  for (let i = 0; i < data.length; i += 3) {
    groupedData.push(data.slice(i, i + 3));
  }

  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold' }} variant="h5" className="feed-heading">
        Feed
      </Typography>
      <Typography sx={{ color: 'grey' }} variant="body2">
        {data.length > 0 && `${new Date(data[0].time).toLocaleDateString()} ${new Date(data[0].time).toLocaleTimeString()}`}
      </Typography>

      <Carousel
        sx={{
          margin: '20px 0',
        }}
        navButtonsAlwaysVisible={true}
        indicators={false}
      >
        {groupedData.map((group, groupIndex) => (
          <Paper
            key={groupIndex}
            sx={{
              padding: '20px',

            }}
          >
            <Grid container direction="column" spacing={2}>
              {group.map((item, index) => (
                <React.Fragment key={item.id}>
                  <Grid item>
                    <Box className="feed-container">
                      <Typography sx={{ color: 'grey' }} variant="body2">
                        {new Date(item.time).toLocaleDateString()}
                      </Typography>
                      <Avatar
                        sx={{ width: '100px', height: '100px', margin: '10px auto' }}
                        alt="Feed Image"
                        src={item.background || `${process.env.PUBLIC_URL}/pic.jpeg`}
                        className="feed-image"
                      />

                      <Button variant="text" onClick={() => handleNameClick(item.id)}>
                        <Typography sx={{ color:'black', fontWeight:'bold'}} variant="h6">{item.name || 'No Name'}</Typography>
                      </Button>
                      <Box className="feed-box">
                        <Typography variant="body2" className="feed-rating">
                          <StarIcon className="rating-star" /> {item.rating || '3.25'}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  {index < group.length - 1 && (
                    <Divider sx={{ backgroundColor: '#e2e2e2', margin: '10px 0' }} />
                  )}
                </React.Fragment>
              ))}
            </Grid>
          </Paper>
        ))}
      </Carousel>
    </Box>
  );
}
