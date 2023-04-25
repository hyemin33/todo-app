import api from '@src/apis';

export const createTodo = async (todo: string) => {
  await api.post('/todos', { todo: todo });
};

export const getTodos = async () => {
  return await api.get('/todos');
};

export const updateTodo = async (
  id: number,
  todo: string,
  isCompleted: boolean
) => {
  await api.put(`/todos/${id}`, { todo: todo, isCompleted: isCompleted });
};

export const deleteTodo = async (id: number) => {
  await api.delete(`/todos/${id}`);
};
