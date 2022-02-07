import React from 'react';
import {Provider} from 'react-redux'
import proexeUserStore from './Redux/proexeuserliststore';
import Proexetaskapp from './proexetask';
import { GlobalStyle } from './styled component/components';

function App() {
  return <div>
    <Provider store={proexeUserStore}>
      <GlobalStyle/>
      <Proexetaskapp/>
    </Provider>
  </div>;
}

export default App;
