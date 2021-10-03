import {useState, useReducer} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

const Login = ({loginPending, loginFailed, handleLogin, registerPending, registerFailed, handleRegister}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [register, toggleRegister] = useReducer(state => !state, false);

    const handleSubmit = e => {
        e.preventDefault();
        const creds = {username, password};

        if (register) {
            handleRegister(creds);
            toggleRegister();
        } else {
            handleLogin(creds);
        }
    }

    return (
        <Row className="justify-content-md-center mt-4">
            <Col xs={5}>
                <Card>
                    <Card.Body>
                        <Card.Title>Please {register ? 'register' : 'login'}</Card.Title>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group as={Row} className='mt-3'>
                                <Form.Label column sm={4}>Username</Form.Label>
                                <Col><Form.Control type='text' onChange={e => setUserName(e.target.value)}/></Col>
                            </Form.Group>
                            <Form.Group as={Row} className='mt-3'>
                                <Form.Label column sm={4}>Password</Form.Label>
                                <Col><Form.Control type='password' onChange={e => setPassword(e.target.value)}/></Col>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Button variant="primary" type="submit" className='mt-3' disabled={loginPending || registerPending}>
                                        {(loginPending || registerPending) ? 'Standby...' : 'Submit'}
                                    </Button>
                                </Col>
                                <Col xs='auto'><Button variant="outline-primary" className='mt-3' onClick={toggleRegister}>{register ? 'Cancel' : 'Register'}</Button></Col>
                            </Row>
                            {loginFailed && <Row className='mt-4'>
                                <Col><Alert variant='danger'>Invalid username or password</Alert></Col>
                            </Row>}
                            {registerFailed && <Row className='mt-4'>
                                <Col><Alert variant='danger'>Can't register: invalid username</Alert></Col>
                            </Row>}
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Login