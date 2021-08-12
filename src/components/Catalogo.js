import { useState, useEffect } from 'react'
import Producto from './Producto'

const Catalogo = () => {
    // Defining a hook for products and for toggle
    const [products, setProducts] = useState([])
    const [toggle, setToggle] = useState(true)
    // Creating a asynchronous function for require the data and set at products
    const getProducts = async () => {
        const data = await fetch('./data.json')
        const dataProducts = await data.json()
        setProducts(dataProducts)
    }
    // Calling the function when the component is mounted
    useEffect(() => {
        getProducts()
    }, [])
    // Setting the products in stock
    const inStock = () => {
        setToggle(!toggle)
    }

    return (
        <>
            Titulo de Catalogo
            {
                products.filter(product => product.stock || toggle).map((product, index) => {
                    return (
                        <Producto product={product} key={index}/>
                    )
                })
            }
            <button onClick={ inStock }>
                {toggle ? 'Mostrar en stock' : 'Mostrar todos los productos'}
            </button>
        </>
    )
}
export default Catalogo
