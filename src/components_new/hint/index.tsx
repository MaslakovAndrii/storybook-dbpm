import {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  arrow,
} from "@floating-ui/react-dom";
import { DefaultPositionHint, makeFloating, getOpposedSide } from "./utils";
import style from "./hint.module.scss";

interface IProps {
  content: ReactElement;
  children: ReactElement;
  defaultPosition?: DefaultPositionHint;
  offsetValue: number;
}

export const Hint: FC<IProps> = ({
  content,
  children,
  defaultPosition = DefaultPositionHint.Bottom,
  offsetValue,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const arrowRef = useRef<HTMLDivElement>(null);
  const { x, y, strategy, refs, placement, middlewareData, isPositioned }: any =
    useFloating(
      makeFloating(
        "fixed",
        defaultPosition,
        [
          offset(offsetValue),
          flip(),
          shift(),
          arrow({
            element: arrowRef,
          }),
        ],
        autoUpdate,
        isOpen
      )
    );

  useEffect(() => {
    const { arrow } = middlewareData;
    const opposedSide = getOpposedSide(placement);

    isPositioned &&
      !!arrow &&
      !!opposedSide &&
      arrowRef.current &&
      Object.assign(arrowRef.current!.style, {
        left: arrow.x ? `${arrow.x}px` : "",
        top: arrow.y ? `${arrow.y}px` : "",
        [opposedSide]: "-4.25px",
      });
  }, [isPositioned, middlewareData, arrowRef, placement]);

  const handleMouseEnter = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={style.root}>
      <div
        className={style.children}
        ref={refs.setReference as any}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isOpen && (
        <div
          className={style.hint}
          ref={refs.setFloating as any}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
        >
          {content}
          <div className={style.arrow} ref={arrowRef} id="arrow" />
        </div>
      )}
    </div>
  );
};
