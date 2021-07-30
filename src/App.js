import './App.css';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/productDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route path="/product/:productId" exact component={ProductDetail} />
            <Route>404 not found</Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
