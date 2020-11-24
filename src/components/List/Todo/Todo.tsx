import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../../store/ducks/todo.duck';

import { TiDelete } from 'react-icons/ti';

import { TodoContainer } from './styles';

import { ToDo } from '../../../@types/Todo';
interface IProps {
  todo: ToDo;
}

const Todo: React.FC<IProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDeleteTodo = useCallback(
    (id: number) => {
      dispatch(removeTodo(id));
    },
    [dispatch]
  );

  return (
    <TodoContainer>
      <div>
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
      <TiDelete
        size={30}
        onClick={() => handleDeleteTodo(todo.id)}
        className="RemoveIcon"
      />
    </TodoContainer>
  );
};

export default Todo;
