import SkillContainer from './skill-container';

export default () => (
  <div className="level-container">
    <SkillContainer level="Junior" />
    <SkillContainer level="Intermediate" />
    <SkillContainer level="Senior" />
    <style jsx>{`
      .level-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        justify-items: start;
        height: calc(100vh - 200px);
      }
    `}</style>
  </div>
);
