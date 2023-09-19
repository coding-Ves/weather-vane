import { useState } from 'react';
import { Box, Dialog, IconButton } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CityButton from './CityButton';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const CityGroupButtons = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {/* Mobile menu icon */}
            <IconButton
                sx={{
                    display: {
                        xs: 'flex',
                        sm: 'flex',
                        md: 'none',
                    },
                    justifyContent: 'flex-start',
                    position: 'fixed',
                    top: 3,
                    right: 5,
                    zIndex: 1,
                    margin: 3,
                    backgroundColor: 'rgba(32, 118, 245, 0.44)',
                    ':hover': {
                        bgcolor: 'rgba(40, 40, 40, 0.50)',
                        backgroundBlendMode: 'darken',
                        border: 'none',
                    },
                    '&:active': {
                        boxShadow: 'none',
                        borderStyle: 'hidden',
                    },
                    '&:focus': {
                        boxShadow: 'none',
                        borderStyle: 'hidden',
                    },
                    '&:focus, &:active': {
                        outline: 'none',
                        bgcolor: 'rgba(35, 35, 35, 0.53)',
                    },
                }}
                onClick={openModal}
            >
                <MenuRoundedIcon sx={{ fontSize: '40px', color: '#fff' }} />
            </IconButton>

            {/* City buttons */}
            <Box
                sx={{
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'flex',
                        lg: 'flex',
                    },
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: 2,
                    margin: 3,
                }}
            >
                <CityButton
                    backgroundImage={'/src/assets/cities/London.jpg'}
                    cityName={'London'}
                />
                <CityButton
                    backgroundImage={'/src/assets/cities/Paris.jpg'}
                    cityName={'Paris'}
                />
                <CityButton
                    backgroundImage={'/src/assets/cities/Berlin.jpg'}
                    cityName={'Berlin'}
                />
                <CityButton
                    backgroundImage={'/src/assets/cities/Sofia.jpg'}
                    cityName={'Sofia'}
                />
                <CityButton
                    backgroundImage={'/src/assets/cities/Stockholm.jpg'}
                    cityName={'Stockholm'}
                />
                <CityButton
                    backgroundImage={'/src/assets/cities/Rome.jpg'}
                    cityName={'Rome'}
                />
                <CityButton
                    backgroundImage={'/src/assets/cities/Brussels.jpg'}
                    cityName={'Brussels'}
                />
            </Box>

            {/* Modal for mobile */}
            <Dialog
                open={isModalOpen}
                onClose={closeModal}
                sx={{
                    '& .MuiDialog-paper': {
                        width: '100%',
                        maxWidth: '350px',
                        borderRadius: 10,
                        paddingTop: 5,
                        paddingBottom: 3,
                    },
                    alignSelf: 'center',
                }}
            >
                <Box
                    sx={{
                        padding: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        alignItems: 'center',
                    }}
                >
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: 2,
                            right: 2,
                            zIndex: 2,
                            margin: 2,
                        }}
                        onClick={closeModal}
                    >
                        <CloseRoundedIcon />
                    </IconButton>

                    <CityButton
                        backgroundImage={'/src/assets/cities/London.jpg'}
                        cityName={'London'}
                        onClick={closeModal}
                    />
                    <CityButton
                        backgroundImage={'/src/assets/cities/Paris.jpg'}
                        cityName={'Paris'}
                        onClick={closeModal}
                    />
                    <CityButton
                        backgroundImage={'/src/assets/cities/Berlin.jpg'}
                        cityName={'Berlin'}
                        onClick={closeModal}
                    />
                    <CityButton
                        backgroundImage={'/src/assets/cities/Sofia.jpg'}
                        cityName={'Sofia'}
                        onClick={closeModal}
                    />
                    <CityButton
                        backgroundImage={'/src/assets/cities/Stockholm.jpg'}
                        cityName={'Stockholm'}
                        onClick={closeModal}
                    />
                    <CityButton
                        backgroundImage={'/src/assets/cities/Rome.jpg'}
                        cityName={'Rome'}
                        onClick={closeModal}
                    />
                    <CityButton
                        backgroundImage={'/src/assets/cities/Brussels.jpg'}
                        cityName={'Brussels'}
                        onClick={closeModal}
                    />
                </Box>
            </Dialog>
        </>
    );
};

export default CityGroupButtons;
