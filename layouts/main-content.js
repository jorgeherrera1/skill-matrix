export default ({children}) => (
  <main>
    {children}
    <style jsx>{`
      main {
        margin-top: 20px;
      }
    `}
    </style>
  </main>
);