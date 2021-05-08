import React, { useState } from "react";
import List from "../List";
import {
  AdminSearchContainer,
  AdminSearchHeading,
  AdminSearchIcon,
  AdminSearchInput,
  AdminSearchWrapper,
  AdminSearchForm,
} from "./AdminSearchElements";
import {
  ListContainer,
  ListHeader,
  ListHeaderItem,
} from "../Lists/ListsElements";
import axios from "axios";

const AdminSearch = () => {
  const [clicked, setClicked] = useState(false);
  const [hackerList, setHackerList] = useState();

  const toggleClick = () => {
    setClicked(true);
  };

  const getHackerhandler = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    axios
      .get(`hackers/${name}`)
      .then((res) => {
        const hacker = res.data;
        setHackerList(
          <List
            name={hacker.name}
            age={hacker.age}
            score={hacker.score}
            participations={hacker.participations}
            cleared={hacker.cleared}
            index={0}
          />
        );
        toggleClick();
      })
      .catch(() => {
        setHackerList(<h3>User not Found</h3>);
      });
  };

  return (
    <AdminSearchContainer>
      <AdminSearchWrapper>
        <AdminSearchHeading>Search for Hacker</AdminSearchHeading>
        <AdminSearchForm onSubmit={(e) => getHackerhandler(e)}>
          <AdminSearchInput type="text" placeholder="search by name" required />
          <button type="submit">
            <AdminSearchIcon />
          </button>
        </AdminSearchForm>
      </AdminSearchWrapper>
      {clicked && (
        <ListContainer>
          <ListHeader>
            <ListHeaderItem>S.NO</ListHeaderItem>
            <ListHeaderItem>Name</ListHeaderItem>
            <ListHeaderItem>Profile</ListHeaderItem>
            <ListHeaderItem>Score</ListHeaderItem>
          </ListHeader>
          {hackerList}
        </ListContainer>
      )}
    </AdminSearchContainer>
  );
};

export default AdminSearch;
