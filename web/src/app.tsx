import React from 'react';
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {AppRouter} from "./router";
import {BrowserRouter as Router} from "react-router-dom";

const App: React.FC = () => {
  return <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Router>
        <AppRouter />
      </Router>
    </PersistGate>
  </Provider>;
};

export default App;