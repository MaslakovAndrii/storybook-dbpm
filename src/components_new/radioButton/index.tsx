import React, { FC, HtmlHTMLAttributes } from "react";
import { ReactComponent as CheckIcon } from "assets/svg/new-svg/20x20/check.svg";
import style from "./radioButton.module.scss";

interface IProps extends HtmlHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  name: string;
  checked?: boolean;
}

export const RadioButton: FC<IProps> = ({
  label,
  name,
  value,
  checked,
  ...props
}) => {
  return (
    <div className={style.root}>
      <div className={style.containerInput}>
        <input
          className={style.input}
          id={label}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          {...props}
        />
        <div className={style.icon}>
          <CheckIcon />
        </div>
      </div>
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};
