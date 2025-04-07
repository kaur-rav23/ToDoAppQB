import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice';
import axios from 'axios';

const API_KEY = "1ef1ec57bafce4fdf41d948d69af026a";

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.list);
    const dispatch = useDispatch();

    return (
        <div className="task-list">
            {tasks.length === 0 ? (
                <p>No tasks added yet.</p>
            ) : (
                tasks.map((task, index) => (
                    <TaskItem key={index} task={task} index={index} dispatch={dispatch} />
                ))
            )}
        </div>
    );
};

const TaskItem = ({ task, index, dispatch }) => {
    const [weather, setWeather] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            if (!task.city || task.city.trim() === '') {
                setWeather('');
                return;
            }

            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${task.city}&appid=${API_KEY}&units=metric`
                );
                const description = response.data.weather[0].description;
                const temp = response.data.main.temp;
                setWeather(`${description}, ${temp}°C`);
            } catch (error) {
                setWeather('Weather unavailable');
            }
        };

        fetchWeather();
    }, [task.city]);

    return (
        <div className={`task-item ${task.priority.toLowerCase()}`}>
            <div className="task-text">
                <strong>{task.text}</strong>
                <span className="priority">[{task.priority}]</span>
                {task.city && <div className="city">📍 {task.city}</div>}
                {task.city && (
                    <div className="weather">
                        {weather ? `🌤 ${weather}` : 'Fetching weather...'}
                    </div>
                )}
            </div>
            <button className="delete-btn" onClick={() => dispatch(deleteTask(index))}>
                ❌
            </button>
        </div>
    );
};

export default TaskList;
