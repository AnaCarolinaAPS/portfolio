import type { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
    COLORS: {
        /* Application */
        primary: '#00d8ff',
        primaryHover: '#00B5D4',
        primaryBackgroundExtraLight: '#00EAFF',
        secondary: '#F06292',
        secondaryHover: '#C55178',
        secondaryBackgroundExtraLight: '#F096BF',
        purple: '#8284FA',
        purpleDark: '#5E60CE',
        background: '#060b26',
        textColor400: '#D9D9D9',
        textColor500: '#F2F2F2',
        borderColor: '#2b374a',
        danger: '#D1493D',
        success: '#2B825C',
        warning: '#eba800',
        info: '#21498a',
        white: '#FFFFFF',

        /* Application Components */
        buttonBackground: '#473FCE',
        buttonColor: '#FFFFFF',
        buttonHover: '#4F46E5',
        inputBackground: 'transparent',
        inputBackgroundHover: 'transparent',
        inputColor: '#cfcfcf',
        inputBorderColor: '#4F46E573',
        inputBorderColorFocus: '#4F46E5',
        inputPlaceholderColor: '#a3a3a3',
        tableHeaderBackground: '#191A38',
        tableHeaderBorderColor: '#2b374a',
        tableRowHover: '#14142fab',

        /* Layout */
        navbarBackground: 'rgba(6, 11, 39, 0.1)',
        navbarColor: '#F2F2F2',
        navbarBackgroundHover: '#F06292',
        scrollbarThumb: '#F06292',
        scrollbarTrack: '#060b26',
        scrollbarThumbHover: '#F06292',
    },
    FONT_SIZES: {
        sm: '.9rem',
        md: '1rem',
        lg: '1.3rem',
        xl: '1.6rem',
        xxl: '2rem',
        xxxl: '2.5rem',
    },
    VH_SIZES: {
        sm: '10vh',
        md: '15vh',
        lg: '20vh',
        xl: '25vh',
        xxl: '30vh',
    },
    VW_SIZES: {
        sm: '10vw',
        md: '15vw',
        lg: '20vw',
        xl: '25vw',
        xxl: '30vw',
    },
}