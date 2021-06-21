import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap';
import Rating from '../components/Rating'
import products from '../products';
function ProductScreen({ match }) {
    const product =products.find((p) => p._id == match.params.id )
    return (
        <div>
            <Link to = '/' className='btn btn-dark my-3'>Go back</Link>
            <Row>
                <Col md={6}>
                    {product.name}
                    
                    <Image src={product.image} alt={product.name} fluid></Image>
                    </Col>
                    <Col md={3}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={product.numReviews} reviewss color='#FFC107'/>
                            </ListGroup.Item>

                         <ListGroup.Item>
                                Price:Rs {product.price}/-
                            </ListGroup.Item>

                        </ListGroup><ListGroup.Item>
                                Description: {product.description}
                                
                            </ListGroup.Item>
                    </Col>
                    <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                             <Row>
                                 <Col>Price:</Col>
                                 <Col>
                                  <strong>{product.price}</strong> 
                               </Col>
                             </Row>

                            </ListGroup.Item>
                            <ListGroup.Item>
                             <Row>
                                 <Col>Satus:</Col>
                                 <Col>
                                  {product.countInStock > 0 ? 'InStock' : 'OutofStock'}
                               </Col>
                             </Row>

                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' disabled ={product.countInStock == 0} type='button'>Add to cart</Button>
                            </ListGroup.Item>
                                
                        </ListGroup>
                    </Card>


                    </Col>
                    
                
            </Row>

            
        </div>
    )
}

export default ProductScreen
