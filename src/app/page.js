import React from "react";
import Herosection from "@/app/components/Herosection";
export default function page() {
  return (
    <>
      <Herosection 
      title={"Welcome to Netflix"}
      imageUrl={"/home.svg"}
      />
    </>
  );
}
