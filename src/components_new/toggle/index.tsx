import React, { FC, HtmlHTMLAttributes } from "react";
import style from "./toggle.module.scss";

interface IProps extends HtmlHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  checked: boolean;
}

export const Toggle: FC<IProps> = ({ label, id, checked, ...props }) => {
  return (
    <div className={style.root}>
      <div className={style.label}>{label}</div>
      <label className={style.toggle} htmlFor={id}>
        <input
          className={style.input}
          type="checkbox"
          name={id}
          id={id}
          checked={checked}
          {...props}
        />
        <span className={style.slider} />
      </label>
    </div>
  );
};
