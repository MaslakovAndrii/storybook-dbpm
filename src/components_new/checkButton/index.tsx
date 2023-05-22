import React, { FC, HtmlHTMLAttributes } from "react";
import cx from "classnames";
import { ReactComponent as CheckMarkIcon } from "assets/svg/checkmark.svg";
import { ReactComponent as MinusIcon } from "assets/svg/minus-old.svg";
import style from "./checkbox.module.scss";

interface IProps extends HtmlHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  indeterminate?: boolean;
  checked?: boolean;
  value?: string;
}

export const Checkbox: FC<IProps> = ({
  indeterminate,
  label,
  name,
  value,
  checked,
  ...props
}) => {
  const RootCX = cx(style.root, {
    [style.indeterminate]: indeterminate,
  });

  return (
    <div className={RootCX}>
      <div className={style.containerInput}>
        <input
          className={style.input}
          type="checkbox"
          id={label}
          name={name}
          value={value}
          checked={checked}
          {...props}
        />
        {!indeterminate ? (
          <div className={style.icon}>
            <CheckMarkIcon />
          </div>
        ) : (
          <MinusIcon className={style.icon} />
        )}
      </div>
      <label className={style.label} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};
