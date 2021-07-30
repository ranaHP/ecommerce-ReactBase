import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/reducers/rootReducers';
import "./style.scss";
import MainView from './views/mainView';

function App() {
  return (
    <Provider store={store}>
       <MainView/>
    </Provider>
  );
}

export default App;
