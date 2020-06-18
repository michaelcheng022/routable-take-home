import React from 'react';
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
