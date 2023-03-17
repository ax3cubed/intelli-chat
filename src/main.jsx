import React from 'react'
import ReactDOM from 'react-dom/client'
import createSagaMiddleware from 'redux-saga';
import App from './App'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import './index.scss';
import rootSaga from './store/sagas';
import rootReducer from './store/reducers';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
);

const store = createStore(
    rootReducer,
    enhancer
);

sagaMiddleware.run(rootSaga);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
)
