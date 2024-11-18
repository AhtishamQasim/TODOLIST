import React, { useState } from 'react';
import './App.css';  // Importing the CSS file

function Create({ onAddTodo }) {
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            onAddTodo(inputValue);
            setInputValue('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter your todo"
                style={{ padding: '5px', width: '200px', marginRight: '10px' }}
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
}

function Home() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    return (
        <div style={{ margin: '20px' }}>
            <h2 style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Todo List</h2>
            <Create onAddTodo={handleAddTodo} />
            <div style={{ marginTop: '20px', fontFamily: 'Arial', fontWeight: 'bold' }}>
                {
                    todos.length === 0
                        ? <h2>No Record</h2>
                        : todos.map((todo, index) => (
                            <div key={index} style={{ marginTop: '10px' }}>
                                {todo}
                            </div>
                        ))
                }
            </div>
        </div>
    );
}

export default Home;
