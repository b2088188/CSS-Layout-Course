import { Route, Switch } from 'react-router-dom';
import Practice1 from 'practices/Practice1';
import Practice2 from 'practices/Practice2';
import Practice3 from 'practices/Practice3';
import Practice4 from 'practices/Practice4';
import Practice5 from 'practices/Practice5';

const App = () => {
   return (
      <Switch>
         <Route path='/practice/1' component={Practice1} />
         <Route path='/practice/2' component={Practice2} />
         <Route path='/practice/3' component={Practice3} />
         <Route path='/practice/4' component={Practice4} />
         <Route path='/practice/5' component={Practice5} />
      </Switch>
   );
};

export default App;
