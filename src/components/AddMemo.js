import {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

const AddMemo = ({show, onHide, handleCreateMemo}) => {
    const [content, setcontent] = useState('')
    const [tagString, setTags] = useState('')

    const createMemo = (e) => {
        e.preventDefault(); // don't POST
        onHide();

        if (!content) {
            alert('Memo content is required');
            return;
        }

        const tags = tagString.split(',');
        const memo = {content, tags};
        handleCreateMemo(memo);
        setcontent('');
        setTags('');
    }

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>New Memo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={createMemo}>
                    <Form.Group as={Row} className='mb-4'>
                        <Form.Label column sm={2}>Content</Form.Label>
                        <Col><Form.Control type='text' onChange={(e) => setcontent(e.target.value)}/></Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Tags</Form.Label>
                        <Col><Form.Control type='text' onChange={(e) => setTags(e.target.value)}/></Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={createMemo}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddMemo