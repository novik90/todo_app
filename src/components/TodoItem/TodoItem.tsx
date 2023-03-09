import { FC } from "react";

import "./TodoItem.css";
import Icon from "../Icons/Icon";

interface ITodo {
  title: string;
  description: string;
}

const TodoItem: FC<ITodo> = ({ title, description }) => {
  return (
    <section className="item">
      <div className="item__desc">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="item__icon">
        <Icon name={"Mark"} />
      </div>
    </section>
  );
};

export default TodoItem;
