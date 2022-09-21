/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { Input, Box, Button, Flex, Text } from 'app/components/Blocks';
import { schemas } from '../../config';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';

export function Signup() {
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
      <Flex flexDirection={['column']} alignItems="center">
        <Text as={'h1'}>Sign up</Text>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={schemas.signupSchema}
          onSubmit={values => handleSubmit(values)}
        >
          {() => (
            <Form>
              <Box mb={['0.4rem']}>
                <Input
                  borderRadius={[0]}
                  p={[3]}
                  placeholder="User name"
                  name="username"
                />
                <Text variant="error">
                  <ErrorMessage name="username" />
                </Text>
              </Box>
              <Box mb={['0.4rem']}>
                <Input
                  borderRadius={[0]}
                  p={[3]}
                  placeholder="Password"
                  name="password"
                />
                <Text variant="error">
                  <ErrorMessage name="password" />
                </Text>
              </Box>
              <Button
                variant="primary"
                fontSize={['1rem']}
                px={['1rem']}
                type="submit"
                py={['0.4rem']}
                borderRadius={['1rem']}
              >
                sign up
              </Button>
            </Form>
          )}
        </Formik>
      </Flex>
    </>
  );
}
