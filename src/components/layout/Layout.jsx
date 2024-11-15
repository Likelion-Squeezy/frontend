import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
// img
import Logo from "../../assets/icon/icon-logo--text.svg?react";
import Menu from "../../assets/icon/icon-menu.svg?react";
// components
import { Nav } from "./Nav";
import { NavCells } from "./NavCells";

export const Layout = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <Container>
      <Header>
        <div style={{ marginTop: "9px" }}>
          <Logo />
        </div>
        <div ref={menuRef}>
          <div onClick={() => setIsNavOpen((prev) => !prev)}>
            <Menu />
          </div>
          {isNavOpen && <Nav><NavCells setNavOpen={setIsNavOpen}/></Nav>}
        </div>
      </Header>
      <main>{children}</main>
    </Container>
  );
};

const Container = styled.div`
  min-width: 360px;
  width: 100%;
  & > main {
    z-index: 0;
  }
`;
const Header = styled.header`
  display: flex;
  padding: 9px 12px;
  position: relative;
  justify-content: space-between;
`;
