/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text, Box, Img } from '../Blocks';
import { ReactComponent as Logo } from '../../../assets/images/video.svg';
import {
  AppBar,
  SwipeableDrawer,
  ListItem,
  ListItemButton,
  Button,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';
import HomeIcon from '@mui/icons-material/Home';
import { HomeCarousel } from '../Carousels';
import { useLocation } from 'react-router-dom';
import { userQuery } from 'app/hooks';
import { ArrowBackIosNew } from '@mui/icons-material';
import { QueryCache } from 'react-query';
import { googleLogout } from '@react-oauth/google';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { useMutation } from 'react-query';

export interface IAcnher {
  direction: 'bottom' | 'left' | 'right' | 'top' | undefined;
  open: boolean;
}

export default () => {
  const qCache = new QueryCache();
  const [ancher, setAncher] = React.useState<IAcnher>({
    direction: undefined,
    open: false,
  });
  const userMutation = useMutation(userQuery.useOauth);
  let user;
  useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
      userMutation.mutate(credentialResponse);
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  if (userMutation.isSuccess) {
    const token: any = userMutation.data?.data?.user.token;
    user = userMutation.data?.data?.user;
    localStorage.setItem('access-token', JSON.stringify(token?.access));
    localStorage.setItem('refresh-token', JSON.stringify(token?.refresh));
  }
  const pathName = useLocation().pathname;
  const pages = ['home', 'movies', 'popular', 'series'];
  const pagesIcons = {
    home: (
      <HomeIcon
        style={{
          color: '#0092ca',
        }}
      />
    ),
    movies: (
      <MovieIcon
        style={{
          color: '#0092ca',
        }}
      />
    ),
    popular: (
      <WhatshotIcon
        style={{
          color: '#0092ca',
        }}
      />
    ),
    series: (
      <TheatersIcon
        style={{
          color: '#0092ca',
        }}
      />
    ),
  };

  const toggleDrawer =
    (direction, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setAncher({ ...ancher, direction, open });
    };

  const list = anchor => (
    <Box
      sx={{
        width: anchor === 'right' ? 280 : 250,
        height: '50vh !important',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Link to="/">
        <Flex py={'2rem'} justifyContent="center" gap={'1rem'}>
          {anchor === 'right' && (
            <ArrowBackIosNew
              onClick={() => {
                toggleDrawer('right', false);
              }}
              style={{
                cursor: 'pointer',
                color: 'white',
                position: 'relative',
                top: 8,
                left: -10,
              }}
            />
          )}
          <Logo
            style={{
              width: '35px',
              height: '35px',
            }}
          />
          <Text
            fontFamily={'ubuntu'}
            fontSize={['1.5rem']}
            color={'primary.0'}
            fontWeight={'bold'}
          >
            ZeMovies
          </Text>
        </Flex>
      </Link>
      {anchor === 'right' && (
        <Link to="/">
          <Flex
            // py={'2rem'}
            flexDirection={'column'}
            justifyContent="center"
            alignItems={'center'}
            gap={'2rem'}
          >
            <Flex justifyContent="center" alignItems={'center'} gap="10px">
              <Img
                width={'50px'}
                height={'50px'}
                style={{
                  borderRadius: '50%',
                  marginRight: '0px',
                }}
                src={user?.imageId}
                alt={'image for user profiel'}
              />
              <Text
                color="white.0"
                fontSize={'1rem'}
                style={{
                  textTransform: 'capitalize',
                }}
              >
                {user?.firstname} {user?.lastname}
              </Text>
            </Flex>
            <Button
              sx={{
                fontFamily: 'ubuntu',
                fontSize: {
                  lg: '0.8rem',
                  xs: '0.6rem',
                },
                fontWeight: 400,
                px: {
                  lg: '2.3rem',
                  xs: '1.4rem',
                },
                py: '0.5rem',
                color: '#fff',
                background: pathName === '/login' ? '#053F55' : '#0092ca',
                '&:hover': {
                  background: '#053F55',
                  transition: 'ease 10ms',
                  transform: 'scale(1.05)',
                },
              }}
              onClick={() => {
                localStorage.clear();
                qCache.clear();
                console.log('move');
                googleLogout();
              }}
            >
              Logout
            </Button>
          </Flex>
        </Link>
      )}
      <Divider />
      {anchor === 'left' && (
        <Flex
          flexDirection={'column'}
          alignItems="center"
          mx="50px"
          justifyContent={'center'}
        >
          {pages.map((menu, index) => (
            <ListItem sx={{ alignSelf: 'center' }} key={menu} disablePadding>
              <ListItemButton>
                <ListItemIcon>{pagesIcons[menu]}</ListItemIcon>
                <Link to={menu === 'home' ? '/' : `/${menu}`}>
                  <ListItemText
                    style={{
                      textTransform: 'capitalize',
                      color: '#656A71',
                    }}
                    primary={menu}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </Flex>
      )}
    </Box>
  );

  return (
    <>
      <AppBar
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          background: user
            ? 'linear-gradient(to left, #051937, #0f335a, #05193732, #05193732, #2f394731)'
            : 'rgb(0, 0, 0, 0.3)',

          boxShadow: `1px -1px 3px 0px rgba(59, 59, 59, 0.75)`,
        }}
      >
        <Flex
          flexDirection={['row']}
          alignContent={['center']}
          px={['0px', '20px', 0]}
          mx={[0, '10px']}
          justifyContent={['space-between', 'space-around', 'space-around']}
          flexWrap="wrap"
        >
          <Box
            alignSelf={'center'}
            sx={{
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <MenuIcon
              onClick={toggleDrawer('left', true)}
              style={{
                width: '2.5rem',
                height: '3rem',
                color: '#0092ca',
              }}
            />
          </Box>
          <Box
            sx={{
              display: {
                xs: 'flex',
                sm: 'flex',
                md: 'flex',
              },
            }}
          >
            <Link to="/">
              <Flex alignItems={'center'} py="10px" mt="5px" gap={'1rem'}>
                <Logo
                  style={{
                    color: 'white',
                    width: '35px',
                    height: '30px',
                  }}
                />
                <Text
                  fontFamily={'ubuntu'}
                  fontSize={['1rem', '2rem']}
                  color={'white.0'}
                  fontWeight={'bold'}
                >
                  ZeMovies
                </Text>
              </Flex>
            </Link>
          </Box>

          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            {pages.map(page => (
              <Button key={page} onClick={() => {}}>
                <Link to={page === 'home' ? '/' : `/${page}`}>
                  {pagesIcons[page]}
                  <Text
                    fontFamily={'ubuntu'}
                    fontSize={['0.8rem']}
                    fontWeight={[3]}
                    px="1rem"
                    color="white.0"
                  >
                    {page}
                  </Text>
                </Link>
              </Button>
            ))}
          </Box>

          {/* {user ? (
            <Box
              sx={{
                display: { xs: 'flex', md: 'flex' },
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
              }}
              onClick={toggleDrawer('right', true)}
            >
              {user?.imageId ? (
                <Box px="0.1rem" py="0.2rem" borderRadius={'10px'}>
                  <Img
                    width={'40px'}
                    height={'40px'}
                    style={{
                      borderRadius: '50%',
                      marginRight: '5px',
                    }}
                    src={user?.imageId}
                    alt={'image for user profiel'}
                  />
                  <ExpandMore />
                </Box>
              ) : (
                <Text
                  hover={{
                    background: '#053F55',
                  }}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    color: '#fff',
                    cursor: 'pointer',
                    background: '#053F55',
                    textTransform: 'uppercase',
                  }}
                  fontSize={['1.2rem']}
                  textAlign="center"
                  pt="5px"
                >
                  {user?.firstname.charAt(0)}
                </Text>
              )}
            </Box>
          ) : (
            <Box
              sx={{
                display: { xs: 'flex', md: 'flex' },
                alignItems: 'center',
              }}
            >
              <Link to={'/login'}>
                <Button
                  sx={{
                    fontFamily: 'ubuntu',
                    fontSize: {
                      lg: '0.8rem',
                      xs: '0.6rem',
                    },
                    fontWeight: 400,
                    px: {
                      lg: '2.3rem',
                      xs: '1.4rem',
                    },
                    py: '0.5rem',
                    color: '#fff',
                    background: pathName === '/login' ? '#053F55' : '#0092ca',
                    '&:hover': {
                      background: '#053F55',
                      transition: 'ease 10ms',
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  login
                </Button>
              </Link>
            </Box>
          )} */}
        </Flex>

        <SwipeableDrawer
          anchor={ancher.direction}
          open={ancher.open}
          onClose={toggleDrawer(ancher.direction, false)}
          onOpen={toggleDrawer(ancher.direction, true)}
          sx={{
            '& .MuiPaper-root.MuiDrawer-paper': {
              backgroundColor: '#000',
            },
          }}
        >
          <Box>{list(ancher.direction)}</Box>
        </SwipeableDrawer>
      </AppBar>
      {pathName === '/' && <HomeCarousel />}
    </>
  );
};
