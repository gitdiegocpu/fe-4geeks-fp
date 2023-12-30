import './styles.css';

const Shoe = ({ data }) => {

    const size = 400;

    return (
        <div className="shoeWrapper">
            <img src={data.img} alt={data.brand} width={size} height={size}/>
            <span className="brandAndSize">{`${data.brand} size ${data.size}`}</span>
            <span className="price">{`$${data.price}`}</span>
        </div>
    )
}

export default Shoe;
