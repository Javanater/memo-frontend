import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Header = ({onCreate}) => {
    return (
        <Row className="my-4">
            <Col xs={11}><h2>Welcome, here are your memos:</h2></Col>
            <Col xs={1}><Button onClick={onCreate}>New</Button></Col>
        </Row>
    )
}

export default Header