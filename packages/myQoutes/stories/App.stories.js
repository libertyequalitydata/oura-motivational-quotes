import React from "react";
import MyQoutes from "../src/MyQoutes";

export default { title: "MyQoutes" };

export const app = () => {
  return <MyQoutes stage="dev" />;
};
app.story = {
  name: "MyQoutes",
};
