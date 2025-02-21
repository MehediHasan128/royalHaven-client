import { Typography } from '@mui/material';
import logo from '../../../assets/images/logo.png';
import { useState } from 'react';


const buttons = ["All", "Sell", "Rent", "Favorites", "Services"];


const Header = () => {
    const [activeBtn, setActiveBtn] = useState("All");

    return (
        <div className='flex items-center justify-between w-full'>
            <div className='w-fit flex items-center gap-3'>
                <img className='w-8' src={logo} alt="" />
                <Typography variant='h5'><span id='logoFont'>Royal Haven</span></Typography>
            </div>
            <div className='flex justify-between items-center gap-2 p-1 rounded-full bg-gray-100'>
                {
                    buttons.map((btn) => (
                        <button onClick={() => setActiveBtn(btn)} key={btn} className={`${(activeBtn === btn)? "bg-white text-red-600 font-medium" : "bg-transparent text-black"} px-4 py-1 rounded-full cursor-pointer`}><Typography variant='caption'>{btn}</Typography></button>
                    ))
                }
            </div>
        </div>
    );
};

export default Header;