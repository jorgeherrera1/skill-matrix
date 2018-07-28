import CircularButton from './circular-button';

export default ({text}) => (
  <div className="chip">
    {text}
    <span className="remove-button">
      <CircularButton text="X" size="16px" />
    </span>
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

      .remove-button {
        padding-left: 10px;
        float: right;
      }
    `}
    </style>
  </div>
);