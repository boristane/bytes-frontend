import Header from "./Header";
import React from "react";

const layoutStyle = {
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 50,
  paddingRight: 50
};

export default function Layout(props) {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
      <style>
        {`
        * {
          font: 13px Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;
        }
        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: rgb(253, 101, 101);
        }

        a:hover {
          color: white;
          background: rgb(253, 101, 101)
        }
      `}
      </style>
    </div>
  );
}
