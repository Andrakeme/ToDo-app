import React from 'react';
import { connect } from 'react-redux';
import { addTask, toggleIsExceeded } from '../../redux/reducers/listReducer';
import classes from './Form.module.css';
import TaskCreate from './TaskCreate';

const TaskCreateContainer = (props) => {
    return (
        <div className={classes.formWrapper}>
            <TaskCreate addTask={props.addTask} totalTasksCount={props.totalTasksCount}
                isTotalTasksCountExceeded={props.isTotalTasksCountExceeded} toggleIsExceeded={props.toggleIsExceeded} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        totalTasksCount: state.tasksData.totalTasksCount,
        isTotalTasksCountExceeded: state.tasksData.isTotalTasksCountExceeded
    }
}

export default connect(mapStateToProps, { addTask, toggleIsExceeded })(TaskCreateContainer)