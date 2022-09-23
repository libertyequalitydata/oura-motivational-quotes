import React, { useState, useEffect } from "react";
import { usePrifina, Op } from "@prifina/hooks";
import Oura from "@prifina/oura";
import styled from "styled-components";

import { Container } from "./components/Container";
import Header from "./components/Header/Header";
import Qoutes from "./components/Qoutes/Qoutes";
import Footer from "./components/Footer/Footer";
// unique appID for the widget....
const appID = "5iEHz6gTz8QoyfXydUUgzV";

const asyncFalseData = [
  "summary_date,score,rest,non_wear,cal_total",
  "2022-09-19, 87, 426, 313, 2540",
  "2022-09-20, 71, 400, 210, 2300",
  "2022-09-21, 75, 480, 390, 2140",
  "2022-09-22, 87, 450, 300, 2640",
]

// api request links
const USER_URL = "https://randomuser.me/api/";

const MyQoutes = (props) => {
  const { onUpdate, Prifina, API, registerHooks } = usePrifina();

  // React State Variables
  const [asyncData, setAsyncData] = useState([]);
  const [user, setUser] = useState({});

  const stage = "dev";

  // Current date function
  const dateGenerator = () => {
    const date = new Date();
    const ISO = date.toISOString();
    const dateNow = ISO.split("T")[0];
    return dateNow;
  };

  const processAsyncData = (data) => {

    let filterData = data;
    const keys = filterData[0].split(",")

    console.log("array of keys", keys)

    filterData.shift();
    filterData = filterData.map((dataLine) => dataLine.split(","))
    const chunkSize = 5;
    const dataChunks = [];

    for (let i = 0; i< filterData.length; i++){
      const chunk = filterData.slice(i, i + chunkSize);
      dataChunks.push(chunk);
    }
    const result = [];
    dataChunks.forEach((dataChunk) => {
      result.push({
        [keys[0]]: dataChunk[0][0],
        [keys[1]]: Number(dataChunk[0][1]),
        [keys[2]]: Number(dataChunk[0][2]),
        [keys[3]]: Number(dataChunk[0][3]),
        [keys[4]]: Number(dataChunk[0][4]),
      })
    })

    setAsyncData(result);
  };

  console.log("Final processed async data", asyncData)


  const dataUpdate = async (payload) => {
    console.log("UPDATE ", payload);
    if (
      payload.hasOwnProperty("data") &&
      payload.data.hasOwnProperty("content")
    ) {
      // process async data
      if (
        payload.data.dataconnector === "Oura/queryActivitySummariesAsync" &&
        payload.data.content.length > 1
      ) {
        processAsyncData(payload.data.content);
      }
      console.log("PAYLOAD DATA", payload);
    }
  };

  // Async Request

  useEffect(async () => {
    try {

      // Random user Request
      const request = await fetch(`${USER_URL}`);
      const data = await request.json();
      setUser(data.results[0]);

      // Prifina Hook implementation
      onUpdate(appID, dataUpdate);
      registerHooks(appID, [Oura]);

      // date data filter
      let d = new Date();
      console.log('current date',d.getDate())
      const dd = d.setDate(d.getDate() -3);
      const dateStr = new Date(dd).toISOString().split("T")[0];

      console.log(dateStr)
      const asyncFilter = {
        ["s3::date"]: {
          [Op.gte]: dateStr,
        },
      };

      // Fetching async data from prifina data conectors
      const asyncResult = await API[appID].Oura.queryActivitySummariesAsync({
        filter: asyncFilter,
        fields: "summary_date,score,rest,non_wear,cal_total",
      });

      console.log("Prifina async data", asyncResult);

      if(stage === 'dev') {
        processAsyncData(asyncFalseData)
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  // console.log("processed display data", displayData);
  // console.log("processed data", processedData);

  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    border-radius: 10px;
  `;
  return (
    <Container variant="small" style={{ border: "0.8px solid #ee5522" }}>
      <Wrapper>
        <Header summary_date={dateGenerator()} userData={user} />
        <Qoutes data={asyncData}/>
        <Footer data={asyncData}/>
      </Wrapper>
    </Container>
  );
};

MyQoutes.displayName = "MyQoutes";

export default MyQoutes;
