import React, { useState } from "react";

function Forms() {
  const [name, setname] = useState("anupammaurya6767");
  function eventhandle(e) {
    setname(e.target.value);
  }
  return (
    <input
      type="text"
      placeholder="Dev Username"
      name="username"
      className="form"
      value={name}
      onChange={eventhandle}
    />
  );
}

export default Forms;
