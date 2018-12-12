// import React from 'react';
// import { Provider } from 'react-redux';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
// import store from '../store/store';
// import { ROOT } from '../configs/routeNames';
// import Routes from './Routes';
// import '../styles/App.css';

// const history = createHistory();

// const AppRoot = () => (
//   <Provider store={store} history={history}>
//     <Router>
//       <Switch>
//         <Route path={ROOT} component={Routes} /> // ROOT = '/'
//       </Switch>
//     </Router>
//   </Provider>
// );

// export default AppRoot;

import React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  </div>
);
export default App;
