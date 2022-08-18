import React, { useMemo, useCallback, useReducer, createContext } from "react";
import { InitialState, Action } from "./UiContext.types";
const initState: InitialState = {
  isLoading: false,
  isDrawerOpen: false,
  isWritingReview: false,
  prodDescriptionTab: "description",
};
const UiContext = createContext<InitialState | any>(initState);

const UiReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case "OPEN_DRAWER":
      return { ...state, isDrawerOpen: true };
    case "CLOSE_DRAWER":
      return { ...state, isDrawerOpen: false };
    case "SET_PROD_DESCRIPTION_TAB":
      return { ...state, prodDescriptionTab: action.payload };
    case "TOGGLE_WRITING_REVIEW":
      return { ...state, isWritingReview: !state.isWritingReview };
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
  //product description tab
  const setProdDescriptionTab = useCallback(
    (tab: "description" | "reviews" | "returns") => {
      dispatch({ type: "SET_PROD_DESCRIPTION_TAB", payload: tab });
    },
    [dispatch]
  );
  // toggle writing review
  const toggleWritingReview = useCallback(() => {
    dispatch({ type: "TOGGLE_WRITING_REVIEW" });
  }, [dispatch]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(
    () => ({
      ...state,
      openDrawer,
      closeDrawer,
      setProdDescriptionTab,
      toggleWritingReview,
    }),
    [state]
  );
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

export default UiContext;
