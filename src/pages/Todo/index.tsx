import styled from '@emotion/styled';
import { createTodo, getTodos } from '@src/apis/todo';

import { Box, EmptyBox, FlexCenterBox } from '@src/components/atoms/Box';
import { H2 } from '@src/components/atoms/Typography';
import InputButton from '@src/components/molecules/InputButton';
import TodoItem from '@src/components/organism/TodoItem';
import useGetData from '@src/utils/hooks/useGetData';
import { useState } from 'react';

const TodoPage = () => {
  const [todo, setTodo] = useState('');
  const { data, refetch } = useGetData(getTodos);

  const handleCreate = async () => {
    if (todo === '') return alert('TODO를 입력해주세요.');
    await createTodo(todo);
    refetch();
    setTodo('');
  };

  return (
    <FlexCenterBox>
      <Box>
        <H2>TODO 리스트</H2>
        <InputButton
          placeholder='TODO를 입력해주세요.'
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onClick={handleCreate}
          text='등록'
          width={100}
        />
        <TodoList>
          {data.length > 0 ? (
            data.map((item, i) => (
              <TodoItem item={item} key={`todo` + i} refetch={refetch} />
            ))
          ) : (
            <EmptyBox>TODO가 없습니다.</EmptyBox>
          )}
        </TodoList>
      </Box>
    </FlexCenterBox>
  );
};

const TodoList = styled.div`
  width: 100%;
  max-height: 450px;
  overflow: auto;
  height: 100%;
  overflow: auto;
  border-top: 1px solid #efefef;
  padding: 20px 0;
`;
export default TodoPage;
