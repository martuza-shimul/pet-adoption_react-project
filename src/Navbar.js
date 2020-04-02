import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import colors from "./colors";

const Navbar = () => {
  const [padding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${colors.light};
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          &:hover {
            text-decoration: underline;
          }
        `}
        role="img"
        aria-label="logo"
      >
        🐕‍🦺
      </span>
    </header>
  );
};

export default Navbar;
