import Page from '../layouts/main';
import Skill from '../components/skill';

export default () => (
  <Page>
    <header>
      <h1>Jorge Herrera</h1>
    </header>
    <main>
      <div className="skills-container">
        <div>
          <Skill skill="Oracle Forms" />
          <Skill skill="Amazon Web Services (AWS)" />
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
      .skills-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        justify-items: start;
      }
    `}</style>
  </Page>
);
