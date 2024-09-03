import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { logo } from "../data/data";




function Playsation() {

    const [product, setProduct] = useState(null)
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(0)

    useEffect(() => {
        async function fetchApi() {
            const url = "https://api.mercadolibre.com/sites/MLB/search?category=MLB4983852868&q=playstation"
            const response = await axios.get(url)
            const data = response.data
            const newData = data.results[0]
            setProduct(newData)

        }

        fetchApi();
    }, [])


    const handleIncrement = () => {
        if (count < 10) { // Condição: só incrementa se count for menor que 10
            setCount(count + 1);
        } else {
            console.log("O valor máximo foi atingido!");
        }
    };

    const handleDecrement = () => {
        if (count > 0) { // Condição: só decrementar se count for maior que 0
            setCount(count - 1);
        } else {
            console.log("O valor mínimo foi atingido!");
        }
    };

    const handlePrice = () => {
        if (price < 4.500) {
            setPrice(count * 450.00);
        } else {
            console.log("The maximum price has reached")
        }
    }

    return (
        <>
 
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                <img className="navbar" src={logo} alt="Bootstrap" width="85" height="60"></img>
                    
                    <Nav className="me-auto">
                    
                        <Nav.Link href="#features">Playstation</Nav.Link>
                        <Nav.Link href="#pricing">Xbox</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <h4 className="h4-title">{product === null ? "loading" : product.title}</h4>
            <img className="playstation-pic" src={product === null ? "loading" : product.thumbnail} alt="" />

            <div className="input-price">
                <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <InputGroup.Text>{price}</InputGroup.Text>
                </InputGroup>
            </div>

            <div className="btn-playstation">
                <ButtonGroup aria-label="Basic example">
                    <Button onClick={handleDecrement} variant="secondary">-</Button>
                    <Button disabled variant="secondary">{count}</Button>
                    <Button onClick={handleIncrement} variant="secondary">+</Button>
                </ButtonGroup>
                <Button onClick={handlePrice} variant="outline-secondary">ADD TO CART</Button>

            </div>
        </>
    )
}

export default Playsation;