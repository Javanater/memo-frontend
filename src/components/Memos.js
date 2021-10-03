import Memo from "./Memo";
import {Row, Col, Alert} from 'react-bootstrap'

const Memos = ({memos, getMemosPending, getMemosFailed, handleGetMemos}) => {
    return (
        <>
        <Row xs={1} sm={1} md={2} lg={2} xl={3} xxl={4} className="g-4">
            {
                memos && memos.length > 0 && memos.map(memo =>
                    <Memo key={memo.id} memo={memo}/>
                )
            }
        </Row>
        {getMemosFailed && <Row className='g-4'>
            <Col><Alert variant='danger'>We're sorry. We failed to retreive your memos.</Alert></Col>
        </Row>}
        </>
    )
}

export default Memos