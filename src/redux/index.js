import { combineReducers, createStore } from 'redux';
import news from './modules/news/reducers';

const reducers = combineReducers({ news });

const store = createStore(reducers);

export default store;
