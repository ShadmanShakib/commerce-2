import type { NextPage } from "next";
import Head from "next/head";
import {
  Hero,
  Featured,
  Categories,
  Newsletter,
  Collection,
  Feature,
} from "components/home";

import React from "react";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="">
      <Head>
        <title>Commerce-II | E-commerce template build by Shadman Shakib</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Categories />
      <Featured />
      <Feature />
      <Collection />
      <Newsletter />
    </div>
  );
};

export default Home;
