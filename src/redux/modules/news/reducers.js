import { LOAD_NEWS } from './actions';

const initialState = {
    news: [],
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOAD_NEWS:
            return {
                ...state,
                news: [...action.payload],
            };
        default:
            return state;
    }
}