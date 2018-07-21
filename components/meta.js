import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400');

      :root {
        --color-primary: #1a237e;
        --color-primary-light: #534bae;
        --color-primary-dark: #000051;

        --color-secondary: #424242;
        --color-secondary-light: #6d6d6d;
        --color-secondary-dark: #1b1b1b;

        --text-color-primary: #ffffff;
        --text-color-secondary: #ffffff;

        --background-color: var(--color-secondary-dark);
        --surface-color: var(--color-secondary);
      }

      html, body {
        height: 100%;
        font-size: 14px;
        box-sizing: border-box;
        background: var(--background-color);
        font-family: 'Montserrat', sans-serif;
      }
      
      *, *:before, *:after {
        box-sizing: inherit;
      }

      body {
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
