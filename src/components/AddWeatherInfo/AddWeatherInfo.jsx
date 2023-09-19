import {
    Alert,
    Box,
    Button,
    CircularProgress,
    Grid,
    Snackbar,
    TextField,
} from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitWeatherInfo } from '../../services/weather.service';

const AddWeatherInfo = () => {
    const [snackbarMessage, setSnackbarMessage] = useState('Success');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('error');
    const [buttonLoading, setButtonLoading] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setButtonLoading(true);
        submitWeatherInfo(
            Number(data.temp),
            Number(data.windspeed),
            Number(data.humidity),
            Number(data.pressure),
            Number(data.rain)
        )
            .then((response) => {
                console.log(response);
            })
            .then(() => setButtonLoading(false))
            .catch((error) => {
                setSnackbarSeverity('error');
                setSnackbarMessage(error.message);
                setSnackbarOpen(true);
                setButtonLoading(false);
                setSnackbarOpen(true);
            });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };

    return (
        <Box
            component='form'
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                mt: 3,
                width: '500px',
                color: 'white',
                marginRight: 'auto',
                backgroundColor: 'rgba(240, 240, 240, 0.8)',
                borderRadius: '20px',
                padding: 3,
            }}
        >
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    severity={snackbarSeverity}
                    onClose={handleClose}
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        autoComplete='stationName'
                        required
                        fullWidth
                        id='stationName'
                        label='Station name'
                        autoFocus
                        {...register('stationName', {
                            required: 'Required field',
                            minLength: {
                                value: 3,
                                message: 'Min length is 3',
                            },
                            maxLength: {
                                value: 40,
                                message: 'Max length is 40',
                            },
                        })}
                        error={!!errors.stationName}
                        helperText={errors.username?.stationName}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='email'
                        required
                        label='Email Address'
                        autoComplete='email'
                        {...register('email', {
                            required: 'Required field',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message:
                                    'Entered value does not match email format',
                            },
                        })}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='temp'
                        required
                        label='Temperature'
                        autoComplete='temp'
                        {...register('temp', {
                            required: 'Required field',
                            min: {
                                value: -20,
                                message:
                                    'Please enter a temperature between -20 and 60.',
                            },
                            max: {
                                value: 60,
                                message:
                                    'Please enter a temperature between -20 and 60.',
                            },
                        })}
                        error={!!errors.temp}
                        helperText={errors.temp?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='windspeed'
                        required
                        label='Windspeed'
                        autoComplete='windspeed'
                        {...register('windspeed', {
                            required: 'Required field',
                            min: {
                                value: 0,
                                message:
                                    'Please enter a windspeed between 0 - 200 m/s.',
                            },
                            max: {
                                value: 200,
                                message:
                                    'Please enter a windspeed between 0 - 200 m/s.',
                            },
                        })}
                        error={!!errors.windspeed}
                        helperText={errors.windspeed?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='humidity'
                        required
                        label='Humidity'
                        autoComplete='humidity'
                        {...register('humidity', {
                            required: 'Required field',
                            min: {
                                value: 0,
                                message:
                                    'Please enter a windspeed between 0 - 100.',
                            },
                            max: {
                                value: 100,
                                message:
                                    'Please enter a windspeed between 0 - 100.',
                            },
                        })}
                        error={!!errors.humidity}
                        helperText={errors.humidity?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='pressure'
                        required
                        label='Pressure'
                        autoComplete='pressure'
                        {...register('pressure', {
                            required: 'Required field',
                            min: {
                                value: 0,
                                message:
                                    'Please enter a pressure between 0 - 3000.',
                            },
                            max: {
                                value: 3000,
                                message:
                                    'Please enter a pressure between 0 - 3000.',
                            },
                        })}
                        error={!!errors.pressure}
                        helperText={errors.pressure?.message}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id='rain'
                        required
                        label='Millimetres of rain in last hour'
                        autoComplete='rain'
                        {...register('rain', {
                            required: 'Required field',
                            min: {
                                value: 0,
                                message:
                                    'Please enter millimetres of rain in last hour between 0 - 1000.',
                            },
                            max: {
                                value: 1000,
                                message:
                                    'Please enter millimetres of rain in last hour between 0 - 1000.',
                            },
                        })}
                        error={!!errors.rain}
                        helperText={errors.rain?.message}
                    />
                </Grid>

                <Button
                    type='submit'
                    variant='contained'
                    disabled={buttonLoading}
                    sx={{
                        mt: 3,
                        mb: 2,
                        height: '40px',
                        borderRadius: '10px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                    }}
                >
                    {!buttonLoading ? (
                        'Upload weather details'
                    ) : (
                        <CircularProgress color='secondary' size={20} />
                    )}
                </Button>
            </Grid>
        </Box>
    );
};

export default AddWeatherInfo;
