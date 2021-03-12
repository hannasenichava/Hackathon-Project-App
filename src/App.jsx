import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Map from "./Components/Map";

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/map' component={Map} />
        </Switch>
        <hr />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
