import Head from "next/head";
import Game from "../components/Game";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tic-tac-toe</title>
      </Head>
      <h1>Tic-tac-toe</h1>
      <Game />
    </div>
  );
}
