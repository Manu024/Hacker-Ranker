import React from "react";
import {
  SidebarMenu,
  SidebarBtnLink,
  SidebarBtnWrap,
  SidebarCloseIcon,
  SidebarContainer,
  SidebarTextLink,
  SidebarWrapper,
  CloseIcon,
} from "./SidebarElements";

const Sidebar = ({isOpen, toggleClick}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleClick}>
      <SidebarCloseIcon >
        <CloseIcon onClick={toggleClick}/>
      </SidebarCloseIcon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarTextLink onClick={toggleClick} to="/signup">SignUp</SidebarTextLink>
          <SidebarTextLink onClick={toggleClick} to="/signin">Admin Login</SidebarTextLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarBtnLink onClick={toggleClick} to="signin">User Login</SidebarBtnLink>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
