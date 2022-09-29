import { PlayCircleOutline, Star, YouTube } from '@mui/icons-material';
import React from 'react';
import { Box, Flex, Img, Text, Button } from '../Blocks';
import './style.css';
import { classNames } from 'app/config';
import { imgUrls } from 'app/config';

export const Card = ({ title, imgUrl, rate, onClick = () => {} }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: {
          lg: '200px',
        },
      }}
      className={classNames.CARD_WRAPPER}
    >
      <Text
        className="rate"
        style={{
          backgroundColor: rate >= 8 ? 'black' : rate > 5 ? 'black' : 'black',
        }}
        color={rate >= 8 ? 'gold' : rate > 6 ? 'green' : 'red'}
        fontSize={['1rem', '1.3rem']}
      >
        {+rate.toFixed(1)}
      </Text>
      <Img
        style={{ position: 'relative' }}
        src={imgUrl}
        alt={title + 'image'}
      />

      <PlayCircleOutline className={classNames.PLAY_ICON} />
      <Text
        fontWeight="400"
        color="white.0"
        px={'5px'}
        py={['5px']}
        variant="ellipsis"
        width="90%"
        fontSize={['1rem']}
      >
        {title}
      </Text>
    </Box>
  );
};

export const BigCard = ({ detail }) => (
  <Flex
    flexDirection={['column', 'row']}
    alignItems="flex-start"
    flexWrap="wrap"
    mx="auto"
    justifyContent="space-evenly"
    maxWidth={['lg']}
  >
    <Box className="big_card_wrapper" width={['100%', '400px']}>
      <Img
        borderRadius={'10px'}
        style={{ position: 'relative' }}
        src={`${imgUrls.mediumImages}${detail.poster_path}`}
        alt={detail.title || detail.original_title + 'image'}
      />
    </Box>
    <Box
      color="white.0"
      mx={['auto', 0]}
      fontSize={['12px', '1rem']}
      width={['90%', '60%']}
    >
      <Text as="h2">{detail.title || detail.original_title}</Text>
      <Text as="h3" variant="ellipsis">
        {detail.tagline}
      </Text>

      <Box>
        <Text as={'h4'}>Genre</Text>
        <Flex>
          {detail.genres?.map(genre => (
            <Text key={genre.id} mr="10px">
              {genre.name}
            </Text>
          ))}
        </Flex>
      </Box>
      <Flex my="1rem" alignItems="start" justifyContent="start" gap="1rem">
        <Flex flexDirection={'column'} alignItems={'start'}>
          <Box>
            <Text>Rating</Text>
            <Star
              sx={{
                color: '#FAAF00',
              }}
            />
          </Box>
          <Box>
            <Text fontSize={'1.2rem'}>
              {+detail.vote_average.toFixed(1)}/10
            </Text>
            <Text fontSize={'1.2rem'}>
              ({(detail.vote_count / 1000).toFixed(1)}K)
            </Text>
          </Box>
        </Flex>
        <Box>
          <Text>Release Date</Text>
          <Text display={'block'}>
            {new Date(detail.release_date).toDateString()}
          </Text>
        </Box>
      </Flex>

      <Flex my="1rem" alignItems={'start'} justifyContent="start" gap="5rem">
        <Box>
          {' '}
          <Text>
            <Text display="block">Duration</Text>
            {' ' +
              (detail.runtime / 60).toString().split('.')[0] +
              'Hr ' +
              (detail.runtime % 60)}
            {'Min'}
          </Text>
        </Box>
        <Box alignSelf={'start'}>
          <Text>
            <Text display={'block'}>Language</Text>
            {detail.spoken_languages[0].name}
          </Text>
        </Box>
      </Flex>
      <Box width="100%">
        <Text>Overview</Text>
        <Text variant="multiLineEllipsis">{detail.overview}</Text>
      </Box>
      <Box my="1rem">
        <Text as="h4">Trailer</Text>
        <Button
          style={{
            backgroundImage: `linear-gradient(to right top, #b16791, #b76895, #bd6999, #c3699c, #c96aa0, #c3659a, #be5f95, #b85a8f, #a54e7f, #93416f, #813660, #6f2a51)`,
          }}
          color="#fff"
          borderRadius={'10px'}
          px="1rem"
          py="0.5rem"
        >
          Youtube{' '}
          <YouTube
            sx={{
              ml: '10px',
            }}
          />
        </Button>
      </Box>
    </Box>
  </Flex>
);
