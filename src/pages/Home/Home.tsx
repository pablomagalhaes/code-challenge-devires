import React, { useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from 'store/ducks/todo.duck';

import { Container } from './styles';

import List from 'components/List/List';
import TextField from 'components/TextField';
import Button from 'components/Button';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const HandleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    if (title !== '' && description !== '') {
      dispatch(addTodo(title, description));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <Container>
      <h1>Hello, Welcome back!</h1>

      <List />

      <h4> Create Task </h4>

      <form onSubmit={HandleSubmit}>
        <TextField
          type="text"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title of task"
        />
        <TextField
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Describe your task"
        />
        <Button type="submit">CREATE TASK</Button>
      </form>
    </Container>
  );
};

export default Home;
