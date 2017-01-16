import { combineReducers, createStore } from 'redux';
import { AsyncStorage } from 'react-native';
import news from './modules/news/reducers';

const reducers = combineReducers({ news });

const store = createStore(reducers);

export default store;
