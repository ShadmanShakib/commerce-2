export interface InitialState {
  isLoading: boolean;
  isDrawerOpen: boolean;
}

export type Action = {
  type: "OPEN_DRAWER" | "CLOSE_DRAWER";
};
