import React, { ReactNode } from "react";

import "./Container.css";

type Props = {
  type?: "ghost" | "default";
  size: "small" | "medium" | "large";
  children: ReactNode;
};

const Container: React.FC<Props> = ({ children, size, type = "default" }) => {
  return (
    <section className={`container-${type} container-${size}`}>
      {children}
    </section>
  );
};

export default Container;
