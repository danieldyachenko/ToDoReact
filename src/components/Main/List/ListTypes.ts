import {ITask} from "../../../store/types";
import {Dispatch, SetStateAction} from "react";
import {IMessage} from "../MainTypes";

export interface IConvertDate {
    (date: string): string
}

export interface IListContainerProps {
    setOpenMessage: Dispatch<SetStateAction<IMessage>>
    tasks: Array<ITask>
    pageNumber: number
    pageSize: number
    filter: string
}

export interface IListProps extends IListContainerProps {
    tasks: Array<ITask>
    editModeIndex: number | null
    setEditModeIndex: Dispatch<SetStateAction<number | null>>
    activeRowIndex: number | null
    setActiveRowIndex: Dispatch<SetStateAction<number | null>>
    leftPortionPageNumber: number
    rightPortionPageNumber: number
    convertDate: IConvertDate
}
