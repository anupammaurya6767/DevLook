import React from "react";
import Stat from "../Components/Stat";
import { repo, followers, following } from "../src/data";

function Main() {
  return (
    <div className="main">
      <Stat head="Repo" value={repo} />
      <Stat head="Followers" value={followers} />
      <Stat head="Following" value={following} />
    </div>
  );
}

export default Main;
