import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ItemForm from '../ItemForm/ItemForm';
import classes from './ToDoItem.module.css'

const ToDoItem = (props) => {
    let taskId = props.id;

    let [editMode, setEditMode] = useState(false);
    let [taskText, setTaskText] = useState(props.text);

    useEffect(() => {
        setTaskText(props.text)
    }, [props.text])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.editTask(taskId, taskText)
    }

    const onChangeText = (e) => {
        setTaskText(e.currentTarget.value)
    }

    const toggleIsDone = (taskId) => {
        props.toggleIsDone(taskId)
    }

    const deleteTask = (taskId) => {
        props.deleteTask(taskId);
        props.updateId();
        props.toggleIsExceeded(false)
    }

    return (
        <div className={`${classes.toDoItemWrapper} ${props.isDone ? classes.doneTask : ''}`}>
            <div className={classes.taskContent}>
                <ItemForm id={taskId} text={taskText} editTask={props.editTask}
                    onChangeText={onChangeText} deactivateEditMode={deactivateEditMode}
                    activateEditMode={activateEditMode} editMode={editMode}
                />
            </div>
            <div className={classes.toggleIsDoneButton}>
                <button disabled={editMode} onClick={() => toggleIsDone(taskId)}>{props.isDone ?
                    <span>Not done</span>
                    : <span>Done</span>}</button>
            </div>
            <div className={classes.deleteTaskButton}>
                <button onClick={() => deleteTask(taskId)}>Delete task</button>
            </div>
        </div>
    )
}

export default ToDoItem