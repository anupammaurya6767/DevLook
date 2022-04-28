import React from "react";
import Link from "../Components/Link";
import { GoLocation } from "react-icons/go";
import { RiLinksFill } from "react-icons/ri";
import { BsTwitter } from "react-icons/bs";
import { BsBuilding } from "react-icons/bs";
import { location, link, twitter, company } from "../src/data";

function Links() {
  return (
    <div className="links">
      <div className="link">
        <GoLocation />
        <Link value={location} />
      </div>
      <div className="link">
        <RiLinksFill />
        <Link value={link} />
      </div>
      <div className="link">
        <BsTwitter />
        <Link value={twitter} />
      </div>
      <div className="link">
        <BsBuilding />
        <Link value={company} />
      </div>
    </div>
  );
}

export default Links;
