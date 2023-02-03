import { useState } from 'react';

import { IState } from './types';
import ListDisplay from './components/ListDisplay';
import ListForm from './components/ListForm';
import './App.css';

const App = () => {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Madonna',
      age: new Date().getFullYear() - 1958,
      url: 'https://www.sheknows.com/wp-content/uploads/2021/08/iconic-madonna-photos.jpg?w=1440',
      note: 'like a virgin',
    },
  ]);

  return (
    <div className="App">
      <h1>ppl invited to my party</h1>
      <ListDisplay people={people} />
      <ListForm people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
