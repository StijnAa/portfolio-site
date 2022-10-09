import PageOut from "../components/transitions/pageOut.transition";
import { AnimatePresence } from "framer-motion";
import Nav from "../components/navModal.component";
import { useState } from "react";
import { SSRProvider } from "@react-aria/ssr";
import { ThemeProvider } from "styled-components";
import MenuButton from "../components/menuButton.component";
import GlobalStyles from "../styles/global";
import { hidden, auto } from "../styles/theme";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";

function App({ Component, pageProps }) {
  const [displayNav, setNavState] = useState(false);
  const handleMenuButtonPress = () => {
    setNav();
  };
  const [themeState, setThemeState] = useState(auto);

  const router = useRouter();

  const setNav = () => {
    setNavState(!displayNav);
    setThemeState(!displayNav ? hidden : auto);
  };

  useEffect(() => {
    if (displayNav) {
      setNav();
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
