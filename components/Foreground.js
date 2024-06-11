"use client";
import React, { useRef } from "react";
import Card from "./Card";


const Foreground = () => {

  const ref = useRef();

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem hjvsda hjvsdc hjavsu ijhai ",
      filesize: ".9mb",
      close: true,
      tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem iklsdfv kjdviak pqireujbfv adipisicing.",
      filesize: ".9mb",
      close: true,
      tagDetails: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-5 flex-wrap p-5">
      {/* <Card /> */}
      {data?.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
