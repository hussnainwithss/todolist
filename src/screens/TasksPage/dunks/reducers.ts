import { ADD_TASK } from "./action-types";

interface IState {
    tasks: string[],
};

const initialState: IState = { tasks: [] };

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        default:
            return state;
    }
}

export default reducer;