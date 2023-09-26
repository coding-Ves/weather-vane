// import { Box } from '@mui/material';
import CityGroupButtons from './CityButtonGroup';

const NavBar = () => {
    return (
        <>
            {/* <Box
                sx={{
                    width: '200px',
                    height: '100px',
                    backgroundImage: `url('/src/assets/Weather-Vane.png')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '200px',
                    backgroundColor: 'rgba(0, 0, 0, 0.10)',
                    borderRadius: '10px',
                    marginLeft: {
                        xs: 0,
                        sm: 0,
                        md: 'auto',
                        lg: 'auto',
                        xl: 'auto',
                    },
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'flex',
                        lg: 'flex',
                        xl: 'flex',
                    },
                    marginRight: 'auto',
                }}
            /> */}
            <CityGroupButtons />
        </>
    );
};

export default NavBar;
