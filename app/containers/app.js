import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from '../components/header/header';
import Nav from '../components/nav/nav';
import SkillsContainer from './skills-container';
import PeopleContainer from './people-container';
import PersonContainer from './person-container';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <Header />
          <Nav />
          <main className="mdl-layout__content">
            <Route path="/skills" component={SkillsContainer} />
            <Route path="/people" exact component={PeopleContainer} />
            <Route path="/people/:person" component={PersonContainer} />
          </main>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
