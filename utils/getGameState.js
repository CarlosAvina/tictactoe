export default function getGameState() {
  const { username, gameId } = JSON.parse(localStorage.getItem("gameState"));
  return { username, gameId };
}
