import React, { useState } from 'react';
import listItems from '../models/listItems';
import '../App.css';
import { Link } from 'react-router-dom';
import Input from '../components/Input';

const ListItems = () => {
    const [toDos, setToDos] = useState(listItems);

    const toggleComplete = id => {
        console.log(id);
        const initToDos = [...toDos];
        initToDos.forEach(i => {
            if(i.id === id){
                i.isCompleted = !i.isCompleted;
            }
        })
        setToDos(initToDos);
        console.log(toDos);
    };

    const onAddToDo = id => { 
        console.log(id);
        const initialToDos = [...toDos, {id: Math.random(), toDoName: id, isCompleted: false}];
        setToDos(initialToDos);
    };

    const deleteItem = id => {
        const initialToDos = [...toDos];
        setToDos(initialToDos.filter(i => i.id!==id));
    };

    return (
        <div>
            <Input onAddToDo={onAddToDo}/>
            {toDos.map( toDo => {
                return (
                    <div key={toDo.id}>
                        <p className="listItem">
                            <input type="checkbox" onChange={toggleComplete.bind(this, toDo.id)}/>
                            <Link to={`/todo/${toDo.id}`}>
                            {toDo.toDoName}
                            </Link>
                            <button onClick={deleteItem.bind(this, toDo.id)} className="deleteButton">x</button>
                       </p>
                  </div>
               )}
            )}
        </div>
    )
}

export default ListItems
