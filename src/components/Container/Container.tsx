import React, { ReactNode } from "react";

import "./Container.css";

interface ContainerProperties {
  size?: "small" | "medium" | "large";
  direction?: "row" | "col";
  className?: string;
  children?: ReactNode;
}

const Container: React.FC<ContainerProperties> = ({
  children,
  size,
  direction,
  ...props
}) => {
  let c = "container";
  const classes = `${c} ${c}__${size} ${c}__${direction}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  size: "medium",
  direction: "col",
};

export default Container;
