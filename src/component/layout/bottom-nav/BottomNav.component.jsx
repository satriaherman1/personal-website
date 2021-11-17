import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import './bottom-nav.component.css';
import React, { useState } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

export default function BottomNavComponent() {
  const [activeNav, setActiveNav] = useState();
  const navigate = useNavigate();

  const changeBottomNavigation = (e, newValue) => {
    setActiveNav(newValue);
    navigate(`/${newValue}`);
  };
  const boxStyle = {
    boxShadow: '0px 0px 12px rgba(0,0,0,0.2)',
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
      style={boxStyle}
      className="bottom-nav py-2 bg-white drop-shadow-md"
    >
      <BottomNavigation value={activeNav} onChange={(e, newValue) => changeBottomNavigation(e, newValue)}>
        <BottomNavigationAction label="About Me" value="" icon={<PersonIcon />} />
        <BottomNavigationAction label="Blog" value="blog" icon={<MenuBookIcon />} />
        <BottomNavigationAction label="Project" value="project" icon={<WorkIcon />} />
      </BottomNavigation>
    </Box>
  );
}
