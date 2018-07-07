import Page from '../layouts/main';

export default () => (
  <Page>
    <header>
      <h1>JavaScript</h1>
    </header>
    <main>
      <div className="people-container">
        <div>
          juniors
        </div>
        <div>
          intermediates
        </div>
        <div>
          seniors
        </div>
      </div>
    </main>
    <style jsx>{`
      .people-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
      }
    `}</style>
  </Page>
);
