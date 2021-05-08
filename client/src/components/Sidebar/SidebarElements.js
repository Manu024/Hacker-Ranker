import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.div`
  display: flex;
  background: #000;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const SidebarCloseIcon = styled.div`
  font-size: 2rem;
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  outline: none;
  cursor: pointer;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 80px);
  text-align: center;
  list-style-type: none;
  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(2, 60px);
  }
`;

export const SidebarTextLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0 8px;
  transition: all 0.2s ease-in-out;
  padding: 10px 22px;

  &:hover {
    color: #01bf71;
  }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarBtnLink = styled(Link)`
  background: #01bf71;
  color: #000;
  padding: 12px 54px;
  white-space: nowrap;
  font-size: 1.3rem;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 50px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #fff;
    color: #000;
  }
`;
