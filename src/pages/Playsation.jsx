import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



function Playsation() {

    const [product, setProduct] = useState(null)

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


    return (
        <>
            <h1>{product === null ? "loading" : product.title}</h1>
            <img src={product === null ? "loading" : product.thumbnail} alt="" />
            <div className="btn-playstation">
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">-</Button>
                <Button variant="secondary">restart</Button>
                <Button variant="secondary">+</Button>
            </ButtonGroup>
            <Button variant="outline-secondary">ADD TO CART</Button>
            </div>
            
        </>
    )
}

export default Playsation;