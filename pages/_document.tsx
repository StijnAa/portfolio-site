/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import React from "react";

function MyDocument(props) {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;700&family=Work+Sans:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                />
                {props.styles}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

export async function getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            ),
        };
    } finally {
        sheet.seal();
    }
}

MyDocument.getInitialProps = getInitialProps;

export default MyDocument;
