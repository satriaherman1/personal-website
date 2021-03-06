import React from 'react';
import BlogComponent from './blog/blog.component';
import Hero from './Hero';
import HireComponent from './hire/hire.component';
import ProjectComponent from './project/project.component';

export default function MainLayout() {
  const mainLayoutStyle = {
    paddingBottom: '72px',
  };

  return (
    <div style={mainLayoutStyle}>

      <Hero />
      <ProjectComponent />
      <br />
      <br />
      <br />
      <br />
      <BlogComponent more background />
      <HireComponent />
    </div>

  );
}
