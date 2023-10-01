import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
    getTheme,
    toggleDark,
    toggleLight,
} from '../../redux/slices/themeSlice.js';

const ThemeSwitch = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => getTheme(state));

    const handleThemeToggle = () => {
        if (theme.palette.mode === 'light') {
            dispatch(toggleDark());
        } else {
            dispatch(toggleLight());
        }
    };

    return (
        <IconButton
            color='inherit'
            onClick={handleThemeToggle}
            sx={{
                position: 'fixed',
                top: 3,
                right: 5,
                zIndex: 1,
                margin: 3,
                backgroundColor: 'rgba(100, 100, 100, 0.54)',
            }}
        >
            {theme.palette.mode === 'light' ? (
                <DarkModeIcon sx={{ fontSize: '30px', color: '#fff' }} />
            ) : (
                <LightModeIcon sx={{ fontSize: '30px', color: '#ffd52d' }} />
            )}
        </IconButton>
    );
};

export default ThemeSwitch;
