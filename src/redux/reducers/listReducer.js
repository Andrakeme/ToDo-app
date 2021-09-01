const ADD_TASK = 'ADD_TASK';
const TOGGLE_IS_DONE = 'TOGGLE_IS_DONE';
const TOGGLE_IS_TOTAL_COUNT_EXCEEDED = 'TOGGLE_IS_TOTAL_COUNT_EXCEEDED';
const DELETE_TASK = 'DELETE_TASK';
const UPDATE_ID = 'UPDATE_ID';
const EDIT_TASK = 'EDIT_TASK'

export const addTask = (taskText) => ({ type: ADD_TASK, taskText });
export const toggleIsDone = (taskId) => ({ type: TOGGLE_IS_DONE, taskId });
export const deleteTask = (taskId) => ({ type: DELETE_TASK, taskId });
export const updateId = () => ({ type: UPDATE_ID });
export const toggleIsExceeded = (isExceeded) => ({ type: TOGGLE_IS_TOTAL_COUNT_EXCEEDED, isExceeded });
export const editTask = (taskId, newTaskText) => ({ type: EDIT_TASK, newTaskText, taskId });

let initialState = {
    tasksData: [
        {
            text: 'Task text',
            isDone: false,
            id: 1
        }
    ],
    totalTasksCount: 1,
    isTotalTasksCountExceeded: false
}

const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let newTask = {
                text: action.taskText,
                isDone: false,
                id: state.tasksData.length + 1
            }
            return {
                ...state,
                tasksData: [...state.tasksData, newTask],
                totalTasksCount: state.totalTasksCount + 1
            }
        case TOGGLE_IS_DONE:
            return {
                ...state,
                tasksData: state.tasksData.map(t => {
                    if (t.id === action.taskId) {
                        return { ...t, isDone: !t.isDone }
                    }
                    return t
                })
            }
        case DELETE_TASK:
            return {
                ...state,
                tasksData: state.tasksData.filter(t => t.id !== action.taskId),
                totalTasksCount: state.totalTasksCount - 1
            }
        case UPDATE_ID:
            return {
                ...state,
                tasksData: state.tasksData.map(t => {
                    return {
                        ...t, id: state.tasksData.indexOf(t) + 1
                    }
                })
            }
        case TOGGLE_IS_TOTAL_COUNT_EXCEEDED:
            return {
                ...state,
                isTotalTasksCountExceeded: action.isExceeded
            }
        case EDIT_TASK:
            return {
                ...state,
                tasksData: state.tasksData.map(t => {
                    if (t.id === action.taskId) {
                        return { ...t, text: action.newTaskText, isDone: false }
                    }
                    return t
                })
            }
        default: return state;
    }
}

export default listReducer