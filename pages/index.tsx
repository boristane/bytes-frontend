import Layout from "../components/Layout";
import ByteLink from "../components/ByteLink";
import React, { useEffect, useState } from "react";
import { getByteList } from "../src/api";
import PageSelector from "../components/PageSelector";

export default function Index(props) {
  return (
    <Layout>
      <ul>
        {props.bytes.map(byte => {
          return (
            <li key={byte.id.toString()}>
              <ByteLink {...byte} />
            </li>
          );
        })}
      </ul>
      <PageSelector currentPage={props.page} />
    </Layout>
  );
}

Index.getInitialProps = async function(props) {
  let { page } = props.query;
  page = page ? page : 1;
  return await getByteList(page);
};
