import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Content = withRouter(props => {
  return (
    <Layout>
      <div>
        <h1>{props.router.query.title}</h1>
        <p>This is the post content</p>
      </div>
    </Layout>
  );
});

export default function Post() {
  return <Content />;
}
