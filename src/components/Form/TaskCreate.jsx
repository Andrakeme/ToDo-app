import React from 'react';
import classes from './Form.module.css';
import { Field, Form } from 'react-final-form';
import { maxLengthCreator } from '../../validators/validators';

const maxLength20 = maxLengthCreator(20)

const TaskCreate = (props) => {

    const onSubmit = (formData, form) => {
        if (props.totalTasksCount < 5) {
            props.addTask(formData.taskText);
            form.reset()
        } else {
            props.toggleIsExceeded(true);
        }
    }

    return (
        <div className={classes.formWrapper}>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, pristine, submitting }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name={'taskText'} validate={maxLength20}>
                            {({ input, meta }) => (
                                <div className={classes.fieldWrapper}>
                                    <div className={classes.input}>
                                        <input {...input} autoComplete='off' type="textarea" maxLength='21'
                                            placeholder='Enter your new task text here' />
                                        {props.isTotalTasksCountExceeded ? <span className={classes.errorMessage}>
                                            Max total tasks count exceeded</span>
                                            : meta.error && meta.touched && <span className={classes.errorMessage}>{meta.error}</span>}
                                    </div>
                                    <div className={classes.button}>
                                        <button
                                            disabled={pristine || submitting || meta.error || props.isTotalTasksCountExceeded}
                                            type='submit'>
                                            {(props.isTotalTasksCountExceeded)
                                                ? <span>Max total tasks count exceeded</span>
                                                : 'Add task'}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Field>
                    </form>
                )
                }
            />
        </div>
    )
}

export default TaskCreate