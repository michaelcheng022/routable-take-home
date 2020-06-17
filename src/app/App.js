import React from 'react';
<<<<<<< HEAD
import Repos from 'components/Repos/Repos'
import Issues from 'components/Issues/Issues'
import 'styles/styles.scss'

const App = () => {
  return (
    <div className="App">
      <Repos />
      <Issues />
    </div>
  )
}

export default App
=======
import Repos from 'components/Repos'
import './App.css';
import 'styles/styles.scss'
function App() {
  return (
    <div className="App">
      {'hello world'}
     <Repos />
    </div>
  );
}

export default App;
>>>>>>> ff37e53... config redux store && refactor list components
