import React from 'react';
import {
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  IconButton,
} from '@mui/material';
import { Favorite, Share } from '@mui/icons-material';
import { Box, Text } from '../Blocks';
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, imgUrl, rate, onClick = () => {} }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        width: '100%',
        boxShadow:
          'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px',
      }}
    >
      <CardHeader title={title} />
      <CardMedia component={'img'} image={imgUrl} />
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

export const BigCard = ({ imgUrl, message }) => (
  <Box
    minWidth={['1200px']}
    mx="auto"
    borderRadius={'10px'}
    display={'flex'}
    alignItems="flex-end"
    justifyContent={'center'}
    height={['50vh', 'calc(100vh - 10rem)']}
    style={{
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll',
      backgroundPosition: 'center',
      backgroundColor: '#464646',
    }}
    background={`url(${imgUrl})`}
  >
    <Text
      as="h2"
      style={{
        textShadow: '#000',
      }}
      verticalAlign={'baseline'}
      color="white.0"
      fontSize={['1rem', '2rem', '4rem']}
      fontWeight={'bold'}
      zIndex="10"
    >
      {message}
    </Text>
  </Box>
);
