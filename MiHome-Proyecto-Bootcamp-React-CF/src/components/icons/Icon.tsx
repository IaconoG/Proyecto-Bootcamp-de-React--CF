import React, { type SVGProps } from "react";
import { Icons } from "./icons";
import type { IconType } from "../../types/icon-types";

export type IconProps = SVGProps<SVGSVGElement> & {
  icon: IconType;
};

export const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  const SvgIcon = Icons[icon];

  if (!SvgIcon) {
    console.error(`Icon "${icon}" not found`);
    const SvgNoneIcon = Icons.NoneIcon;
    return (
      <span className="custom-icon">
        <SvgNoneIcon {...props} />;
      </span>
    );
  }

  return (
    <span className="custom-icon">
      <SvgIcon {...props} />
    </span>
  );
};
