import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global.js";
import Head from "next/head";
import { SSRProvider } from "@react-aria/ssr";


export default function Home() {
  return (
    <SSRProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Head>
          <title>Stijn Aa</title>
        </Head>
        <header>
          <h1>Hello world</h1>
        </header>
        <main>
        </main>
      </ThemeProvider>
    </SSRProvider>
  );
}
