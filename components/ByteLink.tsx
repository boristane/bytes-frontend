import Link from "next/link";
import React from "react";

export default function ByteLink(props) {
  return (
    <Link href={`/post?id=${props.id}`} as={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  );
}
