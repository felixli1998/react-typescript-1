import React from "react";
import './style.css' ;

interface Props {
    todo : string; 
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e:React.FormEvent<EventTarget> ) => void ;
}

const InputFields = ( props: Props ) => {
    // Create a function that can append to the todoArr

    return (
    <form onSubmit={ props.handleAdd } className="input">
        <input className="input__box" type="text " placeholder="Enter a task"
        // By setting value to todo and having an OnChange that constantly updates 
        // It will reflect the change inside the input value 
        value={props.todo}
        
        onChange={ (e) => {
            props.setTodo(e.target.value)
        }}

        />
        <button className="input_submit" type="submit">Go</button>
    </form>
    );
};

export default InputFields ; 
