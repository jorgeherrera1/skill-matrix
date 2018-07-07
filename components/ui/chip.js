export default ({text}) => (
  <div className="chip">
    {text}
    <style jsx>{`
      .chip {
        display: inline-block;
        border: 1px solid red;
      }
    `}
    </style>
  </div>
);