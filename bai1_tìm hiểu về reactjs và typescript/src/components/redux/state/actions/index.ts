import { ActionType } from "../action-types"
interface IncreaseAction{
    type: ActionType.INCREASE,
    count: number
}
interface ReduceAction{
    type: ActionType.DECREASE,
    count: number
}
interface ResetAction{
    type: ActionType.RESET
}

export type Action = IncreaseAction | ReduceAction | ResetAction