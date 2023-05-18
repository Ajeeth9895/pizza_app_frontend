import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from "./redux/store";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={store}>
    <App />
    <ToastContainer
      autoClose={2000}
    />
    </Provider>
  </>
);

