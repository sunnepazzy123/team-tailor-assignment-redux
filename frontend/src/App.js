
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import HomeScreen from './screens/HomeScreen';
import WatchedScreen from './screens/WatchedScreen';
import DocScreen from "./screens/DocScreen"
import AddScreen from "./screens/AddScreen"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {Container} from "react-bootstrap"

function App() {
  return (
    <Router>
      <Header />
      <div className="App py-3">
      <Container>
      <Route path="/" component={HomeScreen} exact />
      <Route path="/watched" component={WatchedScreen} exact />
      <Route path="/documentation" component={DocScreen} exact /> 
      <Route path="/add" component={AddScreen} exact /> 
      </Container> 
      </div>
      <Footer />
    </Router>
   
  );
}

export default App;
