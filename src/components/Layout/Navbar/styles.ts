import styled from "styled-components";
import { Link as LinkRouter } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    user-select: none;
    padding: 1rem 10rem;

    @media (max-width: 600px) {
        padding: 1rem 2rem;
    }
`

export const LeftSide = styled.div``

export const RightSide = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    font-size: ${props => props.theme.FONT_SIZES.xl};
    color: ${props => props.theme.COLORS.navbarColor};
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.COLORS.navbarBackgroundHover};
    }
`

export const TextoLogo = styled(LinkRouter)`
    text-decoration: none;
    list-style: none;
    display: flex;
    cursor: pointer;
    font-size: ${props => props.theme.FONT_SIZES.xxl};
    font-weight: bold;
    color: ${props => props.theme.COLORS.primary};

    &:hover {
        color: ${props => props.theme.COLORS.primaryHover};
    }

    /* quando o link estiver em hover, afeta o span interno */
    &:hover span {
        color: ${({ theme }) => theme.COLORS.secondaryHover};
        transition: color 0.3s ease;
    }
`
export const TextoLogoPrimary = styled.span`
    color: ${props => props.theme.COLORS.primary};
`
export const TextoLogoSecond = styled.span`
    color: ${props => props.theme.COLORS.secondary};

    &:hover {
        color: ${props => props.theme.COLORS.secondaryHover};
    }
`

export const HamburgerButton = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    font-size: ${props => props.theme.FONT_SIZES.xl};
    color: ${props => props.theme.COLORS.navbarColor};
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.COLORS.navbarBackgroundHover};
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

export const HeaderIcon = styled(GiHamburgerMenu)`
    font-size: ${props => props.theme.FONT_SIZES.md};
    color: ${props => props.theme.COLORS.navbarColor};
`

export const Navigation = styled.nav<{ $expanded: boolean }>`
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex: 1;
    display: flex;

    @media (max-width: 768px) {
        display: ${({ $expanded }) => ($expanded ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        padding: 1rem 0;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);     
        
        background-color: ${props => props.theme.COLORS.navbarBackground};
    }
`

export const Link = styled(LinkRouter)`
    text-decoration: none;
    list-style: none;
    display: flex;
    cursor: pointer;
`

export const NavigationItem = styled.li<{ $isActive: boolean }>`
    text-decoration: none;
    color: ${({ theme, $isActive }) =>
    $isActive ? theme.COLORS.secondary : theme.COLORS.navbarColor};
    font-size: ${props => props.theme.FONT_SIZES.lg};
    font-weight: bold;
    position: relative;
    padding-bottom: 4px; /* espaço para o sublinhado */

    /* ::after (sublinhado) */
    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: ${({ $isActive }) => ($isActive ? '100%' : '0%')};
        height: 2px;
        background-color: ${({ theme }) => theme.COLORS.primary};
        transition: width 0.3s ease-in-out;
    }

    /* hover */
    &:hover {
        color: ${({ theme }) => theme.COLORS.secondary};
    }

    &:hover::after {
        width: 100%;
    }
`

export const NavigationItemLabel = styled.span`
    display: flex;
    align-items: center;
    font-weight: 700;
    white-space: nowrap;
`