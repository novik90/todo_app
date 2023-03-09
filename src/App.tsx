import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import TodoItem from "./components/TodoItem";

import "./App.css";

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <Container size="medium" className="container-medium container-default">
        <Container
          type="ghost"
          size="medium"
          className="container-medium container-ghost test"
        >
          {todos &&
            todos.map((el) => {
              return (
                <TodoItem
                  key={el.id}
                  title={users.filter((e) => e.id === el.userId)[0].username}
                  description={el.title}
                />
              );
            })}
        </Container>
      </Container>
    </div>
  );
}

export default App;
