import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import TopicData from "../Topic.json";
import { Container, Button } from 'react-bootstrap';
const DiffretTopic = () => {
    return (
        <>
            {TopicData.Topic.map(D => {
                return (

                    <React.Fragment key={D.topic_id}>
                        {/* <Container fluid > */}
                            <Card style={{backgroundColor:'palegreen'}}>
                                <Card.Body>
                                    <Card.Title>{D.topic_name}</Card.Title>
                                    <Card.Link as={Link} to={`subtopic/${D.topic_id}`}>
                                        <Button varient="primary">Choose Topic</Button>
                                    </Card.Link>

                                </Card.Body>
                            </Card>
                        {/* </Container> */}
                        {/* <h1>{D.topic_name}</h1>
                    <Link to={`subtopic/${D.topic_id}`}>
                        <button>Choose Topic</button>
                    </Link> */}
                    </React.Fragment>
                )

            })}

        </>

    )
}

export default DiffretTopic