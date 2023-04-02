import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const increaseNumber = (count: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.INCREASE,
            count: count
        })
    }
}
export const reduceNumber = (count: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DECREASE,
            count: count
        })
    }
}
export const reset = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.RESET
        })
    }
}