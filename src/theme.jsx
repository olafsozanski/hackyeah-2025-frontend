import {createTheme} from '@mui/material';
import {colors} from './colors.js';

export const theme = createTheme({
    
    palette: {
        primary: {
            main: colors.indigo[700],
        },
        secondary: {
            main: colors.slate[700],
        },
    },
    
    
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    borderBottom: '1px solid ' + colors.slate[300],
                    color: colors.slate[800],
                },
            },
        },
        
        MuiButton: {
            styleOverrides: {
                sizeMedium: {
                    padding: '0.75rem 1rem',
                },
                root: {
                    '&.MuiButton-colorSecondary.MuiButton-outlined': {
                        borderColor: colors.slate[400],
                        color: colors.slate[700],
                    },
                },
            },
            defaultProps: {
                disableElevation: true,
            },
        },
        
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    position: 'static !important',
                    transform: 'none !important',
                    fontWeight: 500,
                    marginBottom: '0.25rem',
                    fontSize: 14,
                    pointerEvents: 'all',
                },
            },
        },

        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '--border-color': colors.slate[400],
                    border: '1px solid var(--border-color)',
                    boxSizing: 'border-box',

                    '&.MuiInputBase-adornedStart': {
                        paddingLeft: '0.75rem',
                    },

                    '&.Mui-error': {
                        '--border-color': 'red',
                    },

                    '&.Mui-focused': {
                        '&.Mui-error': {
                            '--border-color': 'red',
                        },
                    },
                    '&.Mui-disabled': {
                        
                    },
                },
                input: {
                    padding: `0 0.875rem`,
                    height: '2.75rem',
                    fontSize: 14,
                },
                notchedOutline: {
                    display: 'none',
                },
            },
        },
    },
    
    shape: {
        borderRadius: 8,
    },
    
    typography: {
        fontFamily: '"IBM Plex Sans", sans-serif',
        
        button: {
            textTransform: 'none',
            fontSize: '1rem',
        },
        
        h1: {
            fontSize: '2.25rem',
            fontWeight: 'bold',
            letterSpacing: '-0.03em',
        },
    },
});