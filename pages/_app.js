import PageOut from "../components/transitions/pageOut.transition";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/navModal.component";
import { useState } from "react";
import { SSRProvider } from "@react-aria/ssr";
import { ThemeProvider } from "styled-components";
import MenuButton from "../components/menuButton.component";
import GlobalStyles from "../styles/global";
import { theme, theme2 } from "../styles/theme";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

function App({ Component, pageProps }) {
  const [displayNav, setNav] = useState(false);
  const handleMenuButtonPress = () => {
    setNav(!displayNav);
  };
  const [themeState, setThemeState] = useState(theme2);

  const router = useRouter();

  useEffect(() => {
    if (displayNav) {
      setNav(!displayNav);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <>
      <SSRProvider>
        <ThemeProvider theme={themeState}>
          <GlobalStyles theme={themeState} />
          <Head>
            <title>Stijn Aa</title>
          </Head>
          <AnimatePresence initial={true}>
            {displayNav && <Nav onPress={handleMenuButtonPress} />}
          </AnimatePresence>
          <header>
            <MenuButton onPress={handleMenuButtonPress} />
          </header>
          <PageOut>
            <Component {...pageProps} />
          </PageOut>
        </ThemeProvider>
      </SSRProvider>
    </>
  );
}

export default App;
