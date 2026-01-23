import styled, { css } from "styled-components";

export const ButtonLinkElement = styled.a<{ $style: string, $borderRadius: string, $size: string, $width: string }>`
    width: ${props => props.$borderRadius == 'rounded' ? (props.$size == 'sm' ? '40px' : '48px') : props.$width};
    height: ${props => props.$borderRadius == 'rounded' && (props.$size == 'sm' ? '40px' : '48px')};
    border: 2px solid ${props => props.theme.COLORS.primary};
    border-radius: ${props => props.$borderRadius == 'sm' ? '5px' : props.$borderRadius == 'md' ? '11px' : '50%'};
    color: ${props => props.theme.COLORS.textColor400};
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: .5rem 1rem;

    display: inline-flex;
    color: inherit;
    gap: .5rem;
    text-decoration: none;
    font-weight: bold;

    background-color: transparent;
    transition: ${props => props.$style == 'primary' ? 'transform 0.4s ease, background 0.4s ease' : 'color 0.4s ease, border-color 0.4s ease'};
    ${props => props.$style == 'primary' ? '' : 'overflow: hidden;'};

    &:hover {    
        ${props => props.$style == 'primary' ? 'background: '+ props.theme.COLORS.primary+'80;' : ''};
        ${props => props.$style == 'primary' ? 'transform: scale(1.05);' : ''};
        ${props => props.$style == 'primary' ? '' : 'border: 2px solid '+props.theme.COLORS.secondary};               
        ${props => props.$style == 'primary' ? '' : 'color: '+props.theme.COLORS.buttonColor};                   
        z-index: 0;
    }

    &::before {
        ${props => props.$style == 'secondary' ? 'content: "";' : ''};
    }

    span {
        position: relative;
        z-index: 1;
    }

    ${({ $style }) =>
    $style === 'secondary' &&
        css`
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background: ${props => props.theme.COLORS.secondary};
            transition: width 0.4s ease;
            z-index: 0;
        }

        &:hover::before {
            width: 100%;
        }
        `
    }

    a {
        
    }
`