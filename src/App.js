import logo from './logo.svg';
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import RouterCmp from './Route/Route';

function App() {
  return (
    <Provider store={store}>
      <RouterCmp />
    </Provider>
  );
}

export default App;
