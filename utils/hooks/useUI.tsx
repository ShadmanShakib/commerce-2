import { useContext } from "react";
import { UiContext } from "utils/context/UI";

export default function useUI() {
  const context = useContext(UiContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
}
