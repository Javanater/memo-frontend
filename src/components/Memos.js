import Memo from "./Memo";
import {Row, Col, Alert, ToastContainer, Toast} from 'react-bootstrap'
import {useState, useEffect} from 'react'

const Memos = ({memos, getMemosPending, getMemosFailed, handleGetMemos, handleDeleteMemo, deleteMemoFailed}) => {
    const [showDeleteMemoFailedToast, setshowDeleteMemoFailedToast] = useState(false);

    useEffect(() => {
        setshowDeleteMemoFailedToast(deleteMemoFailed)
    }, [deleteMemoFailed])

    return (<>
        <Row xs={1} sm={1} md={2} lg={2} xl={3} xxl={4} className="g-4">
            {memos && memos.length > 0 && memos.map(memo => <Memo key={memo.id} memo={memo} handleDeleteMemo={handleDeleteMemo}/>)}
        </Row>
        {getMemosFailed && <Row className='g-4'>
            <Col><Alert variant='danger'>We're sorry. We failed to retreive your memos.</Alert></Col>
        </Row>}
        <ToastContainer className="p-3" position='bottom-end'>
            <Toast bg='danger' onClose={() => setshowDeleteMemoFailedToast(false)} show={showDeleteMemoFailedToast} delay={3000} autohide>
                <Toast.Body className='text-white'>We're sorry. We failed to delete that message.</Toast.Body>
            </Toast>
        </ToastContainer>
    </>)
}

export default Memos