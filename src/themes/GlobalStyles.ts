import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        overflow: hidden;
    }
    /* Firefox */
    * {
        scrollbar-width: thin;
        scrollbar-color:
        ${({ theme }) => theme.COLORS.scrollbarThumb}
        ${({ theme }) => theme.COLORS.scrollbarTrack};
    }

    /* Chrome, Edge, Safari */
    *::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    *::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.COLORS.scrollbarTrack};
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.scrollbarThumb};
        border-radius: 10px;
        border: 2px solid ${({ theme }) => theme.COLORS.scrollbarTrack};
    }

    *::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.COLORS.scrollbarThumbHover};
    } 
`;
