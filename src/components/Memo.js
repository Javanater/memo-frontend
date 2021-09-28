import { FaTimes } from 'react-icons/fa'

const Memo = (props) => {
    return (
        <div className='memo'>
            <h3>
                {props.text}
                <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => {props.onDelete(props.memoID)}}/>
            </h3>
        </div>
    )
}

export default Memo