import React from 'react';
import TodoTable from  './todotable';
import { useState } from 'react';

function TodoList(props) {

    const [todo, setTodo] = useState({ desc: '', date: '' });
    const [todos, setTodos] = useState([]);
  
    const addTodos = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }
  
    const inputChanged = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }
  
    const deleteTodo = (event) => {
        setTodos(todos.filter((todo, i) => i != event.target.value));
    }
    

    return (
        <div>
            
                    <form onSubmit={addTodos}>
                        <label htmlFor="date">
                            Date:
                            </label>
                            <input type="date" name="date" value={todo.date} onChange={inputChanged} />
                        <label>
                            Description: 
                            </label>
                            <input type="text" name="desc" value={todo.desc} onChange={inputChanged} />
                        <input type="submit" value="Add" />
                    </form>

            <TodoTable deleteTodo={deleteTodo} todos={todos}/>
        </div>
    );
}

export default TodoList;