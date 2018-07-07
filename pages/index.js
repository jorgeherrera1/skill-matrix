import Link from 'next/link';

const IndexPage = () => (
  <div>
    <header>
      <h1>Skill Matrix</h1>
    </header>
    <main>
      <Link href="/skill">
        <a>Skill</a>
      </Link>
    </main>
  </div>
);

export default IndexPage;
