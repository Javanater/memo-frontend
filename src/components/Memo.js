import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CloseButton from 'react-bootstrap/CloseButton'

const Memo = ({memo, onDelete}) => {
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Subtitle>
                        <Row>
                            <Col xs={10}>{memo.date.getDate() + '/' + (memo.date.getMonth()+1) + '/' + memo.date.getFullYear()}</Col>
                            <Col xs={2}><CloseButton onClick={() => {onDelete(memo.id)}}/></Col>
                        </Row>
                    </Card.Subtitle>
                    <Card.Text>{memo.text}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Memo