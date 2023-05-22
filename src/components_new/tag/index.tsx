import React, { FC, MouseEvent, useCallback } from "react";
import cx from "classnames";
import { ReactComponent as CrossIcon } from "assets/svg/cross.svg";
import style from "./tag.module.scss";

interface IProps {
  text: string;
  disabled?: boolean;
  onClose?: () => void;
  onClick?: () => void;
}

export const Tag: FC<IProps> = ({ text, disabled, onClose, onClick }) => {
  const TagCX = cx(style.tag, {
    [style.disabled]: disabled,
  });

  const handleClose = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      !!onClose && onClose();
    },
    [onClose]
  );

  return (
    <div tabIndex={0} className={TagCX} onClick={onClick}>
      <p className={style.text}>{text}</p>
      {!!onClose && (
        <button className={style.button} onClickCapture={handleClose}>
          <CrossIcon />
        </button>
      )}
    </div>
  );
};
