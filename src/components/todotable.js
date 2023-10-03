import React from 'react';
import Todolist from './todolist';

 function TodoTable(props) {

//     const TodoRows = props.todos.map((todo, index) =>
//         <tr>
//             <td>{todo.date}</td>
//             <td>{todo.desc}</td>
//             <button onClick={() => props.deleteTodo(index)} >Delete</button>
//         </tr>
//     )

    return (
        <div>
            <table>
                <tbody>

                    <tr>
                        <th>Date </th><th> Description</th>
                    </tr>

                    {
                        props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.date}</td>
                            <td>{todo.desc}</td>
                            <button onClick={() => props.deleteTodo(index)} >Delete</button>
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    );
}


export default TodoTable;