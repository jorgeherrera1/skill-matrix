export default ({text}) => (
  <button className="add-button">
    +
    <style jsx>{`
      .add-button {
        --button-size: 32px;
        --button-font-size: 24px;

        border-radius: 50%;
        font-size: var(--button-font-size);
        height: var(--button-size);
        margin: 0;
        min-width: var(--button-size);
        width: var(--button-size);
        padding: 0;
        overflow: hidden;
        background: var(--color-secondary-light);
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        border: none;
        line-height: normal;
        cursor: pointer;
      }
    `}
    </style>
  </button>
);