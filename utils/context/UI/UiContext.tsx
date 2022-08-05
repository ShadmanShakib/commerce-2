import React, { useMemo, useCallback, useReducer, createContext } from "react";
import { InitialState, Action } from "./UiContext.types";
const initState: InitialState = {
  isLoading: false,
  isDrawerOpen: false,
};
const UiContext = createContext<InitialState | any>(initState);

const UiReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "OPEN_DRAWER":
      return { ...state, drawerOpen: true };
    case "CLOSE_DRAWER":
      return { ...state, drawerOpen: false };
    default:
      return state;
  }
};

export const UiProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(UiReducer, initState);
  const openDrawer = useCallback(() => {
    dispatch({ type: "OPEN_DRAWER" });
  }, [dispatch]);
  const closeDrawer = useCallback(() => {
    dispatch({ type: "CLOSE_DRAWER" });
  }, [dispatch]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(() => ({ ...state, openDrawer, closeDrawer }), [state]);
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

export default UiContext;
