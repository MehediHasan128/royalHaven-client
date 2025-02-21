import { Typography } from '@mui/material';
import logo from '../../../assets/images/logo.png';

const Header = () => {
    return (
        <div>
            <div className='w-fit flex items-center gap-3'>
                <img className='w-8' src={logo} alt="" />
                <Typography variant='h5'><span id='logoFont'>Royal Haven</span></Typography>
            </div>
        </div>
    );
};

export default Header;