import React from 'react';
import style from './style.css';
import { fieldConnect } from './fields';

export const TextField = props => (
    <div className="formField">
        <h3>{props.fieldTitle}</h3>
        <input type={props.type} name={props.name} />
    </div>
);

export const TextInput = fieldConnect(TextField);

export const Registration = props => {
    return (
        <div className="wrapper ">
            <h2>Registration</h2>
            <form>
                <TextInput 
                    fieldTitle={'First Name'}
                    type={'text'}
                    name={'name'}
                />
                <TextInput 
                    fieldTitle={'Email'}
                    type={'text'}
                    name={'email'}/>
                <TextInput 
                    fieldTitle={'Password'}
                    type={'password'}
                    name={'password'}/>
                <div className="actionContainer">
                    <button type={"reset"} className="reset">Cancel</button>
                    <button type={"submit"} className="submit">Submit</button>
                </div>    
            </form>
        </div>
    );
}