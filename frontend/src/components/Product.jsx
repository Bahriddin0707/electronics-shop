import {Button, Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Rating from "./Rating";


const Product = ({product}) => {
    return (
        <Card className="my-3 p-2">
            <Link to={`/products/${product._id}`}>
                <Card.Img variant="top" src={product.image} alt={product.name} />
            </Link>
            <Card.Body>
                 <Card.Title className="product-title">{product.name}</Card.Title>

                <Card.Text as="div">
                    <Rating value={product.rating} numRev={product.numReviews}/>
                </Card.Text>

                <Card.Text as="p">
                    $<i>{product.price}</i>
                </Card.Text>
                <Link to={`/products/${product._id}`}>
                    <Button variant="primary">See More</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Product;