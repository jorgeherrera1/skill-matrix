export default ({text, size}) => (
  <button className="circular-button">
    <p className="text">{text}</p>
    <style jsx>{`
      .circular-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background: var(--color-secondary-light);
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        margin: 0;
        padding: 0;
        height: ${size};
        min-width: ${size};
        width: ${size};
      }
      .text {
        font-size: calc(${size}/1.5);
        line-height: ${size};
        text-align: center;
        margin: 0;
        padding: 0;
      }
    `}
    </style>
  </button>
);
