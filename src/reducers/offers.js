import { FETCH, SEARCH } from 'actions/offers';

const INITIAL_STATE = {
    items: [],
    isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case `${FETCH}_PENDING`:
            return { ...state, isLoading: true };
        case `${FETCH}_FULFILLED`:
            return {
                ...state,
                items: [
                    ...state.items,
                    ...action.payload.results,
                ],
                isLoading: false,
            };

        case `${SEARCH}_PENDING`:
            return { ...state, isLoading: true };
        case `${SEARCH}_FULFILLED`:
            return {
                ...state,
                items: action.payload.results,
                isLoading: false,
            };

        default:
            return state;
    }
};
