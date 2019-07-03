import Link from 'next/link';

import Layout from '../src/Layout';

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <p>Blog App</p>
    <PostLink id="hello-nextjs" title="Hello Next.js"/>
	<PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
	<PostLink id="deploy-nextjs" title="Deploy app with Zeit"/>
  </Layout>
);

export default Index;
