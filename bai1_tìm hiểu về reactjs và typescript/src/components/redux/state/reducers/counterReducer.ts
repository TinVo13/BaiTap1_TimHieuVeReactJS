import { ActionType } from "../action-tyes";
import { Action } from "../actions";
const initialState = 0;

const reducer = (state: number = initialState,action: Action) => {
    switch(action.type){
        case ActionType.INCREASE:
            return state + action.count;
        case ActionType.DECREASE:
            return state - action.count;
        case ActionType.RESET:
            return 0;
        default:
            return state;
    }
}
export default reducer;