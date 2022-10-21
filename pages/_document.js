import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
 
  render() {
    return (
      <Html lang="en">
        <Head>
          <script src="https://kit.fontawesome.com/d96d2bdca1.js" crossorigin="anonymous"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}