const AddMemo = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Memo</label>
                <input type='text'/>
            </div>
            <input type='submit' value='Save Memo' className='btn btn-block'/>
        </form>
    )
}

export default AddMemo