import React from 'react';
import ToDoItem from './ToDoItem/ToDoItem';
import classes from './ToDoList.module.css'

const ToDoList = (props) => {

    let listElements = props.tasksData.map(t => <ToDoItem key={t.id} text={t.text} isDone={t.isDone} id={t.id}
        toggleIsDone={props.toggleIsDone} deleteTask={props.deleteTask}
        updateId={props.updateId} toggleIsExceeded={props.toggleIsExceeded} editTask={props.editTask} />)

    return (
        <div className={classes.toDoListWrapper}>
            {listElements.length !==0 ? listElements : <span>No tasks yet</span> }
        </div>
    )
}

export default ToDoList