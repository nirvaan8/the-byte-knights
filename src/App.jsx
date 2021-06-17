import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';

// PAGES
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
