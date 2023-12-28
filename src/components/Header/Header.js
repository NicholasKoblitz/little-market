import react from 'react';
import Navbar from './Navbar';
import SearchBar from './SerachBar';
import '../../styles/Header.css'


const Header = () => {


    return (
        <div className='Header'>
            <Navbar/>
            <SearchBar/>
        </div>
    )
}

export default Header;