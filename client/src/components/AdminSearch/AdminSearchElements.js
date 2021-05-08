import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const AdminSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 24px 12px;
`;
export const AdminSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AdminSearchHeading = styled.h1`
  margin-top: 12px;
`;

export const AdminSearchForm = styled.form`
  position: relative;
  width: 55%;
  margin-top: 12px;
`;

export const AdminSearchInput = styled.input`
  width: 100%;
  padding: 16px 16px;
  white-space: nowrap;
  outline: none;
  border: none;
  border-radius: 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 100px 80px rgba(0, 0, 0, 0.12);
`;
export const AdminSearchIcon = styled(FaSearch)`
  position: absolute;
  right: 10%;
  top: 25%;
  width: 1.1rem;
  height: 1.2rem;
  color: rgba(0, 0, 0, 0.68);
  cursor: pointer;
  transition: all .2s ease-in-out;

  &:hover {
    color: #01bf71;
  }
`;
