import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import TopicData from '../Topic.json'
import {Card, Button,Row,Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const SubTopic = () => {
  let{tid}=useParams()
  // console.log("tid collected",tid);
  let stopic=TopicData.Topic.find((x)=>x.topic_id==tid)
  console.log("sub topic",stopic);
  
  return (
    <>
    <Container fluid style={{backgroundColor:"brown",minHeight:'100%'}}>
      <h1 style={{color:'yellow',paddingBottom:'4rem'}}>{stopic.topic_name}</h1>
      <Row>
        {stopic.sub_topic.map((st)=>(
          <Col key={st.sub_topic_id} sm={12} md={6} lg={6} xl={6} style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
            {/* <h1>Column</h1> */}
            <Card style={{width:'18rem'}}>
              <Card.Img varient="top" src={st.sub_image1}/>
              <Card.Body>
                <Card.Title style={{color:'green'}}>{st.sub_name}</Card.Title>
                <Link to={`details/${st.sub_topic_id}`}>
                  <Button varient="primary">More Details</Button>
                </Link>
                </Card.Body>

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  )
}

export default SubTopic