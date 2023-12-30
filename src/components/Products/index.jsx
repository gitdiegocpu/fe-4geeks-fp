import { useState, useEffect } from 'react';

import Shoe from '../Shoe/index.jsx';

import './styles.css';

const Products = () => {

    const [shoes, setShoes] = useState([]);

    useEffect(() => {
        fetch('https://final-p-backend.web.app/products')
            .then((res) => res.json())
            .then((data) => setShoes(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="products">
            <h2>PRODUCTS</h2>
            <div className="productsWrapper">
                {shoes.map((item) => {
                    return <Shoe data={item} />
                })}
            </div>
        </div>
    )
}

export default Products;