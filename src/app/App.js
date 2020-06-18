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


export default App
// export default connect(mapStateToProps)(App)
>>>>>>> origin/develop
