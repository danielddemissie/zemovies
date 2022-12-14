/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { Input, Box, Flex, Button, Text } from 'app/components/Blocks';
import { schemas } from '../../config';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import { ReactComponent as FacebookIcon } from '../../../assets/images/facebookIcon.svg';
import { Divider, Chip } from '@mui/material';
import './style.css';
import { GoogleLogin } from '@react-oauth/google';
import { userQuery } from 'app/hooks';
import { QueryCache, useMutation } from 'react-query';

export function Auth() {
  const [isSignin, setIsSignin] = React.useState(true);
  const qCache = new QueryCache();
  const history = useHistory();
  const handleSubmit = values => {
    history.push('/');
  };

  const userMutation = useMutation(userQuery.useOauth);

  if (userMutation.isSuccess) {
    const token: any = userMutation.data?.data?.user.token;
    localStorage.setItem('access-token', JSON.stringify(token?.access));
    localStorage.setItem('refresh-token', JSON.stringify(token?.refresh));
  }
  return (
    <>
      <Helmet>
        <title>SignupPage </title>
        <meta
          name="description"
          content="Signup page to register for zmovies"
        />
      </Helmet>
      <Flex
        maxWidth={['md', 'md', 'md', 'lg']}
        width={['90%', '90%', '100%']}
        alignItems={'center'}
        flexDirection={isSignin ? ['column', 'row'] : ['column', 'row-reverse']}
        mx="auto"
        mt={[0, '20rem']}
        height={['80vh', '50vh']}
        justifyContent={'space-between'}
        style={{
          boxShadow: `#053F55 0px 0px 0px 2px`,
          borderRadius: '10px',
        }}
      >
        <Box mx="auto">
          <Text as={'h1'} textAlign="center" color="primary.0">
            {isSignin ? 'Sign in' : 'Sign up'}
          </Text>

          <Flex
            flexWrap={'wrap'}
            flexDirection={['column', 'row']}
            alignItems={'center'}
            justifyContent={['center', 'space-between']}
            gap={'10px'}
          >
            <Box
              sx={{
                '&:hover': {
                  boxShadow: `rgba(3, 102, 214, 0.3) 0px 0px 0px 3px`,
                  borderRadius: '10px',
                },
                padding: '0.5rem 1rem',
              }}
            >
              <GoogleLogin
                onSuccess={credentialResponse => {
                  userMutation.mutate(credentialResponse);
                  qCache.find('user-profile')?.invalidate();
                  history.push('/');
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </Box>
            <Box
              sx={{
                '&:hover': {
                  boxShadow: `rgba(3, 102, 214, 0.3) 0px 0px 0px 3px`,
                  borderRadius: '10px',
                },
                padding: '0.5rem 1rem',
              }}
            >
              <Text
                fontSize={['12px', '15px']}
                style={{
                  cursor: 'pointer',
                  color: 'white',
                }}
              >
                <FacebookIcon
                  style={{
                    width: '20px',
                    marginBottom: '3px',
                    marginRight: '5px',
                  }}
                />
                Continue with Facebook
              </Text>
            </Box>
          </Flex>
          <Divider
            sx={{
              my: '1rem',
            }}
          >
            <Chip
              label="Or"
              sx={{
                px: '1rem',
                color: 'white',
              }}
            />
          </Divider>
          <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={schemas.signupSchema}
            onSubmit={values => handleSubmit(values)}
          >
            {({ values }) => (
              <Form>
                {!isSignin && (
                  <Box mb={['1rem']}>
                    <Input
                      bg={'transparent'}
                      className="input_search"
                      color="white.0"
                      border="none"
                      borderRadius={[0]}
                      py={['1rem']}
                      style={{
                        paddingLeft: '20px',
                        width: '100%',
                      }}
                      placeholder="Email"
                      name="email"
                    />
                    <Text variant="error">
                      <ErrorMessage name="email" />
                    </Text>
                  </Box>
                )}
                <Box mb={['1rem']}>
                  <Input
                    placeholder="User name"
                    name="username"
                    bg={'transparent'}
                    className="input_search"
                    color="white.0"
                    border="none"
                    borderRadius={[0]}
                    py={['1rem']}
                    style={{
                      paddingLeft: '20px',
                      width: '100%',
                    }}
                  />
                  <Text variant="error">
                    <ErrorMessage name="username" />
                  </Text>
                </Box>
                <Box mb={['1rem']}>
                  <Input
                    borderRadius={[0]}
                    bg={'transparent'}
                    color="white.0"
                    placeholder="Password"
                    name="password"
                    className="input_search"
                    border="none"
                    py={['1rem']}
                    style={{
                      paddingLeft: '20px',
                      width: '100%',
                    }}
                  />
                  <Text variant="error">
                    <ErrorMessage name="password" />
                  </Text>
                </Box>
                {userMutation.isError ? (
                  <Text variant="error">An error occurred:</Text>
                ) : null}

                <Button
                  variant="primary"
                  fontSize={['1rem']}
                  fontFamily="ubuntu"
                  px={['2rem']}
                  type="submit"
                  py={['0.5rem']}
                  my={['1.5rem']}
                  borderRadius={['1rem']}
                >
                  {isSignin ? 'sign in' : 'sign up'}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>

        <Divider />
        <Box
          bg="black.1"
          mt={['10px', 0]}
          width={['100%', '30%', '50%']}
          display="flex"
          alignItems={'center'}
          flexDirection="column"
          justifyContent="center"
          borderRadius="10px"
          height={'100%'}
        >
          <Text as="h4" mx={['10px']} color="white.0" textAlign={'center'}>
            {isSignin ? "Don't have an account?" : 'Continue with my account?'}
          </Text>
          <Button
            variant="primary"
            fontSize={['1rem']}
            fontFamily="ubuntu"
            px={['2rem']}
            type="submit"
            py={['0.5rem']}
            borderRadius={['1rem']}
            onClick={() => setIsSignin(!isSignin)}
          >
            {isSignin ? 'sign up' : 'sign in'}
          </Button>
        </Box>
      </Flex>
    </>
  );
}
