import React from "react";
import Container from "./components/Container";
import TodoItem from "./components/TodoItem";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container size="medium">
        <Container type="ghost" size="medium">
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </Container>
      </Container>
    </div>
  );
}

export default App;
