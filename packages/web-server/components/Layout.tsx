import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{' '}|{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}|{' '}
        <Link href="/login">
          <a>Login</a>
        </Link>{' '}|{' '}
        <Link href="/settings">
          <a>Settings</a>
        </Link>{' '}|{' '}
        <Link href="/cms-section?cmsSectionName=about" as="/about.html">
          <a>about.html</a>
        </Link>{' '}|{' '}
        <Link href="/?path=one" as="/one">
          <a>/one</a>
        </Link>{' '}|{' '}
        <Link href="/?path=sub/one" as="/sub/one">
          <a>/sub/one</a>
        </Link>{' '}|{' '}
        <Link href="/?path=two" as="/two">
          <a>/two</a>
        </Link>{' '}|{' '}
        <Link href="/initial-props">
          <a>With Initial Props</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
)

export default Layout
