import axios from "axios";
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logo } from '../data/data';


function Xbox() {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        async function fetchApi() {
            const url = "https://api.mercadolibre.com/sites/MLB/search?category=MLB4983852868&q=xbox"
            const response = await axios.get(url)
            const data = response.data
            const newData = data.results[0]
            setProduct(newData)
        }

        fetchApi();

    }, [])



    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                <img src={logo} alt="Bootstrap" width="65" height="50"></img>
                <Navbar.Brand as={NavLink} to="/">GoEletric</Navbar.Brand>
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Fabio Dias</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <h2>{product === null ? "loading" : product.title}</h2>
            <img src={product === null ? "loading" : product.thumbnail} alt="" />
        </>
    )
}

export default Xbox;