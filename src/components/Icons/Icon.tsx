import { FC } from "react";
import { IconNames, Icons } from "./Icons";

import "./Icon.css";

interface IconProperties {
  className?: string;
  viewBox?: string;
  title?: string;
  style?: any;
  role?: string;
  size?: "16" | "24" | "32" | "40";
  name: IconNames;
}

const Icon: FC<IconProperties> = ({ viewBox, title, size, name, ...props }) => (
  <svg width={size} height={size} viewBox={viewBox} {...props}>
    {title && <title>{title}</title>}
    {Icons[name]()}
  </svg>
);

Icon.defaultProps = {
  viewBox: "0 0 24 24",
  size: "24",
  role: "img",
};

export default Icon;
