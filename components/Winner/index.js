import Button from "../Button";

const winnerMessage = {
  1: "The winner is the player one",
  2: "The winner is the player two",
  3: "Tie",
};

const Winner = ({ winnerId, reset }) => {
  return (
    <div>
      <h1>{winnerMessage[winnerId]}</h1>
      <Button onClick={reset}>Reset</Button>
    </div>
  );
};

export default Winner;
