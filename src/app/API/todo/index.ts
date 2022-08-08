import { API } from '..';
const userId = '62c17722e250da33858b16d6';
export const todoAPI = {
  getTodos: async page => {
    const res: any = await API({
      method: 'GET',
      route: `todo/todos/${userId}`,
      params: {
        page: page,
        size: 10,
        done: false,
      },
    });
    return res.data;
  },
  addTodo: async values => {
    await API({
      method: 'POST',
      data: {
        todo: values.todo,
        userId,
      },
      route: 'todo/add',
    });
  },
};
