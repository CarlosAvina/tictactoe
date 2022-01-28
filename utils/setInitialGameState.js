export default function setInitialGameState(username, gameId) {
  let gameState = JSON.parse(localStorage.getItem("gameState"));

  if (!gameState?.username) {
    gameState = { username };
  }

  const newGameState = JSON.stringify({ ...gameState, gameId });
  localStorage.setItem("gameState", newGameState);
}
