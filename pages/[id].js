import React from "react";
import Head from "next/head";
import Link from "next/link";

import styled from "styled-components";
import faker from "@faker-js/faker";

import Game from "../components/Game";
import Button from "../components/Button";
import Player from "../components/Player";
import { X, Circle } from "../icons";

import setInitialGameState from "../utils/setInitialGameState";
import getGameState from "../utils/getGameState";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  .title {
    grid-column: 1 / -1;
    text-align: center;
  }

  aside {
    grid-column: -2 / -1;
    margin-right: 50px;
  }

  .game-board {
    grid-column: 3 / -3;
  }
`;

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
      <Grid>
        <h1 className="title">Tic-tac-toe</h1>
        <aside>
          <Button onClick={share}>Share</Button>
          <h2>Players</h2>
          <Player Character={X} username={username} />
        </aside>
        <Game className="game-board" />
      </Grid>
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
