import React, { ReactNode } from "react";

import "./Container.css";

type Props = {
  className?: string;
  type?: "ghost" | "default";
  size: "small" | "medium" | "large";
  children: ReactNode;
};

const Container: React.FC<Props> = ({
  children,
  size,
  type = "default",
  ...props
}) => {
  return <section {...props}>{children}</section>;
};

export default Container;
