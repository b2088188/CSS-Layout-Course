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
import Practice10 from 'practices/Practice10';
import Practice11 from 'practices/Practice11';
import Practice12 from 'practices/Practice12';
import Practice13 from 'practices/Practice13';
import Practice14 from 'practices/Practice14';
import Practice15 from 'practices/Practice15';
import Practice16 from 'practices/Practice16';
import Practice17 from 'practices/Practice17';
import Practice18 from 'practices/Practice18';
import Practice19 from 'practices/Practice19';
import Practice20 from 'practices/Practice20';
import Practice21 from 'practices/Practice21';
import Practice22 from 'practices/Practice22';
import Practice23 from 'practices/Practice23';

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
         <Route path='/practice/10' component={Practice10} />
         <Route path='/practice/11' component={Practice11} />
         <Route path='/practice/12' component={Practice12} />
         <Route path='/practice/13' component={Practice13} />
         <Route path='/practice/14' component={Practice14} />
         <Route path='/practice/15' component={Practice15} />
         <Route path='/practice/16' component={Practice16} />
         <Route path='/practice/17' component={Practice17} />
         <Route path='/practice/18' component={Practice18} />
         <Route path='/practice/19' component={Practice19} />
         <Route path='/practice/20' component={Practice20} />
         <Route path='/practice/21' component={Practice21} />
         <Route path='/practice/22' component={Practice22} />
         <Route path='/practice/23' component={Practice23} />
      </Switch>
   );
};

export default App;
