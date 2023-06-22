import React from 'react'
import { useParams } from 'react-router-dom'
import TopicData from '../Topic.json'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Details = () => {
  const {tid,st_id}=useParams()
  // console.log("collect tid",tid,"collect subtopic id",st_id);
  let stopic=TopicData.Topic.find((data)=>data.topic_id==tid)
  // console.log("sub topic",stopic);
  let sdetails=stopic.sub_topic.find((data)=>data.sub_topic_id==st_id)
  return (
    <>
    <Card style={{ width: '36rem' }}>
      <Card.Img variant="top" src={sdetails.sub_image2} />
      <Card.Body>
        <Card.Title>{sdetails.sub_name}</Card.Title>
        <Card.Text>
         {sdetails.sub_description}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </>
  )
}

export default Details