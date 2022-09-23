import React from "react";
import styled from "styled-components";

const Header = (props) => {
  const { summary_date, userData } = props;
  let img = userData.picture;
  let userName = userData.name;
  img = { ...img };
  userName = { ...userName };
  const NavContainer = styled.section`
    display: flex;
    justify-content: space-evenly;
    padding: 0.5rem;
    border-top-left-radius: 9px;
    border-top-right-radius: 9px;
    background-color: #ee5522;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23d23d09' fill-opacity='0.6'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");

    .userPicture {
      width: 65px;
      height: 65px;
      margin-top: 5px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 90%;
        height: 90%;
        border-radius: 50%;
      }
    }

    .userInfo {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      p,
      small {
        text-align: right;
        color: #fff;
      }

      p:nth-child(1) {
        font-size: 1.1rem;
      }

      small {
        font-size: 0.7rem;
      }
    }
  `;

  return (
    <NavContainer>
      <div className="userPicture">
        <img src={img["large"]}></img>
      </div>
      <div className="userInfo">
        <p>{summary_date}</p>
        <p>
          {userName.first} {userName.last}
        </p>
        <small>{userData.email}</small>
      </div>
    </NavContainer>
  );
};

export default Header;
