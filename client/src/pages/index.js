import React, { useState } from "react";
import AdminSearch from "../components/AdminSearch";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { connect } from "react-redux";

const Home = ({isAuth}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar toggleClick={toggleClick} />
      <Sidebar isOpen={isOpen} toggleClick={toggleClick} />
      <InfoSection />
      {isAuth && <AdminSearch />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth,
  };
};

export default connect(mapStateToProps)(Home);
