import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const content = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));
  return <nav>{content}</nav>;
}

export default NavBar;
