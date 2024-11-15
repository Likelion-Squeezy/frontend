import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// style
import styled from "styled-components";
import Account from "@assets/icon/icon-account--small.svg?react";
import Eezy from "@assets/icon/icon-eezy--small.svg?react";
import Search from "@assets/icon/icon-search--small.svg?react";
import Squeeze from "@assets/icon/icon-squeeze--small.svg?react";
import Titmetable from "@assets/icon/icon-timetable--small.svg?react";

export const NavCells = ({setNavOpen}) => {
  const [enterIndex, setEnterIndex] = useState(0);
  const navigate = useNavigate();
  const locate = useLocation();

  const handleMouseEnter = (index) => {
    setEnterIndex(index);
  };
  const handleMouseLeave = () => {
    setEnterIndex(0);
  };

  const handleOnClick = (path) => {
    if (locate.pathname.startsWith(path)) return;
    navigate(path);
    setEnterIndex(0);
    setNavOpen(false);
  };
  return (
    <>
      <NavCell
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleOnClick("/user")}
        style={{
          backgroundColor:
            enterIndex === 1 || locate.pathname.startsWith("/user")
              ? "#F0F0F0"
              : "",
        }}
      >
        <Titmetable
          width={16}
          height={16}
          fill={
            enterIndex === 1 || locate.pathname.startsWith("/user")
              ? "#1C1B1F"
              : "#808080"
          }
        />
        <div>
          <span
            style={{
              color:
                enterIndex === 1 || locate.pathname.startsWith("/user")
                  ? "#000000"
                  : "",
            }}
          >
            Your Squeezy
          </span>
        </div>
      </NavCell>
      <NavCell
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleOnClick("/squeeze")}
        style={{
          backgroundColor:
            enterIndex === 2 || locate.pathname.startsWith("/squeeze")
              ? "#F0F0F0"
              : "",
        }}
      >
        <Squeeze
          width={16}
          height={16}
          fill={
            enterIndex === 2 || locate.pathname.startsWith("/squeeze")
              ? "#1C1B1F"
              : "#808080"
          }
        />
        <div>
          <span
            style={{
              color:
                enterIndex === 2 || locate.pathname.startsWith("/squeeze")
                  ? "#000000"
                  : "",
            }}
          >
            squeeze
          </span>
          <span>categorize current tabs</span>
        </div>
      </NavCell>
      <NavCell
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleOnClick("/eezy")}
        style={{
          backgroundColor:
            enterIndex === 3 || locate.pathname.startsWith("/eezy")
              ? "#F0F0F0"
              : "",
        }}
      >
        <Eezy
          width={16}
          height={16}
          fill={
            enterIndex === 3 || locate.pathname.startsWith("/eezy")
              ? "#1C1B1F"
              : "#808080"
          }
        />
        <div>
          <span
            style={{
              color:
                enterIndex === 3 || locate.pathname.startsWith("/eezy")
                  ? "#000000"
                  : "",
            }}
          >
            eezy
          </span>
          <span>summarize this page</span>
        </div>
      </NavCell>
      <NavCell
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleOnClick("/search")}
        style={{
          backgroundColor:
            enterIndex === 4 || locate.pathname.startsWith("/search")
              ? "#F0F0F0"
              : "",
        }}
      >
        <Search
          width={16}
          height={16}
          fill={
            enterIndex === 4 || locate.pathname.startsWith("/search")
              ? "#1C1B1F"
              : "#808080"
          }
        />
        <div>
          <span
            style={{
              color:
                enterIndex === 4 || locate.pathname.startsWith("/search")
                  ? "#000000"
                  : "",
            }}
          >
            Search
          </span>
        </div>
      </NavCell>
      <NavCell
        onMouseEnter={() => handleMouseEnter(5)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleOnClick("/account")}
        style={{
          backgroundColor:
            enterIndex === 5 || locate.pathname.startsWith("/account")
              ? "#F0F0F0"
              : "",
        }}
      >
        <Account
          width={16}
          height={16}
          fill={
            enterIndex === 5 || locate.pathname.startsWith("/account")
              ? "#1C1B1F"
              : "#808080"
          }
        />
        <div>
          <span
            style={{
              color:
                enterIndex === 5 || locate.pathname.startsWith("/account")
                  ? "#000000"
                  : "",
            }}
          >
            account
          </span>
        </div>
      </NavCell>
    </>
  );
};

const NavCell = styled.div`
  height: 40px;
  border-radius: 10px;
  border: none;
  display: flex;
  padding: 6px;
  gap: 10px;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    & > span:last-child {
      ${(props) => props.theme.typography.subDescription};
      color: rgba(128, 128, 128, 0.6);
    }
    & > span:first-child {
      ${(props) => props.theme.typography.h3};
      font-weight: bold;
      color: #808080;
    }
  }
`;

