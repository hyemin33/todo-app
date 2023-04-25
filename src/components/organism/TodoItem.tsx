import styled from '@emotion/styled';
import { useState } from 'react';

import Input from '@src/components/atoms/Input';
import Button from '@src/components/atoms/Button';
import { deleteTodo, updateTodo } from '@src/apis/todo';

import { ITodo } from '@src/types/todo.type';

interface ITodoList {
  item: ITodo;
  refetch: () => Promise<void>;
}

const TodoItem = ({ item, refetch }: ITodoList) => {
  const [changeTodo, setChangeTodo] = useState({
    todo: item?.todo,
    isCompleted: item?.isCompleted,
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleUpdate = async () => {
    await updateTodo(item.id, changeTodo.todo, changeTodo.isCompleted);
    refetch();
    setIsEdit(false);
  };

  const handleDelete = async () => {
    await deleteTodo(item.id);
    refetch();
    setIsEdit(false);
  };

  const handleComplete = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setChangeTodo({ ...changeTodo, isCompleted: e.target.checked });
    await updateTodo(item.id, changeTodo.todo, e.target.checked);
    refetch();
  };

  return (
    <TodoItemArea>
      {isEdit ? (
        <>
          <TodoTextArea>
            <Input
              value={changeTodo.todo}
              placeholder='TODO를 입력해주세요.'
              type='string'
              onChange={(e) => {
                setChangeTodo({ ...changeTodo, todo: e.target.value });
              }}
            />
          </TodoTextArea>
          <ButtonArea>
            <Button className='line-blue' text='제출' onClick={handleUpdate} />
            <Button
              className='line-red'
              text='취소'
              onClick={() => {
                setIsEdit((prev) => !prev);
              }}
            />
          </ButtonArea>
        </>
      ) : (
        <>
          <TodoTextArea>
            <CheckBox
              type='checkbox'
              checked={changeTodo.isCompleted}
              onChange={handleComplete}
            />
            <TodoText>{item.todo}</TodoText>
          </TodoTextArea>
          <ButtonArea>
            <Button
              className='line-blue'
              text='수정'
              onClick={() => {
                setIsEdit((prev) => !prev);
                setChangeTodo({ ...changeTodo, todo: item?.todo });
              }}
            />
            <Button className='line-red' text='삭제' onClick={handleDelete} />
          </ButtonArea>
        </>
      )}
    </TodoItemArea>
  );
};
const TodoTextArea = styled.div`
  width: 70%;
  display: flex;
`;
const ButtonArea = styled.div`
  width: 30%;
  display: flex;
  margin-left: 10px;
  & :last-of-type {
    margin-left: 5px;
  }
`;
const CheckBox = styled.input`
  cursor: pointer;
`;
const TodoText = styled.p`
  font-size: 14px;
  padding: 10px 5px 9px;
  width: 100%;
`;

const TodoItemArea = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;
export default TodoItem;
