import { autoUpdate } from "@floating-ui/react-dom/src/types";
import { Strategy, Placement, Middleware, Platform } from "@floating-ui/core";

export enum DefaultPositionHint {
  Top = "top",
  Bottom = "bottom",
  Right = "right",
  Left = "left",
}

export type TypeAutoUpdate = typeof autoUpdate;

export const makeFloating = (
  strategy?: Strategy,
  placement?: Placement,
  middleware?: Middleware[],
  whileElementsMounted?: TypeAutoUpdate,
  open?: boolean,
  platform?: Platform
) => {
  return {
    strategy,
    placement,
    middleware,
    whileElementsMounted,
    open,
    platform,
  };
};

export const getOpposedSide = (place: string): string | undefined => {
  const side = {
    left: "right",
    right: "left",
    top: "bottom",
    bottom: "top",
  }[place.split("-")[0]];

  return side;
};
