import React from 'react';
import { connect } from 'react-redux';
import { addTask, deleteTask, editTask, toggleIsDone, toggleIsExceeded, updateId } from '../../redux/reducers/listReducer';
import ToDoList from './ToDoList';

const ToDoListContainer = (props) => {
    return (
        <div>
            <ToDoList tasksData={props.tasksData} addTask={props.addTask} toggleIsDone={props.toggleIsDone}
                deleteTask={props.deleteTask} updateId={props.updateId} toggleIsExceeded={props.toggleIsExceeded}
                editTask={props.editTask} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasksData: state.tasksData.tasksData
    }
}

export default connect(mapStateToProps,
    { addTask, toggleIsDone, deleteTask, updateId, toggleIsExceeded, editTask })(ToDoListContainer)