import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/authSlice';
import './App.css'

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {isAuth ? (
        <>
          <button onClick={() => dispatch(logout())}>Logout</button>
          <TaskInput />
          <TaskList />
        </>
      ) : (
        <div className="login-box">
          <h2 className="login-heading">Please login to access your To-Do List</h2>
          <button className='login-btn' onClick={() => dispatch(login())}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
