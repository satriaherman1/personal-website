import React from 'react';
import {
  Grid, Button, useMediaQuery, Link,
} from '@mui/material';
import MeImg from 'config/PathImage';
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Hero() {
  const breakpoint = useMediaQuery('(min-width : 768px)');

  return (
    <div className="container">
      <br />
      <br />
      <Grid container spacing={3} className="md:px-10" direction={breakpoint ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={7} className="flex items-center">
          <div className="self-center">
            {
              breakpoint ? (<h3 className="text-blue-800 sm:text-14">Hello i am Satria Herman.</h3>) : <h5 className="text-blue-800">Hello i am Satria Herman.</h5>
            }
            <h2 className="dark:text-white">Frontend Developer who <br className="hidden md:block" /> experienced in React </h2>
            <br />
            <p className="break-words dark:text-white" style={{ maxWidth: '600px' }}>I am a Indonesian Developer and i have been working as Frontend Developer for 1 years. I have worked for startup company such as Clodeo and Brainmatics. I graduated from Vocational High School 3 Jepara at 2021. I am Skilled at Reactjs, Tailwind, Laravel and Bootstrap</p>
            <br />
            <div className="flex flex-wrap">
              <Button variant="contained">
                <DownloadIcon className="mr-1" /> Download CV
              </Button>
              <Button variant="text" className="ml-3">
                <Link href="muhammadsatriaherman@gmail.com">
                  <MailOutlineIcon />
                </Link>
              </Button>
              <Button variant="text" className="ml-3 mt-4 md:mt-0">
                <Link href="muhammadsatriaherman@gmail.com">
                  <WhatsAppIcon />
                </Link>
              </Button>
            </div>

          </div>
        </Grid>
        <Grid item xs={12} md={5}>
          <img width="80%" className="rounded-lg block mx-auto" src={MeImg} alt="fotoku" />
        </Grid>
      </Grid>
    </div>
  );
}
