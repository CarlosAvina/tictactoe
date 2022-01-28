import React from "react";
import Head from "next/head";
import Link from "next/link";
import faker from "@faker-js/faker";

import Game from "../components/Game";
import Button from "../components/Button";

import setInitialGameState from "../utils/setInitialGameState";
import getGameState from "../utils/getGameState";

export default function Playground({ shareLink, gameId }) {
  const [username, setUsername] = React.useState("");

  function share() {
    window.navigator.clipboard.writeText(shareLink);
  }

  React.useEffect(() => {
    const { username } = getGameState();

    if (!username) {
      const randomName = faker.internet.userName();
      setInitialGameState(randomName, gameId);
      setUsername(randomName);
    } else {
      setUsername(username);
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Tic-tac-toe</title>
      </Head>
      <div>
        <h1>Tic-tac-toe</h1>
        <nav>
          <Link href="/">
            <Button onClick={share}>Back</Button>
          </Link>
          <Button onClick={share}>Share</Button>
        </nav>
        <aside>
          <b>{username}</b>
        </aside>
      </div>
      <Game />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req, query } = context;

  const host = req.headers.host;
  const gameId = query.id;

  const shareLink = `${host}/${gameId}`;

  return {
    props: { shareLink, gameId },
  };
}
