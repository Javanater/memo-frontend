import { FaTimes } from 'react-icons/fa'

const Memo = ({memo, onDelete}) => {
    return (
        <div className='memo'>
            <h3>
                {memo.text}
                <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={() => {onDelete(memo.id)}}/>
            </h3>
        </div>
    )
}

export default Memo