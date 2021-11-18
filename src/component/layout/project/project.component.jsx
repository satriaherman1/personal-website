import React from 'react';
import {
  Grid, Button, Card, CardMedia, CardContent, CardActions, IconButton,
} from '@mui/material';
import { BosImg } from 'config/PathImage';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ProjectComponent() {
  const studyCaseButtonStyle = {
    display: 'block',
    marginLeft: '1rem',
  };
  return (
    <div className="container mt-9">
      <br />
      <br />
      <div className="md:px-10">
        <h3 className="dark:text-white">Recently Project</h3>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card style={{ boxShadow: '0px 0px 12px rgba(0,0,0,0.2)', backgroundImage: 'none' }} className="shadow-xl p-4">
              <CardMedia component="img" width="100%" src={BosImg} />
              <CardContent style={{ paddingBottom: 0 }} className="dark:bg-gray-800 bg-white">
                <div className="pt-2 pb-4 border-b-2">
                  <h4>Binmas Online System</h4>
                  <p>Software Development</p>
                </div>
              </CardContent>
              <CardActions className="dark:bg-gray-800 bg-white">
                <div className="my-2 flex">
                  <Button variant="contained">Study Case</Button>
                  <Button variant="text" className="ml-4" style={studyCaseButtonStyle}>View Project</Button>
                </div>
              </CardActions>
            </Card>
          </Grid>

        </Grid>
        <br />
        <IconButton component="span" color="primary" className="d-flex">
          <p style={{ fontSize: '15px' }}>See More</p>
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>
  );
}
