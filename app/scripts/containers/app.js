import React from 'react';
import {Link} from 'react-router-dom';

const App = () => (
  <div>
    <h1>App w/o/bootstrap</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/skills">Skills</Link></li>
    </ul>
  </div>
);

export default App;
