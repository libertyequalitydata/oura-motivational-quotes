import React from "react";
import Footer from "../src/components/Footer/Footer";

export default {
  title: "Footer",
  component: Footer,
};



export const FooterStories = () => (
  <Footer
    data={[
      {summary_date: '2022-09-19', score: 87, rest: 426, non_wear: 313, cal_total: 2540},
      {summary_date: '2022-09-19', score: 87, rest: 426, non_wear: 313, cal_total: 2540},
      {summary_date: '2022-09-19', score: 87, rest: 426, non_wear: 313, cal_total: 2540},
      {summary_date: '2022-09-19', score: 87, rest: 426, non_wear: 313, cal_total: 2540},
    ]}
  />
);
