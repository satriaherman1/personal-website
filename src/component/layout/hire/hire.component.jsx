import { Button, IconButton } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function HireComponent() {
  const linkedinButtonStyle = {
    marginLeft: '10px',
  };
  return (
    <div className="containr">
      <div className="md:px-10 w-full">
        <div className="flex flex-col  md:flex-row px-4 py-6 justify-between">
          <h4 className="dark:text-white">Lets Do project with me</h4>
          <div className="flex mt-4 md:mt-0">
            <Button variant="contained">
              Hire Me
            </Button>
            <IconButton className="flex" style={linkedinButtonStyle}>
              <LinkedInIcon />
              <p className="ml-2 text-14">Linkedin</p>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
