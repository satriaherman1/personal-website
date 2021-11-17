import React from 'react';
import MeImg from 'config/PathImage';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="py-6 md:px-4">
      <div className="container flex justify-between ">
        <div className="left">
          <div className="logo flex items-center">
            <Avatar src={MeImg} sx={{ width: '24px', height: '24px' }} />
            <h5 className="font-bold h-fit  md:ml-4 ml-2">Satria Herman</h5>
          </div>
        </div>

        <div className="right">
          <ul className="flex">
            <li className="mr-8 font-medium">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="mr-8 font-medium">Project</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
