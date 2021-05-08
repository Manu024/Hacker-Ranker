import styled from "styled-components";
import { IoPersonCircle } from "react-icons/io5";

export const ListItemDetails = styled.details``;
export const ListItemSummary = styled.summary`
  list-style-type: none;

  &:marker {
    display: none;
  }
`;
export const ListItemDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin-top: 12px;
  padding: 12px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #01bf71;
  }
`;

export const ListWrapperItem = styled.li`
  font-weight: bold;
  align-items: flex-start;
  padding: 12px;
  width: 90px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProfileIcon = styled(IoPersonCircle)`
  width: 28px;
  height: 28px;
  padding-top: 0;
`;

export const ListItemDescrptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ListItemDescHeading = styled.h1`
  font-size: 1.5rem;
  align-self: center;
  margin-top: 16px;

  @media screen and (max-width: 768px) {
    margin-top: 8px;
  }
`;

export const ListItemDescriptionDetails = styled.div`
  display: flex;
  padding: 10px;
  align-self: flex-start;
  justify-content: flex-start;
  align-items: center;
`;

export const ListItemDescName = styled.span`
  font-size: 1rem;
  padding: 8px 12px;
`;
