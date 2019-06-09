import Layout from "../components/Layout";
import React, { useEffect, useState } from "react";
import { getByte, loadFile } from "../src/api";
import { Markdown } from "react-showdown";

const layoutStyle = {
  maxWidth: 650,
  margin: "auto"
};

const Content = props => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await loadFile(props.byte.body);
      setMarkdown(result.data);
    };

    fetchData();
  }, []);
  return (
    <Layout>
      <div style={layoutStyle}>
        <h1>{props.byte.title}</h1>
        <img src={props.byte.image} className="main-image" />
        <Markdown markup={markdown} />
      </div>
      <style>
        {`
          
          `}
      </style>
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
