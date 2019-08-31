import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage, NextPageContext } from 'next';

type Props = {
  typeOfWindow: string,
  host: string,
  rest: Array<string>,
  cmsSectionName: string
}

const CmsSection: NextPage<Props> = ({cmsSectionName, host, typeOfWindow, rest}) => {
  return (
    <Layout title="CMS Section | Next.js + TypeScript Example">
      <h1>CMS Section here: {cmsSectionName}</h1>
      <div>
        typeOfWindow: { typeOfWindow }
      </div>
      <div>
        host: {JSON.stringify(host)}
      </div>
      <div>
        rest: {JSON.stringify(rest)}
      </div>
    </Layout>
  )
}

interface Context extends NextPageContext {
  ctx: NextPageContext
}

CmsSection.getInitialProps = async ({ ctx }: Context) => {
  const { req, query, ...rest } = ctx;
  return {
    typeOfWindow: (typeof window),
    host: (req && req.headers.host) ? req.headers.host: location.host,
    rest: Object.keys(rest),
    cmsSectionName: (typeof query.cmsSectionName === 'string') ? query.cmsSectionName: ''
  }
};


export default CmsSection;