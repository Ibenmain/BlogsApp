'use client'
import React from "react";
// import { addBlock } from "../actions/handelAction";
import LandingPage from "./landing/page";
// import Image from "next/image";
// import { useEffect, useState } from "react";

export default function Home() {


  // const handleClick = () => {
  //   const resp = addBlock("issam", "benmaina");
  //   console.log("resp ", resp);
  // }

  return (

    <main>
      <LandingPage/>
      {/* <button onClick={handleClick}>
        buttonvg
      </button> */}
    </main>
  );
}
