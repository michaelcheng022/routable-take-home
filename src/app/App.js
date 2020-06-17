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
import Issues from 'components/Issues'
import 'styles/styles.scss'

function App() {
  // const { active } = store.getState()
  return (
    <div className="App">
     <Repos />
     <Issues />
    </div>
  );
}

<<<<<<< HEAD
export default App;
>>>>>>> ff37e53... config redux store && refactor list components
=======

export default App
// export default connect(mapStateToProps)(App)
>>>>>>> 7e9c1a9... configure styles for components
