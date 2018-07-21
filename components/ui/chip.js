export default ({text}) => (
  <div className="chip">
    <span>{text}</span>
    <button type="button" className="remove"></button>
    <style jsx>{`
      .chip {
        --chip-height: 24px;

        display: inline-block;
        background-color: var(--color-primary);
        color: #fff;
        border-radius: calc(var(--chip-height) / 2);
        padding: 0 12px;
        height: var(--chip-height);
        line-height: var(--chip-height);
        cursor: pointer;
      }

      .remove {
        display: inline-block;
        font-size: 13px;
        border: 0;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        margin: 4px -8px 0 8px;
        cursor: pointer;
      }

      .remove:after {
        content: 'X';
      }

      .remove:hover {
        background-color: red;
      }
    `}
    </style>
  </div>
);