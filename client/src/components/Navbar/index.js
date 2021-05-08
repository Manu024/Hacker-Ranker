import React from "react";
import { FaBars } from "react-icons/fa";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarLogo,
  NavbarTextWrapper,
  NavbarTextLink,
  NavbarBtnLink,
  MobileIcon,
  NavbarText
} from "./NavbarElements";
import { connect } from "react-redux";

const Navbar = ({ toggleClick, isAuth, username, onLogout }) => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLogo>HackerRanker</NavbarLogo>
        <MobileIcon>
          <FaBars onClick={toggleClick} />
        </MobileIcon>
        {isAuth ? (
          <NavbarTextWrapper>
            <NavbarText onClick={onLogout}>Welcome {username}</NavbarText>
          </NavbarTextWrapper>
        ) : (
          <NavbarTextWrapper>
            <NavbarTextLink to="/signup">SignUp</NavbarTextLink>
            <NavbarTextLink to="admin-login">Admin Login</NavbarTextLink>
            <NavbarBtnLink to="/signin">User Login</NavbarBtnLink>
          </NavbarTextWrapper>
        )}
      </NavbarWrapper>
    </NavbarContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.userName,
    isAuth: state.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch({type: "USER_LOGOUT"}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
