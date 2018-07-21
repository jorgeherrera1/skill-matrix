export default () => (
  <header>
    <h1 className="name">Jorge Herrera</h1>
    <h2 className="account">St. Jude</h2>
    <h5>Service Delivery Director</h5>
    <style jsx>{`
      header {
        height: 100px;
        padding: 15px;
        background: var(--surface-color);
        border-radius: 2px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      }

      .name {
        letter-spacing: 5px;
      }

      .account {
        display: inline-block;
        background-color: var(--grey);
        border-radius: 24px;
        padding: 0 12px;
      }
    `}
    </style>
  </header>
);
