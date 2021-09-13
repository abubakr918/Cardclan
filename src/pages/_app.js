import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" type="image/png" href="/helmet.webp" />
        <link rel="icon" href="/favicon.ico" />
        <script defer dangerouslySetInnerHTML={{
          __html: `
          !function(g,s,q,r,d){r = g[r] = g[r] || function () {
            (r.q = r.q || []).push(
              arguments)
          };
          d=s.createElement(q);q=s.getElementsByTagName(q)[0];
            d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
            insertBefore(d,q)}(window,document,'script','_gs');
            _gs('GSN-582067-R');
        ` }} />
        <script defer dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TN7F94M');
        ` }} />
        <script defer dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '450718129498361');
          fbq('track', 'PageView');
          `}} />
      </Head>
      <noscript><img height="1" width="1" style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=450718129498361&ev=PageView&noscript=1"
      /></noscript>

      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TN7F94M" height="0" width="0" style={{ display: "none", visibility: " hidden" }}>
        </iframe>
      </noscript>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;