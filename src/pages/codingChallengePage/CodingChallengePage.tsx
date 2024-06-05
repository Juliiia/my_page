import React, { useEffect, useState } from 'react';
import DefaultSection from '../../components/defaultSection';

type todoProps = {
    todo: string;
    completed: boolean;
    userId: number;
}

type todoListProps = {
    [id:number]:todoProps;
}

const CodingChallengePage = () => {
    const[todos, setTodos] = useState([]);

    useEffect(()=> {
        //using https://github.com/Ovi/DummyJSON
        fetchData();
    },[])

    const fetchData = async () => {
        const res = await fetch('https://dummyjson.com/todos');
        const json = await res.json();
        json.todos && setTodos(json.todos);
    }

    const renderTodos = (todoList:todoListProps[]) => {
            return <ul>
                {todoList.map((item) => {
                    return <li>{item.todo}</li>
                    } 
        )       }
            </ul>    
    }

    return(
        <DefaultSection
            title='Coding Challenge'
        >
            {todos.length > 0 ? renderTodos(todos) : <span>empty</span>}
        </DefaultSection>
    )
}

export default CodingChallengePage;