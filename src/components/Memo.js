import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Badge from 'react-bootstrap/Badge'
import CloseButton from 'react-bootstrap/CloseButton'

function memo_date(memo) {
    const date = new Date(memo.create_timestamp);
    return date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()
}

const Memo = ({memo, onDelete}) => {
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Card.Subtitle>
                        <Row>
                            <Col xs={10}>{memo_date(memo)}</Col>
                            <Col xs={2}><CloseButton onClick={() => {onDelete(memo.id)}}/></Col>
                        </Row>
                    </Card.Subtitle>
                    <Card.Text>
                        <Row>{memo.content}</Row>
                        <Row>{memo.tags.map(tag => <Col><Badge>{tag}</Badge></Col>)}</Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Memo