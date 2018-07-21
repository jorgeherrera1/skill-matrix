import Page from '../layouts/page'
import MainContent from '../layouts/main-content';
import LevelContainer from '../components/level-container';

export default () => (
  <Page>
    <header>
      <h1>JavaScript</h1>
    </header>
    <MainContent>
      <LevelContainer />
    </MainContent>
  </Page>
);
