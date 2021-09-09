import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/pokemon/:name" exact children={<Pokemon />}/>
      </Switch>
    </Router>
    
  );
}

export default App;