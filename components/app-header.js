import Link from 'next/link';

export default () => (
  <header>
    <h1>Skill Matrix</h1>
    <Link href='/'><a>Home</a></Link>
    <Link href='/skill'><a>Skills</a></Link>
    <Link href='/person'><a>People</a></Link>
    <style jsx>{`
      header {
        height: 50px;
        background-color: var(--color-primary-dark);
      }
    `}
    </style>
  </header>
);
