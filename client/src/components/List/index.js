import React from "react";
import {
  ListItemDescHeading,
  ListItemDescName,
  ListItemDescription,
  ListItemDescriptionDetails,
  ListItemDescrptionWrapper,
  ListItemDetails,
  ListItemSummary,
  ListWrapper,
  ListWrapperItem,
  ProfileIcon
} from "./ListElement";

const List = ({name, score, index, age, participations, cleared}) => {
  return (
    <ListItemDetails>
      <ListItemSummary>
        <ListWrapper>
          <ListWrapperItem>{index + 1}</ListWrapperItem>
          <ListWrapperItem>{name}</ListWrapperItem>
          <ListWrapperItem>
            <ProfileIcon />
          </ListWrapperItem>
          <ListWrapperItem>{score}%</ListWrapperItem>
        </ListWrapper>
      </ListItemSummary>
      <ListItemDescription>
        <ListItemDescrptionWrapper>
          <ListItemDescHeading>Hacker Info</ListItemDescHeading>
          <ListItemDescriptionDetails>
            <ListItemDescName>Name:</ListItemDescName>
            <ListItemDescName>{name}</ListItemDescName>
          </ListItemDescriptionDetails>
          <ListItemDescriptionDetails>
            <ListItemDescName>Age:</ListItemDescName>
            <ListItemDescName>{age}</ListItemDescName>
          </ListItemDescriptionDetails>
          <ListItemDescriptionDetails>
            <ListItemDescName>Score:</ListItemDescName>
            <ListItemDescName>{score}</ListItemDescName>
          </ListItemDescriptionDetails>
          <ListItemDescriptionDetails>
            <ListItemDescName>Participations:</ListItemDescName>
            <ListItemDescName>{participations}</ListItemDescName>
          </ListItemDescriptionDetails>
          <ListItemDescriptionDetails>
            <ListItemDescName>Cleared Contests:</ListItemDescName>
            <ListItemDescName>{cleared}</ListItemDescName>
          </ListItemDescriptionDetails>
        </ListItemDescrptionWrapper>
      </ListItemDescription>
    </ListItemDetails>
  );
};

export default List;
