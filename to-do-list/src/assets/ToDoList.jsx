import React, { useState } from 'react';
import './ToDoList.css';

function ToDoList() {
    const [tasks, settasks] = useState([]);
    const [newtask, setnewtask] = useState("");

    function changeinput(event) {
        setnewtask(event.target.value);
    }

    function additem() {
        if (newtask.trim() !== '') {
            settasks(t => [...t, newtask]);
            setnewtask("");
        }
    }
    function clearitem(){
        settasks(t=>[]);
    }

    function delitem(index) {
        settasks(tasks.filter((_, i) => i !== index));
    }

    function moveup(index) {
        if (index > 0) {
            const updatedar = [...tasks];
            [updatedar[index], updatedar[index - 1]] = [updatedar[index - 1], updatedar[index]];
            settasks(updatedar);
        }
    }

    function movedown(index) {
        if (index < tasks.length - 1) {
            const updatedar = [...tasks];
            [updatedar[index], updatedar[index + 1]] = [updatedar[index + 1], updatedar[index]];
            settasks(updatedar);
        }
    }

    return (
        <div className="todo-container">
            <h1 className="todo-title">To-Do List</h1>
            <div className="todo-input-group">
                <input
                type="text"
                value={newtask}
                placeholder="Enter a task"
                onChange={changeinput}
                className="todo-input"
                />
                <button onClick={additem} className="todo-add-button">
                Add
                </button>
                <button onClick={clearitem} className="todo-add-button">
                clear all
                </button>
            </div>

            <div className="todo-list">
                <ol>
                {tasks.map((task, index) => (
                    <li key={index} className="todo-item">
                    <span className="todo-task">{task}</span>
                    <div className="todo-buttons">
                        <button className="todo-btn delete" onClick={() => delitem(index)}>
                        Delete
                        </button>
                        <button className="todo-btn up" onClick={() => moveup(index)}>
                        Up
                        </button>
                        <button className="todo-btn down" onClick={() => movedown(index)}>
                        Down
                        </button>
                    </div>
                    </li>
                ))}
                </ol>
            </div>
        </div>

    );
}

export default ToDoList;