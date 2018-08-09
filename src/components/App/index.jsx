import React from 'react';

import Route from '../Route';
import Switch from '../Switch';
import Panel from '../Panel';

import Index from '../../pages/index';
import Contacts from '../../pages/contacts';
import About from '../../pages/about';

const App = () => (
  <div>
    <Panel />

    <Switch>
      <Route path='/'  component={<Index />}/>
      <Route path='/contacts'  component={<Contacts />}/>
      <Route path='/about'  component={<About />}/>
    </Switch>
  </div>
);

export default App;