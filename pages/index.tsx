import Link from "next/link";
import Layout from "../components/Layout";
import axios from "axios";
import constants from "../constants";
import React from "react";

const { url } = constants;

const PostLink = props => {
  return (
    <li>
      <Link href={`/post?title=${props.title}`} as={`/p/${props.id}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

export default function Index(props) {
  return (
    <Layout>
      <h1>Bytes</h1>
      <ul>
        {props.bytes.map(byte => {
          return (
            <li key={byte.id}>
              <Link as={`/p/${byte.id}`} href={`/post/id=${byte.id}`}>
                <a>{byte.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

Index.getInitialProps = async function() {
  const res = await axios.get(`${url}/byte/list/?page=1`);
  const data = res.data;
  return data;
};
