import React, { useReducer } from "react"
import Mate from '../types'

interface FormState {
    inputValues: Mate
}

interface FormProps {
    onNewMate: (newMate: Mate) => void
}

const INITIAL_STATE = {
    name: '',
    birthday: '',
    avatar: '',
    description: ''
}

type FormReducerAction = {
    type: "change_value"
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear"
}

const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
    switch(action.type){
        case "change_value":
        const {inputName, inputValue} = action.payload
        return {
            ...state,
            [inputName]: inputValue
        }
        case "clear":
            return INITIAL_STATE
    }
}

const Form = ({onNewMate}: FormProps) => {
    // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

    const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        onNewMate(inputValues)
        handleClear()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target

       dispatch({
        type: "change_value",
        payload: {
            inputName: name,
            inputValue: value
        }
       })
    }

    const handleClear = () => {
        dispatch({type: "clear"})
    }

    return (
        <div className="form-subs">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.name} type='text' name='name' placeholder='name'/>
                <input onChange={handleChange} value={inputValues.birthday} type='date' name='birthday'/>
                <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder='avatar'/>
                <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description'/>
                <button type="submit">Save new mate!</button>
                <button onClick={handleClear}>Clear form</button>

            </form>
        </div>
    )
}

export default Form