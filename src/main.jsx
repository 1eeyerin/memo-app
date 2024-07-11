import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './redux/store';
import GlobalStyles from './styles/globalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
);

//리액트 컴포넌트는 오직 하나의 태그만 반환한다
