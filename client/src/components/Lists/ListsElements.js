import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  background: #000;
  color: #fff;
  margin-top: 12px;
  padding: 16px 28px;
  border-radius: 4px;
  list-style-type: none;
  word-spacing: 1px;
`;
export const ListHeaderItem = styled.li`
  color: #fff;
  text-transform: uppercase;
  font-size: 1.1rem;
`;
