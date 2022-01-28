import React from "react";

import Board from "../Board";
import Cell from "../Cell";
import Winner from "../Winner";

import { Wrapper } from "./styles";
import { X, Circle } from "../../icons";

const initialStatus = [0, 0, 0, 0, 0, 0, 0, 0, 0];

const possibleWins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const Game = ({ className }) => {
  const [turn, setTurn] = React.useState(1);
  const [moves, setMoves] = React.useState(initialStatus);
  const [winner, setWinner] = React.useState();

  function handleCellClick(event) {
    if (!winner) {
      const { id } = event.target;

      const newMoves = [...moves];
      newMoves.splice(id, 1, turn);
      setMoves(newMoves);

      const newTurn = turn === 1 ? 2 : 1;
      setTurn(newTurn);

      isGameOver(newMoves);
    }
  }

  function isGameOver(newMoves) {
    possibleWins.forEach((posWin) => {
      const firstNum = newMoves[posWin[0] - 1];
      const secondNum = newMoves[posWin[1] - 1];
      const thirdNum = newMoves[posWin[2] - 1];

      if (firstNum && secondNum && thirdNum) {
        if (firstNum === secondNum && secondNum === thirdNum) {
          setWinner(turn);
        }
      }
    });

    const isTie = newMoves.every((move) => move !== 0);
    if (isTie) setWinner(3);
  }

  function resetGame() {
    setTurn(1);
    setMoves(initialStatus);
    setWinner();
  }

  return (
    <Wrapper className={className}>
      <Board>
        {moves.map((move, index) => {
          const Player = move === 1 ? X : move === 2 ? Circle : null;
          return (
            <Cell id={index} key={index} onClick={handleCellClick}>
              {Player ? <Player /> : null}
            </Cell>
          );
        })}
      </Board>
      {winner && <Winner winnerId={winner} reset={resetGame} />}
    </Wrapper>
  );
};

export default Game;
