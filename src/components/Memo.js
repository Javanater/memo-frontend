import { FaTimes } from 'react-icons/fa'

const Memo = (props) => {
    return (
        <div className='memo'>
            <h3>
                {props.text}
                <FaTimes style={{color: 'red', cursor: 'pointer'}}/>
            </h3>
        </div>
    )
}

export default Memo