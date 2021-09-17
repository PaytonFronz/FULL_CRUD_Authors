import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllAuthors from './views/AllAuthors';
import NewAuthor from './views/NewAuthor';
import SingleAuthor from './views/SingleAuthor';
import EditAuthor from './views/EditAuthor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path="/authors/create">
            <NewAuthor/>
          </Route>

          <Route exact path="/">
            <AllAuthors />
          </Route>

          <Route exact path="/authors/:_id">
            <SingleAuthor />
          </Route>

          <Route exact path='/authors/:_id/update'>
            <EditAuthor />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
