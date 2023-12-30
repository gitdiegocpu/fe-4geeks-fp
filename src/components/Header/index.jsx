import './styles.css';

const Header = ({count = 0}) => {


    return (
        <div className="headerWrapper">
           <div className="cart">🛒</div>
           <div className="cartCount">{count}</div>
        </div>
    );
}

export default Header;
