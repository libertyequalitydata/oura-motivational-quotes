import React from "react";
import { PrifinaProvider, PrifinaContext } from "@prifina/hooks";
import MyQoutes from "./MyQoutes";

// this is only for local webpack server test  => yarn start
export const LocalComponent = (props) => {
  return (
    <PrifinaProvider stage={"dev"} Context={PrifinaContext}>
      <MyQoutes {...props} />
    </PrifinaProvider>
  );
};
