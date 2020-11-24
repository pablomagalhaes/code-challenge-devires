/* eslint-disable */
import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { RootState, AppThunk } from 'store';

import api from 'services/api';

import { ToDo } from '../../@types/Todo';

interface State {
  loading: boolean;
  error: string | null;
  todos: ToDo[];
}

const initialState: State = {
  loading: false,
  error: null,
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    startLoading(state: State) {
      state.loading = true;
    },
    getTodosFail(state: State, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    getAllTodosSuccess(state: State, action: PayloadAction<ToDo[]>) {
      state.error = null;
      state.todos = action.payload;
      state.loading = false;
    },
  },
});

export const { startLoading, getAllTodosSuccess, getTodosFail } = todoSlice.actions;

export default todoSlice.reducer;

export const getAllTodos = (): AppThunk => async (dispatch: Dispatch) => {
  try {
    dispatch(startLoading());

    const response = await api.get<ToDo[]>('/todos');

    dispatch(getAllTodosSuccess(response.data));
  } catch (err) {
    dispatch(getTodosFail(err.toString()));
  }
};

export const removeTodo = (id: number): AppThunk => async (dispatch: Dispatch) => {
  try {
    dispatch(startLoading());

    const response = await api.delete(`/todos/${id}`);

    if (response.status !== 200) {
      throw new Error('Something went wrong. Try Again in few moments');
    }

    const responseAllTodos = await api.get<ToDo[]>('/todos');

    dispatch(getAllTodosSuccess(responseAllTodos.data));
  } catch (err) {
    dispatch(getTodosFail(err.toString()));
  }
};

export const addTodo = (title: string, description: string): AppThunk => async (
  dispatch: Dispatch
) => {
  try {
    dispatch(startLoading());

    const response = await api.post<ToDo>('todos', {
      title,
      description,
    });

    if (response.status !== 201) {
      throw new Error('Something went wrong. Try Again in few moments');
    }

    const responseAllTodos = await api.get<ToDo[]>('/todos');

    dispatch(getAllTodosSuccess(responseAllTodos.data));
  } catch (err) {
    dispatch(getTodosFail(err.toString()));
  }
};

export const todoState = (state: RootState) => state.todoReducer;
