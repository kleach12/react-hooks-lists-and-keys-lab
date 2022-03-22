import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  //console.log(links)

  const linksArr = links.map((link) => <a key = {link} href = {"#" + link} > {link} </a>)
  //console.log(linksArr)
  return <nav>{linksArr}</nav>;
}

export default NavBar;
