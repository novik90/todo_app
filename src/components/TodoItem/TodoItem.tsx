import React from "react";

import "./TodoItem.css";

const TodoItem = () => {
  return (
    <section className="item">
      <div className="item__desc">
        <h3>Item 1</h3>
        <p>A little description for this item</p>
      </div>
      <div className="item__icon">+</div>
    </section>
  );
};

export default TodoItem;
