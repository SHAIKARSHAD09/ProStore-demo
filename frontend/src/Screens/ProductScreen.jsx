import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { Row,  Col, Image, ListGroup, Card, Button, ListGroupItem} from "react-bootstrap";
import axios from 'axios';
import { useEffect, useState } from "react";



const ProductScreen = () => {
    const [product, setProduct] = useState([]);

    const {id: productId} = useParams();
    useEffect(()=>{
        const fetchProduct = async () =>{
            const {data} = await axios.get(`/api/products/${productId}`);
            setProduct(data);
        }
        fetchProduct();
    },[productId])
  return (
    <div className="mx-5 px-5">
      <Link className='btn btn-light my-3' to ='/'>
        Go Back
      </Link>
      <Row>
        <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>Description: {product.description}</ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup>
                    <ListGroup.Item>
                        <Row>
                            <Col>Staus:</Col>
                            <Col>
                            <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Button
                        className="btn-block"
                        type="button"
                        disabled={product.countInStock === 0}>
                            Add to Cart
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ProductScreen
