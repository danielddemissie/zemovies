import React, { useState } from 'react';
import { Box, Flex } from 'app/components/Blocks/Basics';
import { Button } from 'app/components/Blocks/Button';
import { Input } from 'app/components/Blocks/Input';
import { Form, Formik, ErrorMessage } from 'formik';

import { useQueryClient, useMutation, useQuery } from 'react-query';
import { todoValidation } from './validation';
import { todoAPI } from 'app/API/todo';

export default function Todos() {
  const [page, setPage] = useState(1);
  const qClient = useQueryClient();

  const mutation = useMutation(todoAPI.addTodo, {
    onSuccess: () => {
      qClient.invalidateQueries('user-todos');
    },
  });
  const { isLoading, data, isPreviousData } = useQuery(
    ['user-todos', page],
    () => todoAPI.getTodos(page),
    { keepPreviousData: true },
  );

  return (
    <Box mx={['auto']} width={['100px', '90%']}>
      Todos current Page <strong>{page}</strong>
      <Box maxHeight={'300px'} overflowX="hidden" overflowY={'auto'}>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <u>
            {data.todos.map((todo, index) => (
              <li key={index}>{todo.todo}</li>
            ))}
          </u>
        )}
      </Box>
      <Flex my={['20px']} gap={'50px'}>
        <Button
          type="submit"
          variant={page === 1 ? 'disabled' : 'tertiary'}
          borderRadius={'4px'}
          px={[1, 5]}
          fontSize={['12px']}
          py={[1, 2]}
          disabled={page === 1}
          onClick={() => setPage(oldPage => Math.max(oldPage - 1, 1))}
        >
          Prev
        </Button>
        <Button
          type="submit"
          borderRadius={'4px'}
          variant={!data?.hasMore ? 'disabled' : 'secondary'}
          px={[1, 6]}
          fontSize={['13px']}
          py={[1, 2]}
          onClick={() => {
            if (!isPreviousData && data?.hasMore) {
              setPage(oldPage => oldPage + 1);
            }
          }}
          disabled={isPreviousData || !data?.hasMore}
        >
          Next
        </Button>
      </Flex>
      {!data?.hasMore && (
        <Box>
          <Formik
            initialValues={{
              todo: '',
            }}
            onSubmit={(values, { resetForm }) => {
              mutation.mutate(values);
              resetForm();
            }}
            validationSchema={todoValidation}
          >
            {() => (
              <Form>
                <Flex
                  gap={'20px'}
                  mb={['10px']}
                  flexDirection={['column']}
                  alignItems="start"
                >
                  <Box>
                    <Input
                      width={['300px']}
                      height={[4]}
                      px={2}
                      py={1}
                      name="todo"
                      borderRadius={'4px'}
                    />
                    <span
                      style={{
                        color: 'red',
                        fontSize: '12px',
                        marginTop: '15px',
                      }}
                    >
                      <ErrorMessage name="todo" />
                    </span>
                  </Box>
                  <Button
                    type="submit"
                    borderRadius={'4px'}
                    variant="primary"
                    px={[1, 6]}
                    fontSize={['13px']}
                    py={[1, 2]}
                  >
                    Add Todo
                  </Button>
                </Flex>
              </Form>
            )}
          </Formik>
        </Box>
      )}
    </Box>
  );
}
