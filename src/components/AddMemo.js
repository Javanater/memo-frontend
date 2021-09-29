import {useState} from "react";

const AddMemo = ({onSubmit}) => {
    const [text, setText] = useState('')

    const createMemo = (e) => {
        e.preventDefault() // don't POST

        if (!text) {
            alert('Memo text is required')
            return
        }

        onSubmit({text})
        setText('')
    }

    return (
        <form className='add-form' onSubmit={createMemo}>
            <div className='form-control'>
                <label>Memo</label>
                <input type='text' onChange={(e) => setText(e.target.value)}/>
            </div>
            <input type='submit' value='Save Memo' className='btn btn-block'/>
        </form>
    )
}

export default AddMemo