import styled from "styled-components";

export const IconElement = styled.div<{ $width: string, $gap: string}>`
    max-width: 100%;
    width: ${props => props.$width};
    height: ${props => props.$width};

    svg {
        width: 100%;
        height: 100%;
        fill: ${({ theme }) => theme.COLORS.secondary};
        transition: fill 0.3s ease, transform 0.3s ease;
    }
        
     &:hover svg {
        fill: ${({ theme }) => theme.COLORS.primary};
        transform: scale(1.05);
    }

    
`