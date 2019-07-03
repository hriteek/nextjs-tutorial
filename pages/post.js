// import {withRouter} from "next/router"

// import Layout from "../src/Layout"

// const Page = withRouter(props=>(
//     <Layout>
//         <h1>{props.router.query.title}</h1>
//         <p>This is the blog post content.</p>
//     </Layout>
// ))

// export default Page

import { withRouter } from 'next/router';
import Layout from '../src/Layout';

const Content =withRouter( props => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
));

const Page = withRouter(props => (
  <Layout>
    <Content />
  </Layout>
));

export default Page;
