import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/';
import { filterProductsCategoryThunk, filterProductsTitleThunk, getProductsThunk } from '../store/slices/productsAll.slice';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { Accordion, Card, InputGroup, Form, Row, Col, Button } from 'react-bootstrap';
import '../App.css'

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const seeProducts = useSelector(state => state.productsAll)
    //filtrado
    const [categories, setCategories] = useState([])
    //input
    const [newsSearch, setNewsSearch] = useState('')
    console.log(categories )

    useEffect(() => {
        dispatch(getProductsThunk())

        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories/')
            .then(res => setCategories(res.data))

    }, [])

    return (
        <div>

            <Row className='principalRow'>
                <Col lg={3}>


                    <Accordion className='Accordion' defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> <b>Categories</b> </Accordion.Header>

                            {
                                categories.map(category => (

                                    <Accordion.Body key={category.id} onClick={() => dispatch(filterProductsCategoryThunk(category.id))}>{category.name}</Accordion.Body>
                                ))

                            }

                        </Accordion.Item>
                    </Accordion>



                </Col>


                <Col lg={9}>

                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Enter here your search"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={newsSearch}
                            onChange={e => setNewsSearch(e.target.value)}
                        />
                        <Button className='bg-info text-black' variant="outline-secondary" id="button-addon2" onClick={() => dispatch(filterProductsTitleThunk(newsSearch))}>
                            Filter
                        </Button>
                    </InputGroup>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {seeProducts.map(product => (
                            <Col>
                                <Card onClick={() => navigate(`/product/${product.id}`)} key={product.id} >
                                    <Card.Img className='imgCard' variant="top" src={product.images[0].url} />
                                    <Card.Body className='cardHome'  >
                                        <Card.Title>{product.title}</Card.Title>

                                        <Card.Text>Price: {product.price}   </Card.Text> <Card.Text>Date At Creation:  {product.createdAt} </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>





                </Col>


            </Row>

        </div>
    );
};

export default Home; 