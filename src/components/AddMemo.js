import {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

const AddMemo = ({onSubmit, show, handleClose}) => {
    const [text, setText] = useState('')

    const createMemo = (e) => {
        e.preventDefault(); // don't POST
        handleClose();

        if (!text) {
            alert('Memo text is required');
            return;
        }

        const date = new Date();
        onSubmit({text, date});
        setText('');
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Memo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={createMemo}>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}>Memo</Form.Label>
                        <Col><Form.Control type='text' onChange={(e) => setText(e.target.value)}/></Col>
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