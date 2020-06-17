import React from 'react';
import Repos from 'components/Repos'
import Issues from 'components/Issues'
import './App.css';
import 'styles/styles.scss'

function App() {
  return (
    <div className="App">
      {'hello world'}
     <Repos />
     <Issues />
    </div>
  );
}

export default App;
