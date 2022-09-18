/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import { Input, Box, Button, Flex, Text } from 'app/components/Blocks';
import { schemas } from '../../config';

export function Signup() {
  const handleSubmit = values => console.log(values);
  return (
    <Flex flexDirection={['column']} alignItems="center">
      <Text as={'h1'}>Sign up</Text>
      <Formik
        initialValues={{ name: '' }}
        validationSchema={schemas.signupSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Box mb={['0.4rem']}>
              <Input
                borderRadius={[0]}
                p={[3]}
                placeholder="User name"
                name="name"
              />
              <Text variant="error">
                <ErrorMessage name="name" />
              </Text>
            </Box>
            <Button
              variant="primary"
              fontSize={['1rem']}
              px={['1rem']}
              py={['0.4rem']}
              borderRadius={['1rem']}
            >
              sign up
            </Button>
          </Form>
        )}
      </Formik>
    </Flex>
  );
}
