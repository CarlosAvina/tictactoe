import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { useRouter } from "next/router";

import Title from "../components/Title";
import Button from "../components/Button";

const Layout = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 150px;

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 10px
  }
`;

export default function Home() {
  const router = useRouter();

  function generateInvite(e) {
    const gameMode = e.currentTarget.id;
    const id = Math.random().toString(16).substr(2, 8);

    router.push(`/${id}?mode=${gameMode}`);
  }

  return (
    <div>
      <Head>
        <title>Tic-tac-toe</title>
      </Head>

      <Layout>
        <Title>Tic-tac-toe</Title>
        <div className="buttons">
          <Button id="local" onClick={generateInvite}>
            <h1>Play Local</h1>
          </Button>
          <Button id="online" onClick={generateInvite}>
            <h1>Play Online</h1>
          </Button>
        </div>
      </Layout>
    </div>
  );
}
