import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Header = ({onCreate, handleLogout}) => {
    return (
        <Row className="my-4">
            <Col><h2>Welcome, here are your memos:</h2></Col>
            <Col xs='auto'>
                <Button onClick={onCreate}>New</Button>
            </Col>
            <Col xs='auto'>
                <Button variant='outline-primary' onClick={handleLogout}>Logout</Button>
            </Col>
        </Row>
    )
}

export default Header