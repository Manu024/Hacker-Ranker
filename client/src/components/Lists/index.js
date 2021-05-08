import React, { useEffect, useState } from "react";
import { ListContainer, ListHeader, ListHeaderItem } from "./ListsElements";
import List from "../List";
import axios from "axios";

const Lists = () => {
  const [Lists, setLists] = useState([]);

  useEffect(() => {
    axios
      .get("/top-rankers")
      .then((res) => {
        setLists(
          res.data.map((hacker, index) => {
            return (
              <List
                key={index}
                name={hacker.name}
                age={hacker.age}
                score={hacker.score}
                participations={hacker.participations}
                cleared={hacker.cleared}
                index={index}
              />
            );
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <ListContainer>
      <ListHeader>
        <ListHeaderItem>S.NO</ListHeaderItem>
        <ListHeaderItem>Name</ListHeaderItem>
        <ListHeaderItem>Profile</ListHeaderItem>
        <ListHeaderItem>Score</ListHeaderItem>
      </ListHeader>
      {Lists}
    </ListContainer>
  );
};

export default Lists;
