import React from 'react';
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
