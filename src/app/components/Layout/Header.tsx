/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text, Box, Button } from '../Blocks';
import { ReactComponent as Logo } from '../../../assets/images/video.svg';
import {
  AppBar,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Divider from '@mui/material/Divider';

export default () => {
  const pages = ['signin', 'pricing', 'about-us'];
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
    <AppBar
      sx={{
        background: '#000',
        boxShadow: 'none',
      }}
      position="static"
    >
      <Flex
        flexDirection={['row']}
        alignContent={['center']}
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Box>
          <Link to="/">
            <Flex alignItems={'center'} gap={'1rem'}>
              <Logo />
              <Text
                fontFamily={'ubuntu'}
                fontSize={['2rem']}
                color={'primary.0'}
                fontWeight={'bold'}
              >
                ZeMovies
              </Text>
            </Flex>
          </Link>
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
              width: '3rem',
              height: '3rem',
              color: '#0092ca',
            }}
          />
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          {pages.map(page => (
            <Button key={page} color="white.0" onClick={() => {}} my={2}>
              <Link to={`${page}`}>
                <Text
                  fontFamily={'ubuntu'}
                  fontSize={['1rem']}
                  fontWeight={[3]}
                  px="1rem"
                  py="0.4rem"
                  color="primary.0"
                  hover={{
                    backgroundColor: '#00B7FD',
                    borderRadius: '4px',
                    color: 'white',
                  }}
                >
                  {page}
                </Text>
              </Link>
            </Button>
          ))}
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
            filter: `drop-shadow(0 2px 2px rgba(63, 63, 63, 0.3))`,
          }}
        >
          {list('left')}
        </Box>
      </SwipeableDrawer>
    </AppBar>
  );
};
