import React from 'react';
import {
  Avatar,
  Card, CardActions, CardContent, CardMedia, IconButton,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import MeImg from 'config/PathImage';

export default function BlogTemplateComponent(props) {
  return (

    <Card className="p-3 shadow dark:bg-gray-800 mx-auto" style={{ backgroundImage: 'none', width: '96%' }}>
      <CardMedia component="img" width="100%" src={props.image} />
      <CardContent style={{ paddingBottom: 0 }} className="dark:bg-gray-800 bg-white">
        <div className="pt-1 pb-6 border-b-2">
          <h4>{props.title}</h4>
        </div>
      </CardContent>
      <CardActions className="dark:bg-gray-800 bg-white">
        <div className="flex items-center w-full">
          <Avatar src={MeImg} className="m-2" />
          <div className="flex flex-col ml-1">
            <h6>{props.author}</h6>
            <p className="small">{props.authorTitle}</p>
          </div>
          <div className="ml-auto">
            <IconButton>
              <ShareIcon />
            </IconButton>
          </div>
        </div>
      </CardActions>
    </Card>

  );
}
