import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { NextPage } from 'next';
// import { IncomingMessage } from 'http';

interface Props {
  username?: string
}

const Login: NextPage<Props> = ({username = ""}) => {
  return (
    <Layout title="Login">
      <h1>Login to Odyssey CMS</h1>
      <div>
        <Link href="/about"> 
          <a>About</a>
        </Link>
      </div>
      <form method="post" action="/login">
        <label>
          Username: 
          <input name="username" defaultValue={username}/>
        </label>
        <button>Login</button>
      </form>
    </Layout>
  );
};

// interface Request extends IncomingMessage {
//   body: Object 
// }

// interface Context extends NextPageContext {
//   ctx: NextPageContext
// }

Login.getInitialProps = async ({ ctx }: any) => {
  const { req } = ctx;
  if (req && req.method === "POST") {
    return req.body;
  }
  return {};
};

export default Login;
