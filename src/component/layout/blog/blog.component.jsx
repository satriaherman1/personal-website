import { BosImg } from 'config/PathImage';
import React from 'react';
import { IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
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

  const sliderConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className={props.background && 'bg-blue-900 dark:bg-gray-secondary'}>
      <div className="container mb-4 py-10 ">
        <div className="md:px-10">
          <h3 className="text-white">Recently Article</h3>
          <br />
          <Slider {...sliderConfig}>
            {
              BlogData.map((data) => (
                <div>
                  <BlogTemplateComponent
                    title={data.title}
                    author={data.author}
                    authorTitle={data.authorTitle}
                    image={data.image}
                  />
                </div>

              ))
            }
          </Slider>
        </div>
        {props.more && (
        <Link to="/blog">
          <IconButton component="span" style={seeMoreStyle} className="d-flex">
            <p style={{ fontSize: '15px' }}>See More</p>
            <ArrowForwardIcon />
          </IconButton>
        </Link>
        )}
      </div>
    </section>
  );
}
