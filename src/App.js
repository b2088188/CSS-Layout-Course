import { Route, Switch } from 'react-router-dom';
import Practice1 from 'practices/Practice1';

const App = () => {
   return (
      <Switch>
         <Route path='/practice/1' component={Practice1} />
      </Switch>
   );
};

export default App;
