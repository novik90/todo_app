import { FC, ReactNode } from "react";

import "./Wrapper.css";

interface WrapperProps {
  className?: string;
  children?: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children, className }) => {
  return (
    <div className={`wrapper ${className ? className : ""}`}>{children}</div>
  );
};

export default Wrapper;
