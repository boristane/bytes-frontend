import Link from "next/link";
import React from "react";

const linkStyle = {
  marginRight: 15
};

export default function Header() {
  return (
    <div className="header">
      <span style={linkStyle}>
        <Link href="/">
          <a>bytes</a>
        </Link>
        <span> </span>(<a href="https://github.com/boristane/bytes">src</a>)
      </span>
      <Link href="/about">
        <a style={linkStyle}>about</a>
      </Link>
      <style>
        {`
          .header {
            margin-bottom: 50px
          }
          `}
      </style>
    </div>
  );
}
