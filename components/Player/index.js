import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  background-color: white;
  border-radius: 15px;
`;

const Player = ({ username, Character }) => {
  return (
    <Wrapper>
      <Character />
      <b>{username}</b>
    </Wrapper>
  );
};

export default Player;
