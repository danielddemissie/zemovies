import React from 'react';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { Favorite, Share } from '@mui/icons-material';
import { Text } from '../Blocks/Typography';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
  title,
  subheader,
  imgUrl,
  description,
  userName,
  onClick = () => {},
}) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        maxWidth: '400px',
        boxShadow:
          'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: red[500],
            }}
            arial-lable="recipet"
          >
            {userName?.charAt(0)}
          </Avatar>
        }
        title={title}
        subheader={subheader}
      />
      <CardMedia component={'img'} image={imgUrl} />
      <CardContent>
        <Text variant="multiLineEllipsis">{description}</Text>
      </CardContent>
      <CardActionArea>
        <IconButton>
          <Favorite />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </CardActionArea>
    </Card>
  );
};
