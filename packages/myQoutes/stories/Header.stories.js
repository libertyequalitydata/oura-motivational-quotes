import React from "react";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import Header from "../src/components/Header/Header";

export default {
  title: "Header",
  component: Header,
  decorators: [withKnobs],
};

export const HeaderStories = () => (
  <Header
    summary_date={text("date", "2020/13/2022")}
    userData={{
      name: {
        first: text("first name", "User"),
        last: text("last name", "Test"),
      },
      email: text("email", "userTesting@example.com"),
      picture: {
        large: text('url','https://randomuser.me/api/portraits/women/53.jpg')
      }
    }}
  />
);
