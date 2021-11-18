import { List, ListItem } from '@mui/material';
import { SkillfullyImg } from 'config/PathImage';
import React from 'react';

export default function BlogTemplateListComponent() {
  return (

    <List className="flex flex-row">
      <ListItem className="flex" button>
        <div className="flex flex-col dark:text-white">
          <h5>Lorem ipsum, dolor sit amet consectetur </h5>
          <p className="small text-gray mt-2 items-start mr-auto">4 minutes ago</p>
        </div>
        <img src={SkillfullyImg} width="70px" height="70px" alt="" className="rounded-lg ml-4 md:ml-7" />
      </ListItem>

    </List>

  );
}
