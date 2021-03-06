import {Dispatch, SetStateAction} from "react";
import {IMessage} from "../MainTypes";
import {ITask} from "../../../store/list/types";

export interface ISetActiveRow {
    (id: number | null): void
}

export interface IConvertDate {
    (date: string): string
}

export interface IListContainerProps {
    setOpenMessage: Dispatch<SetStateAction<IMessage>>
    tasks: Array<ITask>
    pageNumber: number
    pageSize: number
    filter: string
    initialized: boolean
    sortBy: string
}

export interface IListProps extends IListContainerProps {
    tasks: Array<ITask>
    editModeIndex: number | null
    setEditModeIndex: Dispatch<SetStateAction<number | null>>
    activeRowIndex: number | null
    setActiveRow: ISetActiveRow
    leftPortionPageNumber: number
    rightPortionPageNumber: number
    convertDate: IConvertDate
}
