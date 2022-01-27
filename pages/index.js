import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Button from "../components/Button";

export default function Home() {
  const router = useRouter();

  function generateInvite() {
    const id = Math.random().toString(16).substr(2, 8);
    router.push(`/${id}`);
  }

  return (
    <div>
      <Head>
        <title>Tic-tac-toe</title>
      </Head>

      <Button onClick={generateInvite}>Play</Button>
    </div>
  );
}
