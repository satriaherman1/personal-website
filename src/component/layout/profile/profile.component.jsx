import { Avatar } from '@mui/material';
import MeImg from 'config/PathImage';
import React from 'react';

export default function ProfileComponent() {
  return (
    <div className="py-8">
      <Avatar src={MeImg} sizes="100px" className="block mx-auto mb-3" />
      <h4 className="dark:text-white text-center">Satria Herman</h4>
      <p className="dark:text-white text-center small">Frontend Developer</p>
    </div>

  );
}
