import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import './i18n';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './store';

// Screens
import Upcoming from './pages/Upcoming';
import All from './pages/All';
import Today from './pages/Today';
import Done from './pages/Done';
import Search from './pages/Search';
import Settings from './pages/Settings';

import { Header, Sidebar, LoaderBackend } from './components';

const { store, persistor } = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoaderBackend />
        <Router>
          <Redirect exact from="/today" to="today" />
          <Header />
          <div className="d-flex flex-direction-row">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Upcoming} />
              <Route exact path="/all" component={All} />
              <Route exact path="/today" component={Today} />
              <Route exact path="/done" component={Done} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/settings" component={Settings} />
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
