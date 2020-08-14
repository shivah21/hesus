import React from 'react';
import './App.css';
import { Header } from './header';
import { Section } from './section';
import { getData } from './API';
const data = getData();
export const RootContext = React.createContext(data);
function App() {
  return (
    <div className="App">
      <RootContext.Provider value={data}>
        <Header />
        <Section />
      </RootContext.Provider>
    </div>
  );
}

export default App;
