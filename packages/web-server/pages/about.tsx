import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { NextPage } from 'next'

type Props = {
  id: string
}

const SectionLink: NextPage<Props> = (props) => (
  <li>
    <Link href="/sections/[id]" as={`/sections/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);


const AboutPage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
    <SectionLink id="hello-nextjs" />
    <SectionLink id="learn-nextjs" />
    <SectionLink id="deploy-nextjs" />
  </Layout>
)

export default AboutPage
