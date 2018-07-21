import Page from '../layouts/page';
import MainContent from '../layouts/main-content';
import PersonHeader from '../components/person-header';
import LevelContainer from '../components/level-container';

export default () => (
  <Page>
    <PersonHeader />
    <MainContent>
      <LevelContainer />
    </MainContent>
  </Page>
);
