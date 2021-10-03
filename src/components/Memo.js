import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'
import CloseButton from 'react-bootstrap/CloseButton'

function memo_date(memo) {
    const date = new Date(memo.create_timestamp);
    return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
}

const Memo = ({memo, handleDeleteMemo}) => {
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Subtitle>
                        <Row>
                            <Col>{memo_date(memo)}</Col>
                            <Col xs='auto'><CloseButton onClick={() => {handleDeleteMemo(memo.id, memo.user_id, memo.create_timestamp)}}/></Col>
                        </Row>
                    </Card.Subtitle>
                    <Card.Text>
                        <Row><Col>{memo.content}</Col></Row>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Row>{memo.tags.map(tag => <Col xs='auto'><Badge bg='secondary'>{tag}</Badge></Col>)}</Row>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default Memo