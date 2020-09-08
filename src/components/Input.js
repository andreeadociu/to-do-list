import React, {useState} from 'react'

const Input = props => {
    const [finalText, setFinalText] = useState('');

    return (
        <div>
            <input onChange={(e) => {setFinalText(e.target.value)}} type="text"/>
            <button onClick={props.onAddToDo.bind(this, finalText)}>Add ToDO</button>
        </div>
    )
}

export default Input
