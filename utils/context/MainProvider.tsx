import React from "react";
import { UiProvider } from "./UI/UiContext";
export default function MainProvider({ children }: any) {
  return (
    <>
      <UiProvider>{children}</UiProvider>
    </>
  );
}
