import React from 'react';
import {
  Grid, Button, Card, CardMedia, CardContent, CardActions,
} from '@mui/material';
import { BosImg } from 'config/PathImage';

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
        <h3>Recently Project</h3>
        <br />
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card style={{ boxShadow: '0px 0px 12px rgba(0,0,0,0.2)' }} className="shadow-xl">
              <CardMedia component="img" width="100%" src={BosImg} />
              <CardContent style={{ paddingBottom: 0 }} className="shadow bg-white">
                <div className="pt-2 pb-4 border-b-2">
                  <h4>Binmas Online System</h4>
                  <p>Software Development</p>
                </div>
              </CardContent>
              <CardActions style={{ background: '#fff' }} className="shadow-xl bg-white">
                <div className="my-2 flex">
                  <Button variant="contained">Study Case</Button>
                  <Button variant="text" className="ml-4" style={studyCaseButtonStyle}>View Project</Button>
                </div>
              </CardActions>
            </Card>
          </Grid>

        </Grid>

      </div>
    </div>
  );
}
