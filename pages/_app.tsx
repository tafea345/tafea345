import '../src/styles/main.css'
import Page from '../src/Layout'
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
        <Page>
          <Component {...pageProps} />
        </Page>
    )
  }
}

export default MyApp
