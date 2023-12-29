import Logo  from '../../media/logo.jpg';
import './styles.css'

const Intro = () => {
    return (
        <div className="intro">
            <img src={Logo} className="logoImageIntro" alt="" />
                <p className="introContent">
                    Hello I hope you enjoy this app, the products  you will find here are only in the size, color, and brand  that is described in every picture. 
                </p>
                <img src={Logo} className="logoImageIntro" alt="" />
        </div>
    )
}

export default Intro;