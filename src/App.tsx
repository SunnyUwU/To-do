import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Todo } from "./pages/Todo";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/todo" exact component={Todo}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;