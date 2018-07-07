import Link from 'next/link';
import Page from '../layouts/main';

export default ({children}) => (
  <Page>
    <Link href="/skill">
      <a>Skill</a>
    </Link>
  </Page>
);
