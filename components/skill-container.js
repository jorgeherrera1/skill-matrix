import Skill from './skill';
import CircularButton from '../components/ui/circular-button';

export default ({level}) => (
  <div className="skill-container">
    <div className="skill-level-bar">
      <h2 className="skill-level-name">{level}</h2>
      <CircularButton text="+" size="32px" />
    </div>
    <div className="skill-list">
      <Skill skill="Java" />
      <Skill skill="JavaScript" />
      <Skill skill="Oracle" />
      <Skill skill="React" />
      <Skill skill="Redux" />
      <Skill skill="NodeJS" />
      <Skill skill="AWS (Amazon Web Services)" />
      <Skill skill="MySQL" />
      <Skill skill="TypeScript" />
      <Skill skill="Express" />
      <Skill skill="Webpack" />
    </div>
    <style jsx>{`
      .skill-container {
        display: flex;
        flex-direction: column;
        background: var(--surface-color);
        width: 100%;
        border-radius: 2px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      }

      .skill-level-bar {
        display: grid;
        grid-template-columns: 1fr 48px;
        justify-items: start;
        align-items: center;
        background: var(--color-primary);
        color: white;
        height: 48px;
        min-height: 48px;
      }

      .skill-level-name {
        padding-left: 15px;
      }

      .skill-list {
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        align-content: flex-start;
        align-items: flex-start;
        justify-content: space-evenly;
      }
    `}</style>
  </div>
);
