export interface InitialState {
  isLoading: boolean;
  isDrawerOpen: boolean;
  isWritingReview: boolean;
  prodDescriptionTab: "description" | "reviews" | "returns";
}

export type Action =
  | {
      type: "OPEN_DRAWER" | "CLOSE_DRAWER";
    }
  | {
      type: "SET_PROD_DESCRIPTION_TAB";
      payload: "description" | "reviews" | "returns";
    }
  | {
      type: "TOGGLE_WRITING_REVIEW";
    };
