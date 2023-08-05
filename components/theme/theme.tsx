import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

const purple = '#644B91';
const dark = '#212121';

const darkPink = '#8C7CE0';
const pink = '#D34D91';
const grey = '#BBBCBC';
const lightBlue = '#ACB0CE';
const navyBlue = '#040406';
const white = '#fff';
const black = '#000';
const yellow = '#FFDD00';

interface LayoutProps {
  children: React.ReactNode;
}

const ThemeWrapper = (props: LayoutProps) => {
  const getDesignTokens = (mode: string): object => ({
    mode,
    direction: 'rtl',

    palette: {
      common: {
        navyBlue: navyBlue,
        pink: pink,
        darkPink: darkPink,
        gray: grey,
        purple: purple,
        white: white,
        black: black,
        lightBlue: lightBlue,
        yellow: yellow,
      },
      primary: {
        main: '#ff6b6b',
      },
      secondary: {
        main: '#f1f5f9',
      },
    },
    typography: {
      fontFamily: ['BYekan'].join(','),
      h1: {
        fontWeight: 'bold',
        fontSize: '2.5rem',
        color: dark,
        lineHeight: 1.5,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: dark,
        lineHeight: 1.5,
      },
      h3: {
        fontWeight: 500,
        fontSize: '1.8rem',
        color: dark,
      },
      h4: {
        fontSize: '1.6rem',
        color: dark,
        fontWeight: 'normal',
      },
      h5: {
        fontWeight: 'normal',
        fontSize: '1.4rem',
        color: dark,
        lineHeight: 1,
      },
      h6: {
        fontWeight: 'normal',
        fontSize: '1.2rem',
        color: dark,
        lineHeight: 1,
      },
      subtitle1: {
        fontSize: '1rem',
        fontWeight: 300,
        color: dark,
      },
      subtitle2: {
        color: dark,
        fontWeight: 300,
        fontSize: '0.9rem',
        lineHeight: 1,
      },
      body1: {
        fontSize: '.75rem',
        color: dark,
        fontWeight: 'normal',
        // lineHeight: 1.5,
      },
      body2: {
        fontSize: '0.75rem',
        color: dark,
        fontWeight: 'normal',
        // lineHeight: 1.5,
      },
      caption: {
        fontSize: '1rem',
        fontWeight: 300,
        color: dark,
      },
    },
    components: {
      MuiFilledInput: {
        styleOverrides: {
          input: {
            backgroundColor: '#f8f8f8',
          },
          root: {
            '&::before': {
              borderColor: '#84848457',
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {
            color: 'red',
          },
          root: {
            color: '#48659b',
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            // backgroundColor: "#f8f8f8",
            border: 'none',
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            backgroundColor: '#f8f8f8',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: ` 
      @font-face {
        font-family: "BYekan";
        src: url('./assets/fonts/at9.eot') format("eot"),
        url('./assets/fonts/at9.ttf') format("truetype"),
        url('./assets/fonts/at9.woff') format('woff'),
        url('./assets/fonts/at9.woff2') format('woff2');
      }
        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }
       
        
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          padding: 0;
        }
        a {
          text-decoration: none;
          color: #000;
        }
        body {
          background-color: #fff;
          box-sizing: border-box;
          overflow: scroll;
          overflow-x: hidden;
          font-family:"BYekan;
        }
        `,
      },
    },
  });

  const theme = createTheme(getDesignTokens('light'));

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default ThemeWrapper;
