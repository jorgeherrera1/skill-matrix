import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      :root {
        --color-primary: #016bb5;
        --color-primary-light: #5699e8;
        --color-primary-dark: #004185;

        --color-secondary: #848484;
        --color-secondary-light: #b4b4b4;
        --color-secondary-dark: #575757;

        --text-color-primary: #000000;
        --text-color-secondary: #ffffff;

        --background-color: var(--color-secondary-dark);
        --surface-color: var(--color-secondary);
      }

      html, body {
        height: 100%;
        box-sizing: border-box;
        background: var(--background-color);
      }
      
      *, *:before, *:after {
        box-sizing: inherit;
      }

      body {
        font: 10px Arial;
        color: var(--text-color-primary);
        margin: 0;
        padding: 0;
      }

      h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
        margin: 0;
        padding: 0;
      }
    `}
    </style>
  </div>
);
