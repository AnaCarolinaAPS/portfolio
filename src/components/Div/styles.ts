import styled from "styled-components";

export const DivElement = styled.div<{ $width: string, $height: string, $fontSize: string,  $display: string, $alignItems: string, $justifyContent: string, $flexDirection: string, $gap: string, $backgroundColor: string, $margin: string, $padding: string }>`
    width: ${props => props.$width};
    height: ${props => props.$height};
    display: ${props => props.$display};
    align-items: ${props => props.$alignItems};
    justify-content: ${props => props.$justifyContent};
    flex-direction: ${props => props.$flexDirection};
    background-color: ${props => props.$backgroundColor};
    gap: ${props => props.$gap};
    height: auto;
    flex-wrap: wrap;
    margin: ${props => props.$margin};
    padding: ${props => props.$padding};

    ${props => props.$fontSize && `font-size: ${props.$fontSize == 'sm' ? props.theme.FONT_SIZES.sm : props.$fontSize == 'md' ? props.theme.FONT_SIZES.md : props.$fontSize == 'lg' ? props.theme.FONT_SIZES.lg : props.theme.FONT_SIZES.xl };`}

    @media (max-width: 768px) {
        flex: 0 0 100%; /* Empilha os cards em telas pequenas */
    }
`