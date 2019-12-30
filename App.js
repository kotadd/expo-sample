import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDERXZ93Tj3uSWvn8NptTzYlv5je9kA6Uk",
      authDomain: "manager-31580.firebaseapp.com",
      databaseURL: "https://manager-31580.firebaseio.com",
      projectId: "manager-31580",
      storageBucket: "manager-31580.appspot.com",
      messagingSenderId: "1068913770528"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
