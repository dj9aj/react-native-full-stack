import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ListView from './components/ListView';
import DetailView from './components/DetailView';
import { createStackNavigator } from 'react-navigation';

class App extends Component {
   
   render() {
      const MainNavigator = createStackNavigator({
         List: { screen: ListView },
         Detail: { screen: DetailView }
      });
      const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
      return (
         <Provider store={store}>
            <MainNavigator />
         </Provider>
      )
   }   
}

export default App;

