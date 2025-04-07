import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const TaskInput = () => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim() !== '') {
            dispatch(addTask({ text, priority, city }));
            setText('');
            setCity('');
        }
    };


    return (
        <div className="task-input-container">
            <input
                type="text"
                placeholder="Task description"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <input
                type="text"
                placeholder="City (for weather)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );
};

export default TaskInput;
