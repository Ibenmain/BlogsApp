'use client'
import React from "react";
import { addBlock } from "../actions/handelAction";
import LandingPage from "./landing/page";
// import Image from "next/image";
// import { useEffect, useState } from "react";

export default function Home() {

  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
    
  // });

  const handleClick = () => {
    const resp = addBlock("oussama", "hamel");
    console.log(resp);
  }

  return (

    <main>
      <LandingPage/>
      {/* <button onClick={handleClick}>
        button
      </button> */}
    </main>
  );
}
