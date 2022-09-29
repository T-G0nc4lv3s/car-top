import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Sale from 'pages/Sale';
import Search from 'pages/Search';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/products">
        <Catalog />
      </Route>
      <Route path="/sales">
        <Sale />
      </Route>
      <Route path="/searches">
        <Search />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
