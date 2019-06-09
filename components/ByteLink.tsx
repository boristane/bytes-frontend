import Link from "next/link";
import React from "react";

const dateLayout = {
  width: 120,
  display: "inline-block",
  textAlign: "right" as "right",
  marginRight: 40,
  color: "grey"
};

const titleLayout = {
  display: "inline-block"
};

export default function ByteLink(props) {
  const date = new Date(props.created);
  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return (
    <div className="byte-link">
      <div style={dateLayout}>
        <span>{date.toLocaleDateString("en-US", dateOptions)}</span>
      </div>
      <div style={titleLayout}>
        <Link href={`/post?id=${props.id}`} as={`/b/${props.id}`}>
          <a>{props.title}</a>
        </Link>
      </div>
      <style>
        {`
          .byte-link {
            height: 20px
          }
          `}
      </style>
    </div>
  );
}
