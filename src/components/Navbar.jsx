import { BiSearch } from 'react-icons/bi';
import logo from '../assets/image/login_logo.png'
import { useRef } from 'react';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
    const SearchBtn = useRef()
    const showSerchInput = () => {
        SearchBtn.current.classList.toggle('translate-y-[-70px]')
    }
    return (
        <div className="navbar">
            <div className="sm:container px-3 relative">
                <div className="navbar-wrap w-[100%] flex justify-between items-center">
                    <HamburgerMenu/>
                    <img width={70} className='rounded-md' src={logo} alt="" />
                    <input ref={SearchBtn} className='focus:border left-auto absolute p-3 ease-in duration-300 border translate-y-[-70px] rounded-lg block w-[70%]' type="search" name="serach" placeholder="Serach food"/>
                    <span onClick={showSerchInput} className='text-[30px]'><BiSearch/></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;