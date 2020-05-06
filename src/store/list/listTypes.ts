import {ADD_TASK, DELETE_TASK, SAVE_TASK, SET_FILTER, SET_PERFORMED, SET_STATE, SET_TAG} from "./listConstants";

export interface ITask {
    id: number
    text: string
    isPerformed: boolean
    isTagged: boolean
    date: string
}
export interface IListState {
    tasks: ITask[]
    filter: string
}

//actions types:

export interface IAddTaskAction {
    type: typeof ADD_TASK,
    id: number,
    text: string,
    date: string
}

export interface IDeleteTaskAction {
    type: typeof DELETE_TASK,
    id: number
}

export interface ISetPerformedAction {
    type: typeof SET_PERFORMED,
    id: number
}

export interface ISaveTaskAction {
    type: typeof SAVE_TASK,
    id: number,
    text: string
}

export interface ISetStateAction {
    type: typeof SET_STATE,
    state: IListState
}

export interface ISetTagAction {
    type: typeof SET_TAG,
    id: number
}

export interface ISetFilterAction {
    type: typeof SET_FILTER,
    option: string
}

export type ListActionType = IAddTaskAction | IDeleteTaskAction | ISetPerformedAction | ISaveTaskAction | ISetStateAction
    | ISetTagAction | ISetFilterAction