import { Provider } from 'react-redux';
import './App.css';
import Header from './pages/Header.js';
import { store } from './actions/redux/configureStore';


function App() {
  return (
    <Provider store={store}>
      <Header/>
    </Provider>

    // <Content/>
    )
}

export default App;
