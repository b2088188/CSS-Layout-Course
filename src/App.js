import { Route, Switch } from 'react-router-dom';
import Practice1 from 'practices/Practice1';
import Practice2 from 'practices/Practice2';
import Practice3 from 'practices/Practice3';
import Practice4 from 'practices/Practice4';
import Practice5 from 'practices/Practice5';
import Practice6 from 'practices/Practice6';
import Practice7 from 'practices/Practice7';
import Practice8 from 'practices/Practice8';
import Practice9 from 'practices/Practice9';

const App = () => {
   return (
      <Switch>
         <Route path='/practice/1' component={Practice1} />
         <Route path='/practice/2' component={Practice2} />
         <Route path='/practice/3' component={Practice3} />
         <Route path='/practice/4' component={Practice4} />
         <Route path='/practice/5' component={Practice5} />
         <Route path='/practice/6' component={Practice6} />
         <Route path='/practice/7' component={Practice7} />
         <Route path='/practice/8' component={Practice8} />
         <Route path='/practice/9' component={Practice9} />
      </Switch>
   );
};

export default App;
