/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { Input, Box, Flex, Button, Text } from 'app/components/Blocks';
import { schemas } from '../../config';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import { ReactComponent as GoogleIcon } from '../../../assets/images/googleIcon.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/images/facebookIcon.svg';
import { Divider, Chip } from '@mui/material';
import './style.css';

export function Auth() {
  const [isSignin, setIsSignin] = React.useState(true);
  const history = useHistory();
  const handleSubmit = values => {
    history.push('/');
  };
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
        maxWidth="lg"
        width={['90%', '90%', '100%']}
        alignItems={'center'}
        flexDirection={isSignin ? ['column', 'row'] : ['column', 'row-reverse']}
        mx="auto"
        mt={'5rem'}
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
              <Text
                fontSize={['12px', '15px']}
                style={{
                  cursor: 'pointer',
                  color: 'white',
                }}
              >
                <GoogleIcon
                  style={{
                    width: '18px',
                    marginBottom: '2px',
                    marginRight: '5px',
                  }}
                />
                Continue with Google
              </Text>
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
                      bg={'primary.3'}
                      color="white.0"
                      border="1px solid #053F55"
                      borderRadius={[0]}
                      p={[3]}
                      placeholder="Email"
                      name="email"
                      style={{
                        width: '100%',
                      }}
                    />
                    <Text variant="error">
                      <ErrorMessage name="email" />
                    </Text>
                  </Box>
                )}
                <Box mb={['1rem']}>
                  <Input
                    bg={'primary.3'}
                    color="white.0"
                    border="1px solid #053F55"
                    borderRadius={[0]}
                    p={[3]}
                    placeholder="User name"
                    name="username"
                    style={{
                      width: '100%',
                    }}
                  />
                  <Text variant="error">
                    <ErrorMessage name="username" />
                  </Text>
                </Box>
                <Box mb={['1rem']}>
                  <Input
                    bg={'primary.3'}
                    color="white.0"
                    border="1px solid #053F55"
                    borderRadius={[0]}
                    p={[3]}
                    placeholder="Password"
                    style={{
                      width: '100%',
                    }}
                    name="password"
                  />
                  <Text variant="error">
                    <ErrorMessage name="password" />
                  </Text>
                </Box>
                <Button
                  variant="secondary"
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
