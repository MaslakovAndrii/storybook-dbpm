import React, { HTMLAttributes, useEffect, useMemo, useState } from "react";
import cx from "classnames";
import { SizeInput, VariantInput } from "./utils";
import { ReactComponent as Attention } from "assets/svg/attention-old.svg";
import { ReactComponent as SearchNew } from "assets/svg/search-new.svg";
import { iconsInfo } from "components_new/iconsList/iconInfo";
import style from "./input.module.scss";

interface IProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size: SizeInput;
  variant: VariantInput;
  type?: string;
  icon?: string;
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  errorText?: string;
  readonly?: boolean;
  maxWidth?: string;
}

export const Input = ({
  value,
  onChange,
  variant,
  size,
  icon,
  readonly,
  disabled,
  type = "text",
  placeholder,
  isError,
  errorText,
  maxWidth,
  ...other
}: IProps) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [isFocused, setFocus] = useState<boolean>(false);

  const Icon = useMemo(() => (icon ? iconsInfo[icon]?.icon : null), [icon]);

  useEffect(() => {
    if (isFocused) {
      ref?.current?.focus();
    }
  }, [isFocused]);

  const handleSetFocus = () => {
    if (!readonly && !disabled) {
      setFocus(true);
    }
  };

  const handleDisableFocus = () => {
    setFocus(false);
  };

  const ContainerCX = cx(style.inputContainer, {
    [style.primary]: variant === VariantInput.Primary,
    [style.primaryL]:
      size === SizeInput.primaryL && variant === VariantInput.Primary,
    [style.primaryS]:
      size === SizeInput.primaryS && variant === VariantInput.Primary,
    [style.table]: variant === VariantInput.Table,
    [style.search]: variant === VariantInput.Search,
    [style.searchXL]: size === SizeInput.searchXL,
    [style.searchL]: size === SizeInput.searchL,
    [style.searchM]: size === SizeInput.searchM,
    [style.searchS]: size === SizeInput.searchS,
    [style.filled]: !!value,
    [style.focus]: isFocused,
    [style.inactive]: disabled,
    [style.error]: isError && variant !== VariantInput.Search,
    [style.locked]: readonly,
    [style.paddingRight]: !!icon && variant !== VariantInput.Search,
  });

  const LabelCX = cx(style.placeholder, {
    [style.label]: isFocused || !!value,
  });

  const ErrorTextCX = cx(style.errorText, {
    [style.show]:
      variant !== VariantInput.Search &&
      !size?.includes("search") &&
      size !== SizeInput.primaryS &&
      isError,
  });

  return (
    <div
      className={style.root}
      style={{ maxWidth: `${maxWidth}` }}
      onFocus={handleSetFocus}
    >
      <div className={ContainerCX}>
        <label className={LabelCX}>{placeholder}</label>
        <input
          className={style.input}
          ref={ref}
          value={value}
          onChange={onChange}
          disabled={disabled}
          type={type}
          readOnly={readonly}
          onBlur={handleDisableFocus}
          {...other}
        />
        {isError && size === SizeInput.primaryS ? (
          <div className={style.icon}>
            <Attention />
          </div>
        ) : (
          (variant === VariantInput.Search && (
            <div className={style.icon}>
              <SearchNew />
            </div>
          )) ||
          (!!Icon && <Icon className={style.icon} />)
        )}
      </div>
      <div className={ErrorTextCX}>{errorText}</div>
    </div>
  );
};
