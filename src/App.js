import { Route, Switch } from 'react-router-dom';
import Practice1 from 'practices/Practice1';
import Practice2 from 'practices/Practice2';

const App = () => {
   return (
      <Switch>
         <Route path='/practice/1' component={Practice1} />
         <Route path='/practice/2' component={Practice2} />
      </Switch>
   );
};

export default App;
