import { useState } from "react";

export default function Add() {
    const [data, setData] = useState({
        add_todo: ''
    });

    return (
        <input 
            data-testid="todo-input" 
            value={data.add_todo} 
            onChange={(event) => setData(oldData => ({...oldData, [event.target.name]: event.target.value}))}
            name="add_todo"
        />
    )
};