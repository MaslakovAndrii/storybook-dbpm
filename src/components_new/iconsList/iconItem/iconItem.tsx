import React from "react";
import cx from "classnames";
import { iconsInfo } from "../iconInfo";
import styles from "./iconItem.module.scss";

export const IconComponent = ({ name, ...props }: any) => {
  const { icon: Icon, color } = iconsInfo[name];
  const IconCX = cx(styles.icon, {
    [styles.svgFill]: color.svgFill,
    [styles.svgStroke]: color.svgStroke,
    [styles.pathFill]: color.pathFill,
    [styles.pathStroke]: color.pathStroke,
  });

  if (!Icon) {
    console.warn(`Icon ${name} not found`);
    return null;
  }

  return <Icon {...props} className={IconCX} />;
};
