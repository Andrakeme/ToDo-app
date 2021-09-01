import React from 'react';
import { Field, Form } from 'react-final-form';
import { maxLengthCreator, requiered } from '../../../validators/validators';
import classes from '../ToDoItem/ToDoItem.module.css'

const maxLength20 = maxLengthCreator(20)

const ItemForm = (props) => {

    const onSubmit = () => {
        props.deactivateEditMode()
    }

    const composeValidators = (...validators) => (value) =>
        validators.reduce((error, validator) => error || validator(value), undefined);

    return (
        <div>
            {props.editMode ?
                <div>
                    <Form
                        initialValues={
                            { editTaskText: props.text }
                        }
                        onSubmit={onSubmit}
                        render={({ handleSubmit, submitting }) => (
                            <form onSubmit={handleSubmit}>
                                <Field name={'editTaskText'} validate={composeValidators(requiered, maxLength20)}>
                                    {({ input, meta }) => (
                                        <div className={classes.itemFormWrapper}>
                                            <div className={classes.input}>
                                                <input {...input} onChange={props.onChangeText} maxLength='21'
                                                    autoComplete='off' autoFocus={true} type="textarea" />
                                            </div>
                                            <div className={classes.button}>
                                                <button disabled={meta.error || submitting}
                                                    onClick={props.deactivateEditMode}>Accept</button>
                                            </div>
                                            {meta.error && meta.touched && <span className={classes.error}>{meta.error}</span>}
                                        </div>
                                    )}
                                </Field>
                            </form>
                        )
                        }
                    />
                </div>
                : <div className={classes.itemFormWrapper}>
                    <span className={classes.taskText}>{props.text}</span>
                    <div className={classes.taskEditButton}><button onClick={props.activateEditMode}>Edit task</button></div>
                </div>
            }

        </div>
    )
}

export default ItemForm