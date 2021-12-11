import './App.css';
// Importing component
import { Component } from 'react';
// importing Header, Footer, content classes
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Create } from './components/footer copy';
import { Content } from './components/content';
// Import bootstrap and Navbar elements
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from "react-bootstrap";
// Importing reat router dom v.5.3.0
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Component class which renders - App.js is the main component
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Container>
              <img src="https://media1.giphy.com/media/xT77Y1T0zY1gR5qe5O/giphy.gif?cid=790b7611a236c9a82babac13c098884476a1783d9899feba&rid=giphy.gif&ct=g" width="75px" height="75px"></img>
              <Navbar.Brand href="#home">Event Picture Book</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <img src="./images/book.gif" width="75px" height="75px"></img>
          <br />
          {/* Setting up a Switch to ensure when a url destination is accessed, it displays exactly that component  */}
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Header} exact />
            <Route path='/read' component={Footer} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
