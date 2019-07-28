import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Card} from 'react-bootstrap'
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Error } from './components/Error';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import styled from 'styled-components';

const Styles = styled.div`
    .card-footer {
        background-color: #222;
    }
`;


class App extends Component{

  render(){

    return(
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route component={Error} />
            </Switch>
          </Layout>
        </Router>
        <Styles>
        <Card.Footer className="text-center"><font  size="5" color="white">©Norwell Seelan Sigwebela</font></Card.Footer>
        </Styles>
      </React.Fragment>
    );
  }



};

export default App;
