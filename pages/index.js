import Link from "next/link";
import Layout from "../components/Layout";
import axios from "axios";

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
        {props.bytes.map(show => {
          return (
            <li key={show.id}>
              <Link as={`/p/${show.id}`} href={`/post/id=${show.id}`}>
                <a>{show.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

Index.getInitialProps = async function() {
  const res = await axios.get("http://localhost:80/byte/list/?page=2");
  const data = res.data;
  return data;
};
