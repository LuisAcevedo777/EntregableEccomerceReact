import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import { filterProductsCategoryThunk } from '../store/slices/productsAll.slice';
import { Row, Col } from 'react-bootstrap'
import '../App.css'


const ProductDetail = () => {

    const { id } = useParams()

    const [uniqueProduct, setUniqueProduct] = useState({})

    const productSuggested = useSelector(state => state.productsAll)

    /*const productSuggestedFiltered = productSuggested.find((productFiltered => productFiltered.id === Number(id)))
       const relatedProduct= productSuggested.filter(productFiltered=> productFiltered.category.id === productSuggestedFiltered.category.id &&
          productFiltered.id !== productSuggestedFiltered.id    )*/

    const navigate = useNavigate()



    const dispatch = useDispatch()

    useEffect(() => {

        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}/`)
            .then(res => {

                setUniqueProduct(res.data);
                dispatch(filterProductsCategoryThunk(res.data.category.id))

            });

    }, [id])
    console.log(uniqueProduct)



    return (
        <div>
            <Row>
                <Col lg={9}>
                    <div className='col1'>
                        <h1>{uniqueProduct.title}</h1>
                        <img className='imgUnique' src={uniqueProduct.images?.[0].url} alt="" />

                        <p>Price: {uniqueProduct.price}</p></div>
                </Col>
                <Col lg={3}>
                    <h2>DESCRIPTION:</h2>
                    <p>{uniqueProduct.description}</p>
                </Col></Row>



            <ul className='ulistSuggered'>
                {
                    productSuggested.map(productSuggested => (

                        <li className='listSuggered' key={productSuggested.id} onClick={() => navigate(`/product/${productSuggested.id}`)} >

                            <img className='imgSuggered' src={productSuggested.images[0].url} alt="" />
                            <p className='titleSuggered'>{productSuggested.title}</p>
                        </li>

                    ))

                }
            </ul>
        </div>
    );
};

export default ProductDetail;