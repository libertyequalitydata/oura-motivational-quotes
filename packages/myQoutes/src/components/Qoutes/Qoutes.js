import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

//Helpers Functions

import { AvarageCalculator } from "../../utils/HelperFunctions";
const Qoutes = (props) => {
  const { data } = props;
  const [qoutes, setQoutes] = useState({});

  const requestQoutes = async (categorie) => {
    const request = await fetch(
      `https://api.api-ninjas.com/v1/quotes?category=${categorie}`,
      {
        headers: {
          "X-Api-Key": "+j4RJ4BhcP9Xl6rFXrhGLQ==sjjL1haSVIXcqWrp",
        },
      }
    );
    const data = await request.json();
    setQoutes(data[0]);
  };

  useEffect(() => {
    const asyncFn = async () => {
      const dataSize = data.length;
      let globalScore = 0;
      let globalRest = 0;

      if (data) {
        data.forEach((element) => {
          const { score, rest } = element;

          globalScore += score;
          globalRest += rest;
        });
        const scoreAvarage = AvarageCalculator(globalScore, dataSize);
        const restAvarage = AvarageCalculator(globalRest, dataSize);
        if (scoreAvarage < 71 || restAvarage < 420) {
          requestQoutes("change");
        } else {
          requestQoutes("fitness");
        }
      }
    };
    asyncFn();
  }, [data]);

  const QoutesWrapper = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgba(255, 242, 200, 0.3);
    padding: 0.4rem 0.8rem;
    border-bottom: 2px solid #ddd;
    p {
      height: max-content;
      text-align: center;
      color: #fff;
      background: #ee5522;
      -webkit-box-shadow: 4px 6px 10px -1px rgba(0, 0, 0, 0.55);
      -moz-box-shadow: 4px 6px 10px -1px rgba(0, 0, 0, 0.55);
      box-shadow: 4px 6px 10px -1px rgba(0, 0, 0, 0.55);
      padding: 0.3rem;
      font-size: 0.6rem;
      border-radius: 10px;
      font-weight: 400;
    }
  `;
  return (
    <QoutesWrapper>
      <p>
        "{qoutes.quote}" <small>{qoutes.author}</small>
      </p>
    </QoutesWrapper>
  );
};

export default Qoutes;
