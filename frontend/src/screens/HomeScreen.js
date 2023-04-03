import React from 'react'
import { Row } from 'react-bootstrap'
import products from '../products'

const HomeScreen = () => {
  return (
    <>
    <h1>Latest Products
        <Row>
            {products.map((product) => (
                <Col sm={12} md={6} lg={4} x1={3} ></Col>
            ))}
        </Row>
    </h1>
    </>
  )
}

export default HomeScreen