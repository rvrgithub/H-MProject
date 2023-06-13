import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';

const BlogCard = ({CardImage,CardTitle,CardText,id}) => {

    function truncate(string,n){
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }
     
  return (
    <div style={{margin:"35px"}}>
        <Card style={{ width: '21rem',height:"28rem" }}>
        <Card.Img variant="top" src={CardImage} style={{height:"230px",width:"100%"}} className='img-fluid' alt="image_error" />
        <Card.Body>
            <Card.Title>{CardTitle}</Card.Title>
            <Card.Text>
                {truncate(CardText,40)}
            </Card.Text>
            <Link to={`/blog/${id}`}><Button variant="primary" >Read Now</Button></Link>
        </Card.Body>
        </Card>
    </div>
  )
}

export default BlogCard