import Layout from "../components/Layout";
import React from "react";
import { getByte } from "../src/api";

const Content = props => {
  return (
    <Layout>
      <div>
        <h1>{props.byte.title}</h1>
        <img src={props.byte.image} />
        <p>This is the post content</p>
      </div>
    </Layout>
  );
};

export default function Post(props) {
  return <Content byte={props.byte} />;
}

Post.getInitialProps = async function(props) {
  const { id } = props.query;
  return await getByte(id);
};
