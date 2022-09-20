import Script from 'next/script';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GTM_ID}');
      `}
      </Script>
      <Head>
        <title>inatnun.me</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>{children}</main>
    </>
  );
}
