import { BosImg } from 'config/PathImage';
import React from 'react';
import { Grid, IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BlogTemplateComponent from './template/blog-template.component';

export default function BlogComponent(props) {
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

  const seeMoreStyle = {
    color: 'white',
    display: 'flex',
    marginTop: '20px',
    marginLeft: 0,
    textAlign: 'left',
    width: 'fit-content',
  };

  return (
    <section className="bg-blue-900 dark:bg-gray-secondary">
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
        {props.more && (
        <IconButton component="span" style={seeMoreStyle} className="d-flex">
          <p style={{ fontSize: '15px' }}>See More</p>
          <ArrowForwardIcon />
        </IconButton>
        )}
      </div>
    </section>
  );
}
