import { BiSearch } from 'react-icons/bi';
import logo from '../assets/image/login_logo.png'
import { useRef } from 'react';

const Navbar = () => {
    const SearchBtn = useRef()
    const showSerchInput = () => {
        SearchBtn.current.classList.toggle('translate-y-[-70px]')
    }
    return (
        <div className="navbar">
            <div className="conainer px-3">
                <div className="navbar-wrap flex justify-between items-center">
                    <img width={90} className='rounded-md' src={logo} alt="" />
                    <input ref={SearchBtn} className='focus:border px-2 p-1 ease-in duration-300 border translate-y-[-70px] rounded-lg mx-w-[60%]' type="search" name="serach" placeholder="Serach food"/>
                    <span onClick={showSerchInput} className='text-[30px]'><BiSearch/></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;