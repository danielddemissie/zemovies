import { Box } from 'app/components/Blocks/Basics';
import React from 'react';
import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';
const todos = ['task1', 'task2', 'task3'];
const getTodos = () => todos;
const postTodo: MutationFunction = () => {
  todos.push('new Task');
  return Promise.resolve();
};
export default function Todos() {
  //access the client
  const queryClient = useQueryClient();
  //query
  const query = useQuery('todos', getTodos);
  //mutation
  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      //invalidate and refresh
      queryClient.invalidateQueries('todos');
    },
  });
  return (
    <Box backgroundColor={'#000'} width={['100px', '100%']}>
      Todos
      <ul>
        {query.data?.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          mutation.mutate({});
        }}
      >
        addTodo
      </button>
    </Box>
  );
}
