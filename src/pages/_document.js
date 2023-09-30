import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
      <Html lang="en" prefix="og: https://ogp.me/ns#">
        <Head />
        <body className='body'>
          <Main />
          <NextScript />
        </body>
      </Html>
  )
}
