import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Events from './components/Events';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <Router>
        <div className='background'>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/events' component={Events} />
          </Switch>
        </div>
      </Router>
    );
  }
}
