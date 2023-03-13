import { FC } from "react";
import { IconNames, Icons } from "./Icons";

import "./Icon.css";

interface IconProperties {
  className?: string;
  color?: string;
  viewBox?: string;
  title?: string;
  style?: any;
  role?: string;
  size?: "16" | "24" | "32" | "40";
  name: IconNames;
}

const Icon: FC<IconProperties> = ({
  viewBox,
  color,
  title,
  size,
  name,
  ...props
}) => (
  <svg stroke={color} width={size} height={size} viewBox={viewBox} {...props}>
    {title && <title>{title}</title>}
    {Icons[name]()}
  </svg>
);

Icon.defaultProps = {
  color: "#782FEF",
  viewBox: "0 0 24 24",
  size: "24",
  role: "img",
};

export default Icon;
