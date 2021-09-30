import {useState} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Login = ({setToken}) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    return (
        <>
            <Row><h1>Please login</h1></Row>
            <Form>
                <Form.Group as={Row} className='mt-3'>
                    <Form.Label column sm={2}>Username</Form.Label>
                    <Col><Form.Control type='text' onChange={e => setUserName(e.target.value)}/></Col>
                </Form.Group>
                <Form.Group as={Row} className='mt-3'>
                    <Form.Label column sm={2}>Password</Form.Label>
                    <Col><Form.Control type='text' onChange={e => setPassword(e.target.value)}/></Col>
                </Form.Group>
                <Button variant="primary" type="submit" className='mt-3'>Submit</Button>
            </Form>
        </>
    )
}

export default Login