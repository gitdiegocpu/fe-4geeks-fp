import Logo  from '../../media/logo.jpg';

import './styles.css'

const Front = () => {
    return (
        <div className="bannner">
            <h1>KING STYLE</h1>
            <p> Best Shoes Brands And Prices </p>
            <img src={Logo} className="logoImageFront" alt="" />
        </div>
    )
}

export default Front