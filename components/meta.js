import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      html {
        box-sizing: border-box;
      }
      
      *, *:before, *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
      }

      body {
        background: #000;
        font: 10px Arial;
        color: #fff;
      }
    `}
    </style>
  </div>
);
