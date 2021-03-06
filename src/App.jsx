import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Map from "./Components/Map";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/map' component={Map} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
        </Switch>
        <hr />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
