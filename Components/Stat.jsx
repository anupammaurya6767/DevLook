import React from "react";

function Stat(pros) {
  return (
    <div className="stat">
      <h1>{pros.head}</h1>
      <h3>{pros.value}</h3>
    </div>
  );
}

export default Stat;
