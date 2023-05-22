import React, { HtmlHTMLAttributes, ReactNode, useMemo } from "react";
import cx from "classnames";
import { SizeButton, VariantButton } from "./utils";
import { iconsInfo } from "components_new/iconsList/iconInfo";
import style from "./button.module.scss";

interface IProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant: VariantButton;
  size?: SizeButton;
  children?: string | ReactNode;
  icon?: string;
  disabled?: boolean;
  otherClass?: string;
}

export const Button = ({
  children,
  variant,
  size,
  disabled,
  icon,
  otherClass,
  ...props
}: IProps) => {
  const Icon = useMemo(() => (icon ? iconsInfo[icon]?.icon : null), [icon]);

  const RootCX = cx(style.root, {
    [style.primary]: variant === VariantButton.Primary,
    [style.secondary]: variant === VariantButton.Secondary,
    [style.module]: variant === VariantButton.Module,
    [style.back]: variant === VariantButton.Back,
    [style.xl]: size === SizeButton.XL,
    [style.l]: size === SizeButton.L,
    [style.m]: size === SizeButton.M,
    [style.s]: size === SizeButton.S,
  });

  return (
    <button
      className={`${RootCX} ${otherClass ? otherClass : null}`}
      disabled={disabled}
      {...props}
    >
      {!!Icon && <Icon className={style.icon} />}
      {children}
    </button>
  );
};
