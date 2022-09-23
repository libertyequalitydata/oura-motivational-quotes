import React, { useState } from "react";
import styled from "styled-components";

import {
  HoursCalculator,
  AvarageCalculator,
} from "../../utils/HelperFunctions";

const Footer = (props) => {
  const { data } = props;
  let scoreGlobal = 0;
  let restGlobal = 0;
  let non_WearGlobal = 0;
  let calGlobal = 0;
  data.forEach((element) => {
    const { score, rest, non_wear, cal_total } = element;
    scoreGlobal += score;
    restGlobal += rest;
    non_WearGlobal += non_wear;
    calGlobal += cal_total;
  });
  const restAvarage = AvarageCalculator(restGlobal, data.length)
  const non_WearAvarage = AvarageCalculator(non_WearGlobal, data.length)
  
  const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    flex-grow: 1;
    position: relative;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-grow: 1;

      .dta_text {
        color: gray;
      }

      .dta {
        display: flex;
        flex-direction: row;
        column-gap: 2px;
        font-weight: bold;
        p {
          text-align: center;
          font-size: 0.9rem;
          flex-grow: 1;
        }

        small {
          text-align: center;
          font-size: 0.6rem;
          flex-grow: 1;
        }
      }
    }
  `;
  return (
    <>
      <FooterWrapper>
        <div>
          <div className="dta">
            <p>{AvarageCalculator(scoreGlobal,4)}</p>
            <small>unit</small>
          </div>
          <small className="dta_text">score</small>
        </div>
        <div>
          <div className="dta">
            <p>{HoursCalculator(restAvarage)}</p>
            <small>hrs</small>
          </div>
          <small className="dta_text">rest</small>
        </div>
        <div>
          <div className="dta">
            <p>{HoursCalculator(non_WearAvarage)}</p>
            <small>hrs</small>
          </div>
          <small className="dta_text">non wear</small>
        </div>
        <div>
          <div className="dta">
            <p>{AvarageCalculator(calGlobal, 4)}</p>
            <small>cal</small>
          </div>
          <small className="dta_text">calories</small>
        </div>
      </FooterWrapper>
    </>
  );
};

export default Footer;
