import Page from '../layouts/main';
import PersonHeader from '../components/person-header';
import LevelContainer from '../components/level-container';

export default () => (
  <Page>
    <PersonHeader />
    <main>
      <LevelContainer />
    </main>
  </Page>
);
