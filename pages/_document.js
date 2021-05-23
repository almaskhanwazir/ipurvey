import Document, { Html, Head, Main, NextScript } from "next/document";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import React, { Component } from "react";
class MyDocument extends Document {
  setGoogleTags() {
    return {
      __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-147955896-1');
        `,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" />
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" />
          <link
            href="/static/vendor/bootstrap-icons/bootstrap-icons.css"
            rel="stylesheet"
          />
          <link href="/static/css/style.css" rel="stylesheet"></link>
          <script src="static/js/main.js"></script>
          <React.Fragment>
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          </React.Fragment>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
