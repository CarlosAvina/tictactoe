import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

import Game from "../components/Game";
import Button from "../components/Button";

const Title = styled.h1`
  color: white;
`;

export default function Playground({shareLink}) {

  function share() {
    window.navigator.clipboard.writeText(shareLink);
  }

  return (
    <div>
      <Head>
        <title>Tic-tac-toe</title>
      </Head>
      <div>
        <Title>Tic-tac-toe</Title>
        <nav>
          <Link href="/">
            <Button onClick={share}>Back</Button>
          </Link>
          <Button onClick={share}>Share</Button>
        </nav>
      </div>
      <Game />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req, query } = context;

  const host = req.headers.host;
  const sessionId = query.id;

  const shareLink = `${host}/${sessionId}`;

  return {
    props: { shareLink },
  };
}
