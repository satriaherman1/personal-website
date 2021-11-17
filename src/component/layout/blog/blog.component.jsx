import { BosImg } from 'config/PathImage';
import React from 'react';
import { Grid } from '@mui/material';
import BlogTemplateComponent from './template/blog-template.component';

export default function BlogComponent() {
  const BlogData = [
    {
      title: 'Manipulasi DOM pada Reactjs (State dan Ref)',
      author: 'Satria Herman',
      authorTitle: 'Frontend Developer',
      image: BosImg,
    },
    {
      title: 'Manipulasi DOM pada Reactjs (State dan Ref)',
      author: 'Satria Herman',
      authorTitle: 'Frontend Developer',
      image: BosImg,
    },
    {
      title: 'Manipulasi DOM pada Reactjs (State dan Ref)',
      author: 'Satria Herman',
      authorTitle: 'Frontend Developer',
      image: BosImg,
    },
  ];

  return (
    <section className="bg-blue-800">
      <div className="container mb-4 py-10 ">
        <div className="md:px-10">
          <h3 className="text-white">Recently Article</h3>
          <br />
          <Grid container spacing={4}>
            {
            BlogData.map((data) => (
              <Grid item xs={12} md={4}>
                <BlogTemplateComponent
                  title={data.title}
                  author={data.author}
                  authorTitle={data.authorTitle}
                  image={data.image}
                />
              </Grid>
            ))
          }
          </Grid>
        </div>
      </div>
    </section>
  );
}
