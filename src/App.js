import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'
import { reducer } from './reducers';
import {Provider} from 'react-redux'
import Home from './pages/Home';
import AppRouter from './router/AppRouter';

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
     
    </Provider>
  );
}

export default App;
