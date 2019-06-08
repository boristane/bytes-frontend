import Layout from "../components/Layout";
import ByteLink from "../components/ByteLink";
import React from "react";
import { getByteList } from "../src/api";

export default function Index(props) {
  return (
    <Layout>
      <h1>Bytes</h1>
      <ul>
        {props.bytes.map(byte => {
          return (
            <li key={byte.id.toString()}>
              <ByteLink {...byte} />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

Index.getInitialProps = async function() {
  return await getByteList(1);
};
