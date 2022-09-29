/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text, Box } from '../Blocks';
import { ReactComponent as Logo } from '../../../assets/images/video.svg';
import {
  AppBar,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import TheatersIcon from '@mui/icons-material/Theaters';
import HomeCarousel from '../Carousels';
import { useLocation } from 'react-router-dom';

export default () => {
  const pathName = useLocation().pathname;
  const pages = ['movies', 'popular', 'series'];
  const pagesIcons = {
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
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = anchor => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        height: '100vh',
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Link to="/">
        <Flex pt={'2rem'} justifyContent="center" gap={'1rem'}>
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

      <Divider />
      <List
        sx={{
          display: 'block',
        }}
      >
        {pages.map((menu, index) => (
          <ListItem key={menu} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <Link to={`${menu}`}>
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
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          background: 'rgb(0, 0, 0, 0.3)',
          boxShadow: `1px -1px 3px 0px rgba(59, 59, 59, 0.75)`,
        }}
      >
        <Flex
          flexDirection={['row']}
          alignContent={['center']}
          px={['10px', 0]}
          justifyContent={['space-between', 'space-around']}
          flexWrap="wrap"
        >
          <Box display="flex">
            <Link to="/">
              <Flex alignItems={'center'} gap={'1rem'}>
                <Logo
                  style={{
                    width: '35px',
                  }}
                />
                <Text
                  fontFamily={'ubuntu'}
                  fontSize={['1.5rem', '2rem']}
                  color={'primary.0'}
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
                <Link to={`${page}`}>
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
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            <Link to={'/login'}>
              <Button
                sx={{
                  fontFamily: 'ubuntu',
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  px: '2.3rem',
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
        </Flex>

        <SwipeableDrawer
          anchor={'left'}
          open={state.left}
          onClose={toggleDrawer('left', false)}
          onOpen={toggleDrawer('left', true)}
        >
          <Box
            sx={{
              backgroundColor: '#000',
            }}
          >
            {list('left')}
          </Box>
        </SwipeableDrawer>
      </AppBar>
      {pathName === '/' && <HomeCarousel />}
    </>
  );
};
