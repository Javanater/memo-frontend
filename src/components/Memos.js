import Memo from "./Memo";
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'

const Memos = ({memos, onDelete}) => {
    return (
        <Row xs={1} sm={1} md={2} lg={2} xl={3} xxl={4} className="g-4">
            {
                memos.map((memo) => (
                    <Memo key={memo.id} memo={memo} onDelete={onDelete}/>
                ))
            }
        </Row>
    )
}

export default Memos