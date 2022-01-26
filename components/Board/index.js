import styled from "styled-components";

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 90px);
  grid-template-rows: repeat(3, 90px);
`;

export default Board;
