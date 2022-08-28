export interface InitialState {
  isLoading: boolean;
  isDrawerOpen: boolean;
  isWritingReview: boolean;
  prodDescriptionTab: "description" | "reviews" | "returns";
  isModal: boolean;
  productId: string | null;
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
    }
  | {
      type: "OPEN_MODAL";
      payload: string;
    }
  | {
      type: "CLOSE_MODAL";
    };
