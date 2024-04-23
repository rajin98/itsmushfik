"use client";
import React from "react";

export interface AppState {
  cursor?: string;
  updateState: (newState: Partial<AppState>) => void;
}

/**
 * Default application state
 */
const defaultState: AppState = {
  cursor: "cursor-circle",
  updateState: (newState?: Partial<AppState>) => {},
};

export const CursorContext = React.createContext<AppState>(defaultState);
