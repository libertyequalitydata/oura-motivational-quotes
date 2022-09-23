import styled from "styled-components";
import { variant } from "styled-system";

export const Container = styled("div")(
  {
    boxShadow: 0,
    borderRadius: 10,
    display: 'flex',
    margin: '20px auto'
  },
  variant({
    variants: {
      small: {
        height: 300,
        width: 300,
      },
      medium: {
        height: 616,
        width: 616,
      },
      mediumVertical: {
        height: 616,
        width: 300,
      },
      mediumHorizontal: {
        height: 300,
        width: 616,
      },
    },
  })
);
