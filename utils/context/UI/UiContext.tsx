import React, { useMemo, useCallback, useReducer, createContext } from "react";
import { InitialState, Action } from "./UiContext.types";
const initState: InitialState = {
  isLoading: false,
  isDrawerOpen: false,
  isWritingReview: false,
  prodDescriptionTab: "description",
  isModal: false,
  productId: null,
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
    //modal
    case "OPEN_MODAL":
      return { ...state, isModal: true, productId: action.payload };
    case "CLOSE_MODAL":
      return { ...state, isModal: false };
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
  //open product quickview modal
  const openProductModal = useCallback(
    (id: string) => {
      dispatch({ type: "OPEN_MODAL", payload: id });
    },
    [dispatch]
  );
  const closeModal = useCallback(() => {
    dispatch({ type: "CLOSE_MODAL" });
  }, [dispatch]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(
    () => ({
      ...state,
      openDrawer,
      closeDrawer,
      setProdDescriptionTab,
      toggleWritingReview,
      openProductModal,
      closeModal,
    }),
    [state]
  );
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

export default UiContext;
