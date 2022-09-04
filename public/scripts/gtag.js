import Script from "next/script";

function Gtag() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZX6S7CMG1J"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-ZX6S7CMG1J');
        `}
      </Script>
    </>
  );
}

export default Gtag;
