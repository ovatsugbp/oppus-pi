import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import { Home } from './pages/Home';
import { Search } from './pages/Search';


import './App.scss'

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/pesquisa">
        <Search/>
      </Route>
    </Router>
  );
}

export default App;