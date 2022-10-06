import { userQuery } from 'app/hooks';
import React from 'react';
import { Img, Text, Box } from 'app/components/Blocks';
import { Container } from '@mui/material';
import { classNames } from 'app/config';
import { useParams } from 'react-router-dom';

export function ProfilePage() {
  const param = useParams<{ id: string }>();
  console.log(param.id);
  const accessToken = localStorage.getItem('access-token');
  let user;
  if (accessToken) {
    const token = JSON.parse(accessToken).token;
    const userProfile = userQuery.useGetUserProfile(token);
    user = userProfile.data?.data;
  }
  return (
    <Container maxWidth={'xl'}>
      <Box width={['300px']} height={['200px']}>
        {user?.imageId ? (
          <Img
            width={'100%'}
            height={'100%'}
            style={{
              borderRadius: '10px',
            }}
            src={user.imageId}
            alt={'image for user profiel'}
          />
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
      <Box>
        <Text
          color="white.0"
          style={{ textTransform: 'capitalize' }}
          className={classNames.SECTION_HEADER}
        >
          {user?.firstname}
        </Text>
        <Text
          color="white.0"
          style={{ textTransform: 'capitalize' }}
          className={classNames.SECTION_HEADER}
        >
          {user?.lastname}
        </Text>
      </Box>
    </Container>
  );
}
