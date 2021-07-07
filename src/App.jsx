import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CONTEXT
import { EventsProvider } from './context/EventsContext';

// COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import EventDetails from './components/Event/EventDetails';
import Loader from './components/Loader';

// PAGES
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Events from './pages/Events';

function App() {
  return (
    <EventsProvider>
      <div className="container">
        <Router>
          <Loader />
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/events' component={Events} />
            <Route path='/events/:id' component={EventDetails} />
            <Route path='*' component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </EventsProvider>
  );
}

export default App;
