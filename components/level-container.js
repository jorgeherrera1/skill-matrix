export default () => (
  <div className="level-container">
    <div>jr</div>
    <div>int</div>
    <div>sr</div>
    <style jsx>{`
      .level-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        justify-items: start;
      }
    `}</style>
  </div>
);
