import react from 'react';
import '../../styles/Navbar.css'


const Navbar = () => {

    return (
        <div className='Navbar'>
            <div className='Navbar-logo'>
                <img href="#" alt="Company Logo"/>
            </div>
            <div className='Navbar-loginAndSignup'>
                <span>Login / Sign-up</span>
            </div>
        </div>
    )
};

export default Navbar;