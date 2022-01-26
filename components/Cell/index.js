import styled from "styled-components";

const Cell = styled.button`
  --grid-border: 3px solid black;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  cursor: pointer;

  /* border */
  &:nth-child(3),
  &:nth-child(6),
  &:nth-child(9) {
    border-right: var(--grid-border);
  }

  &:nth-child(7),
  &:nth-child(8),
  &:nth-child(9) {
    border-bottom: var(--grid-border);
  }

  border-left: var(--grid-border);
  border-top: var(--grid-border);
  border-bottom: none;
  border-right: none;
`;

export default Cell;
