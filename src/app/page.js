import React from "react";
import Herosection from "@/app/components/Herosection";
import Head from "next/head";
export default function page() {
  return (
    <>
    <Head>
        <title>dFlix</title>
        <meta
          name="description"
          content="A netflix clone made with nextjs and tailwindcss"
        />
      </Head>
      <Herosection 
      title={"Welcome to Netflix"}
      imageUrl={"/home.svg"}
      />
    </>
  );
}
