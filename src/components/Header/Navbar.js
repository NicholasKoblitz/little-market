import react from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css'


const Navbar = () => {

    const alertUser = () => {
        alert("Third-Party API does not allow user creation. Please use given logins")

    }

    return (
        <div className='Navbar'>
            <div className='Navbar-logo'>
                <img href="#" alt="Company Logo"/>
            </div>
            <div className='Navbar-loginAndSignup'>
                <span>
                    <Link to="/login">Login </Link> 
                    / 
                    <button onClick={alertUser}>Sign-up</button>
                </span>
            </div>
        </div>
    )
};

export default Navbar;