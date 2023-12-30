import Front from "../Front";
import Intro from "../Intro";
import Products from "../Products";
import Header from "../Header";

import './styles.css';

export const Login = ({ onSubmit }) => {

    return (
        <div className="loginWrapper">
            <form className="formWrapper" onSubmit={onSubmit}>
                <div className="formField">
                    <label className="formLabel">email:</label>
                    <input type="email" id="email" size="30" placeholder="Enter your email" required />
                </div>
                <div className="formField">
                    <label className="formLabel">password:</label>
                    <input type="password" id="pass" size="30" placeholder="Enter your password" name="password" required />
                </div>
                <input className="submitButton" type="submit" value="Login" />
            </form>
        </div>
    )
}


export const Home = () => {

    return (
        <>
            <Header />
            <Front />
            <Intro />
            <Products />
        </>
    )
}

