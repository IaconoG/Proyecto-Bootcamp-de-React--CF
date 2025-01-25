import React, { type SVGProps } from "react";
import { Icons } from "./icons";
import type { IconType } from "../../types/icon-types";
import styles from "./Icon.module.css";

export type IconProps = SVGProps<SVGSVGElement> & {
  icon: IconType;
};

export const Icon: React.FC<IconProps> = ({ icon, ...props }) => {
  const SvgIcon = Icons[icon];

  const iconIsMoonFog = icon === "MoonFog"; // Esto es para arreglar el estilo de la luna con niebla

  if (!SvgIcon) {
    console.error(`Icon "${icon}" not found`);
    const SvgNoneIcon = Icons.NoneIcon;
    return (
      <span className={styles.customIcon}>
        <SvgNoneIcon {...props} />;
      </span>
    );
  }

  return (
    <span className={`${styles.customIcon} ${iconIsMoonFog ? styles.moonFog : ""}`}>
      <SvgIcon {...props} />
    </span>
  );
};
