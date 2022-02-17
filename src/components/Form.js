import React, {useState} from "react";

function Form (){

    const [state, setState] = useState();
    const [value, setValue] = useState([])

    function submitHandler(event){
        event.preventDefault()
        setValue([...value,state])
        setState('')
    }

    function toggle (event){
        if(event.target.style.textDecoration === 'line-through'){
            event.target.style.textDecoration = 'none'
        }else{event.target.style.textDecoration = 'line-through'}
    }
    return (
    <div>
        <h1>to do</h1>
        <form onSubmit={(event) => submitHandler(event)}>
            <button>+</button>
            <input minLength={3} maxLength={10} value={state} onChange = {(event) => setState(event.target.value)} type="text" />
        </form>
        <ul>
            {
                value.map((item, idx) => {
                    return(
                        // <li onClick={(event) => event.target.style.textDecoration = 'line-through'} key={idx}>{item}</li>
                        <li onClick={(event) => toggle(event)} key={idx}>{item}</li>
                    )
                })
            }
        </ul>
    </div>


    )
}

export default Form