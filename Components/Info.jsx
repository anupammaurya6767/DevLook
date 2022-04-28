import React from "react";
import { name, username, doj } from "../src/data";

function Info() {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{username}</h3>
      <h3>{doj}</h3>
    </div>
  );
}

export default Info;
