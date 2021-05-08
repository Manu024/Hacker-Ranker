import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  align-items: center;
  position: sticky;
  justify-content: center;
  top: 0;
  font-size: 1rem;
  @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
  height: 80px;
  margin: 0 auto;
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavbarTextWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 0 12px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavbarTextLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active,
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #01bf71;
  }
`;

export const NavbarText = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #01bf71;
  }
`;

export const NavbarBtnLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px 22px;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  background: #fff;
  color: #000;
  border: none;
  border-radius: 50px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01bf71;
    color: #000;
  }
`;
