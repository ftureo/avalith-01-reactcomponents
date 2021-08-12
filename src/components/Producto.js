const Producto = (props) => {
    const { name, description, price, stock } = props.product

    return (
        <>
            <h2>Producto</h2>
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
            {(stock) ? <p>Hay stock</p> : <p>No disponible</p>}
        </>
    )
}
export default Producto
