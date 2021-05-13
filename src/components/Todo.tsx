import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TODOS_LS = 'todo_list';

interface todoInt {
  id: number;
  todo: string;
}

const Todo: React.FC = () => {
  const [todoList, setTodoList] = useState<todoInt[]>([]);
  const [tempTodo, setTempTodo] = useState<string>('');
  const [submit, setSubmit] = useState<boolean>(false);

  useEffect(() => {
    const loadedTodoList = localStorage.getItem(TODOS_LS);

    if (loadedTodoList) {
      const parsedToDoList = JSON.parse(loadedTodoList);
      setTodoList(parsedToDoList);
      setTempTodo('');
    }
  }, [submit]);

  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempTodo(e.target.value);
  };

  const submitTodo = (event: React.FormEvent) => {
    event.preventDefault();
    const newId = todoList.length + 1;
    const todoObj: todoInt = {
      id: newId,
      todo: tempTodo,
    };

    const newTodoList = [...todoList, todoObj];
    //setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }])
    //setTodoList(newTodoList);

    localStorage.setItem(TODOS_LS, JSON.stringify(newTodoList));
    setSubmit(!submit);
  };

  const deleteTodo = (id: number) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    //setTodoList(newTodoList);

    localStorage.setItem(TODOS_LS, JSON.stringify(newTodoList));
    setSubmit(!submit);
  };

  const renderTodo = () => {
    if (todoList.length > 0) {
      return todoList.map((todo) => {
        return (
          <TodoListWrap key={todo.id}>
            <TodoLi>{todo.todo}</TodoLi>
            <TodoDelBtn onClick={() => deleteTodo(todo.id)}>
              delete todo
            </TodoDelBtn>
          </TodoListWrap>
        );
      });
    }
  };

  return (
    <TodoWrap>
      <TodoForm onSubmit={submitTodo}>
        <TodoInput
          type="text"
          placeholder="What are you doing today?"
          onChange={handleTodoChange}
          value={tempTodo}
        />
      </TodoForm>
      {renderTodo()}
    </TodoWrap>
  );
};

export default Todo;

const TodoWrap = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TodoForm = styled.form`
  width: 80%;
`;

const TodoInput = styled.input`
  font-size: 30px;
  width: 100%;
  background: transparent;
  color: #ffffff;
  outline: none;
  border: none;
  border-bottom: 2px solid #ffffff;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #ffffff;
  }
  :-ms-input-placeholder {
    color: #ffffff;
  }
  &:focus {
    outline: none;
    background: transparent;
  }
`;

const TodoListWrap = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const TodoLi = styled.p`
  width: 80%;
  word-break: break-all;
  font-size: 20px;
  color: #ffffff;
`;

const TodoDelBtn = styled.button``;
