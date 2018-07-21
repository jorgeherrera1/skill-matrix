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
        margin: 2px 0;
      }

      .remove {
        border: 0;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        cursor: pointer;
        text-align: center;
        vertical-align: middle;
        padding: 0;
        margin: 0 0 0 10px;
        overflow: hidden;
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