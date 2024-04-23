"use client";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const CursorContext = React.createContext({
  cursor: "cursor-circle",
  setCursor: (cursor: string) => {},
});

export const CursorContextProvider: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  const [cursor, setCursor] = useState("cursor-circle");
  const value = { cursor, setCursor };

  // const updateState = (newState: Partial<AppState>) => {
  //   setState({ ...state, ...newState });
  // };

  return (
    <CursorContext.Provider value={value}>
      {props.children}
    </CursorContext.Provider>
  );
};
