import { Backdrop, Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Loader = () => {
    const loading = useSelector((state) => state.loadingSlice.value);

    const [randomLoadingMessage, setRandomLoadingMessage] = useState('');

    const loadingMessages = [
        'Loading...',
        'Looking outside...',
        'Opening a window...',
        'Watching the news...',
        'Asking a friend...',
        'Checking weather rock...',
        'Counting clouds...',
        'Discussing weather',
        'Collecting rain samples...',
        'Driving there to check...',
    ];

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * loadingMessages.length);
        setRandomLoadingMessage(loadingMessages[randomIndex]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    const loaderImage = '/src/assets/loader.gif';

    return (
        <>
            <Backdrop open={loading} sx={{ zIndex: 10 }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        component='img'
                        src={loaderImage}
                        style={{
                            height: '140px',
                            width: '140px',
                            marginTop: 5,
                            borderRadius: '30px',
                            backgroundColor: 'rgba(250, 250, 250, 1)',
                            padding: 10,
                            opacity: 1,
                        }}
                    />
                    <Typography
                        variant='button'
                        sx={{ color: 'white', opacity: 0.8, fontSize: '20px' }}
                    >
                        {randomLoadingMessage}
                    </Typography>
                </Box>
            </Backdrop>
        </>
    );
};

export default Loader;
