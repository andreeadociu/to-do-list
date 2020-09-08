import React from 'react'

const ToDo = ({match}) => {
    console.log(match);
    return (
        <div>
            <h1>To Do Page</h1>
            <h1>{match.id}</h1>
        </div>
    )
}

export default ToDo
