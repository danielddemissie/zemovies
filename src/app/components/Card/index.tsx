import {
  Close as CloseIcon,
  PlayCircleOutline,
  Star,
  YouTube,
} from '@mui/icons-material';
import React from 'react';
import { Box, Flex, Img, Text, Button } from '../Blocks';
import './style.css';
import { classNames } from 'app/config';
import { imgUrls } from 'app/config';
import { Dialog, DialogTitle, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { CastCarousel } from '../Carousels';
import { ReactComponent as IMDBIcon } from '../../../assets/icons/imdb.svg';
import { imdbUrl } from 'app/config/env';

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

export const BigCard = ({ detail, videos, open, setOpenModal, credit }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs')); //TODO full screen on small screen
  const [videoKey, setVideoKey] = React.useState('');

  return (
    <Flex
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection={['row']}
      gap={['30px']}
    >
      <Grid
        width={['100%', '300px', '350px', '350px']}
        display={{
          lg: 'flex',
          sm: 'flex',
          xs: 'none',
        }}
        item
        flexDirection={'column'}
      >
        <Img
          style={{
            position: 'relative',
            borderRadius: '10px',
            maxHeight: '500px',
          }}
          src={`${imgUrls.mediumImages}${detail.poster_path}`}
          alt={detail.title || detail.original_title + 'image'}
        />
        <CastCarousel casts={credit?.cast} />
      </Grid>
      <Box
        color="white.0"
        mx={['auto', 0]}
        width={['100%', '90%']}
        fontSize={['12px', '1rem']}
      >
        <Text as="h2">{detail.title || detail.original_title}</Text>
        <Text as="h3" color={'white.2'} variant="multiLineEllipsis">
          {detail.tagline}
        </Text>
        <Box>
          <Text>Genre</Text>
          <Flex mt="5px">
            {detail.genres.length > 0 ? (
              detail.genres?.map(genre => (
                <Text key={genre.id} mr="10px" color={'white.2'}>
                  {genre.name}
                </Text>
              ))
            ) : (
              <Text>NO GENRE AVAILABLE!</Text>
            )}
          </Flex>
        </Box>
        <Flex
          my="1rem"
          alignItems="start"
          justifyContent="start"
          gap={['1rem', '5rem']}
        >
          <Flex flexDirection={'column'} alignItems={'start'}>
            <Box>
              <Text>Rating</Text>
              <Box display={'inline-block'} width={['20px', '20', '30px']}>
                <Star
                  sx={{
                    width: '100%',
                    color: '#FAAF00',
                  }}
                />
              </Box>
            </Box>
            <Box mt="5px">
              <Text color={'white.2'}>
                {+detail.vote_average.toFixed(1)}/10
              </Text>
              <Text color={'white.2'}>
                ({(detail.vote_count / 1000).toFixed(1)}K)
              </Text>
            </Box>
          </Flex>
          <Box>
            <Text>Release Date</Text>
            <Text display={'block'} mt="5px" color={'white.2'}>
              {new Date(
                detail.release_date || detail.first_air_date,
              ).toDateString()}
            </Text>
          </Box>
        </Flex>
        <Flex
          my="1rem"
          alignItems={'start'}
          justifyContent="start"
          gap={['1rem', '5rem']}
        >
          <Box>
            {' '}
            <Text display="block">Duration</Text>
            {detail.runtime ? (
              <Text color={'white.2'}>
                {' ' +
                  (detail.runtime / 60).toString().split('.')[0] +
                  'Hr ' +
                  (detail.runtime % 60)}
                {'Min'}
              </Text>
            ) : (
              <Text>NOT KNOWN!</Text>
            )}
          </Box>
          <Box alignSelf={'start'}>
            <Text display={'block'}>Language</Text>
            {detail?.spoken_languages?.map(_lang => (
              <Text color={'white.2'} mr="10px">
                {_lang.name}
              </Text>
            ))}
          </Box>
        </Flex>{' '}
        <Box>
          <Text>Overview</Text>
          <Text variant="multiLineEllipsis" color={'white.2'}>
            {detail.overview}
          </Text>
        </Box>
        <Text as="h4">Videos</Text>
        <Grid
          container
          mt={'1rem'}
          rowGap="1rem"
          columnGap={'1rem'}
          columns={{ lg: 12, md: 6, sm: 6, xs: 12 }}
        >
          {videos?.length > 0 ? (
            videos?.slice(0, 6).map(_video => (
              <Grid item>
                <Button
                  style={{
                    backgroundImage: `linear-gradient(to right top, #b16791, #b76895, #bd6999, #c3699c, #c96aa0, #c3659a, #be5f95, #b85a8f, #a54e7f, #93416f, #813660, #6f2a51)`,
                  }}
                  color="#fff"
                  borderRadius={'10px'}
                  px="0.5rem"
                  py="0.5rem"
                  onClick={() => {
                    setOpenModal(true);
                    setVideoKey(_video?.key);
                  }}
                >
                  <Text variant="ellipsis">{_video?.type}</Text>
                  <YouTube
                    sx={{
                      ml: '10px',
                    }}
                  />
                </Button>
              </Grid>
            ))
          ) : (
            <Text>NO VIDEOS AVAILABLE!</Text>
          )}
        </Grid>
        <Box>
          <Text as="h4" my="1rem">
            IMDB
          </Text>
          <a href={imdbUrl + detail.imdb_id} target="_blank" rel="noreferrer">
            <IMDBIcon
              style={{
                width: '50px',
                height: '50px',
              }}
            />
          </a>
        </Box>
        <Dialog
          onClose={() => setOpenModal(false)}
          open={open}
          fullWidth={true}
          fullScreen={fullScreen}
          sx={{
            '& .MuiDialog-paper': {
              background:
                'linear-gradient(to right top, #051937, #001b35, #001d32, #001e2e, #011f2a)',
              borderRadius: '10px',
            },
          }}
        >
          <DialogTitle
            sx={{
              margin: '5px 0',
            }}
          >
            <CloseIcon
              onClick={() => {
                setOpenModal(false);
              }}
              sx={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                zIndex: '20',
                position: 'absolute',
                right: 5,
                top: '5px',
                cursor: 'pointer',
                color: '#0092ca',
              }}
            />
          </DialogTitle>
          <iframe
            title={detail?.title}
            width={'100%'}
            height="100%"
            style={{
              minHeight: '500px',
            }}
            itemType="text/html"
            src={`https://www.youtube-nocookie.com/embed/${videoKey}?autoplay=0&amp;hl=en&amp;modestbranding=1&amp;fs=1&amp;autohide=1`}
            frameBorder="0"
            allowFullScreen
            tabIndex={-1}
          ></iframe>
        </Dialog>
      </Box>
    </Flex>
  );
};
