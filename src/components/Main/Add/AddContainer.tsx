import React, {FC, useState} from 'react';
import Add from "./Add";
import {useDispatch} from "react-redux";
import {IAddContainerProps, IAddTasks, ITextFieldChange} from "./AddTypes";
import {addTaskActionCreator} from "../../../store/actions";

const AddContainer: FC<IAddContainerProps> = ({tasks}) => {

    const dispatch = useDispatch();

    const [textFieldValue, setTextFieldValue] = useState<string>('');

    const textFieldChange: ITextFieldChange = value => {
        setTextFieldValue(value)
    };

    const months = ["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."];

    const addTask: IAddTasks = text => {
        if (text !== '') {

            const newDate = new Date();
            const date = `${newDate.getDay()} ${months[newDate.getMonth()]}`;

            let k, newId;
            do {
                k = 0;
                newId = Math.floor(Math.random() * Math.floor(tasks.length + 1));
                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].id === newId) k++
                }
            } while (k !== 0);
            dispatch(addTaskActionCreator(newId, text, date));
            textFieldChange('');
        }
    };

    return (
        <Add
            textFieldValue={textFieldValue}
            textFieldChange={textFieldChange}
            addTask={addTask}
        />
    )
};

export default AddContainer;