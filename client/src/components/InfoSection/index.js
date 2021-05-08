import React from 'react';
import List from '../Lists';
import {  InfoSectionContainer,InfoSectionDescription,InfoSectionH1} from "./InfoSectionElements";
import { connect } from "react-redux";

const InfoSection = ({isAuth}) => {
  return (
    <InfoSectionContainer>
      <InfoSectionH1>
        Ranking Details
      </InfoSectionH1>
      <InfoSectionDescription>
        #Here are the list of top 3 hackers based on percentage
      </InfoSectionDescription>
      {isAuth ? <List/> : <h3>Login to view</h3>}
    </InfoSectionContainer>
  )
}
const mapStateToProps = state => {
  return {
    isAuth: state.isAuth,
  }
};

export default connect(mapStateToProps)(InfoSection);
