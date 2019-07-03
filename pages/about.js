import Link from "next/link"

import Layout from "../src/Layout"

const About = ()=>(
    <Layout>
        <p>This is a about page</p>
        <Link  href="/"><a>HOME</a></Link>
    </Layout>
)

export default About;