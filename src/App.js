import './App.css';
// Importing component
import { Component } from 'react';
// importing Header, Footer, content, read, create classes
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import { Read } from './components/read';
import { Create } from './components/create';
import { Error } from './components/error';
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
              {/* Image linked from my github */}
              <img src="https://raw.githubusercontent.com/DavidMulhern/DataRep_Project/main/src/images/book.gif" width="75px" height="75px"></img>
              <Navbar.Brand href="#home">Event Picture Book</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <br />
          {/* Setting up a Switch to ensure when a url destination is accessed, it displays exactly that component using routing*/}
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/read' component={Read} exact />
            <Route path='/error' component={Error} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
