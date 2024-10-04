import { createTheme, alpha } from '@mui/material/styles';

export default createTheme({
    typography: {
        fontFamily: '"Kumbh Sans", sans-serif',
    },
    palette: {
        primary: {
            main: '#1a0804',
            contrastText: '#FAF6E3',
        },
        secondary: {
            main: '#FFF',
            contrastText: alpha('#310b04', 0.6),
        },
        highlight: {
            main: '#E88b57',
        }
    },
});