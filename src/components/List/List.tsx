import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

import { getAllTodos } from 'store/ducks/todo.duck';

import Todo from './Todo/Todo';

import { ToDo } from '../../@types/Todo';

import { ToDoListContainer } from './styles';

const List: React.FC = () => {
  const dispatch = useDispatch();
  const { todos, loading } = useSelector((state: RootState) => state.todoReducer);

  useEffect(() => {
    dispatch(getAllTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ToDoListContainer>
      {loading ? (
        <h1>LOADING :)</h1>
      ) : (
        <>
          {todos.map((todo: ToDo) => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </>
      )}
    </ToDoListContainer>
  );
};

export default List;
