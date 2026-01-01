import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;
    background-color: ${props => props.theme.COLORS.background};
`

export const Content = styled.div`
    flex: 1;
    width: 100%;
`

export const NavbarContent = styled.div`
    background-color: ${props => props.theme.COLORS.navbarBackground};
    backdrop-filter: blur(6px); /* deixa o fundo "opaco" e elegante */
    position: sticky; /* fixa no topo */
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    height: ${props => props.theme.VH_SIZES.md};
    display: flex;
    flex-direction: column;
    justify-content: center; /* Alinha no eixo vertical */    
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);

    @media (max-width: 768px) {
        box-shadow: none;
    }
`

export const BodyContent = styled.div`
    padding-top: 2rem;
    padding-left: 10rem;
    padding-right: 10rem;
    height: calc(100vh - ${props => props.theme.VH_SIZES.md});
    background-color: ${props => props.theme.COLORS.background};
    overflow-y: auto;

    color: ${props => props.theme.COLORS.textColor400};

    /* Títulos */
    h1 {
        font-size: ${({ theme }) => theme.FONT_SIZES.xxxl};
        font-weight: 800;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: ${({ theme }) => theme.FONT_SIZES.xxl};
        font-weight: 700;
        margin: 2rem 0 1rem;
    }

    h3 {
        font-size: ${({ theme }) => theme.FONT_SIZES.xl};
        font-weight: 700;
        margin: 2rem 0 1rem;
    }

    /* utilities */
    .text-lg {
        font-size: ${({ theme }) => theme.FONT_SIZES.lg};
    }

    .text-md {
        font-size: ${({ theme }) => theme.FONT_SIZES.md};
    }

    .text-sm {
        font-size: ${({ theme }) => theme.FONT_SIZES.sm};
    }
    
    .color-primary {
        color: ${({ theme }) => theme.COLORS.primary};
    }

    .color-secondary {
        color: ${({ theme }) => theme.COLORS.secondary};
    }

    .text-center { text-align: center; }
    .text-justify { text-align: justify; }

    
    .section-divider {
        height: 2px;
        width: 80%;
        background: linear-gradient(to right, ${({ theme }) => theme.COLORS.primary}, ${({ theme }) => theme.COLORS.secondary}); /* ou qualquer cor */
        margin: 5rem auto; /* Centraliza horizontalmente */

        transform-origin: left;
        animation: growLine 0.8s ease-out forwards;

        @keyframes growLine {
            from {
                transform: scaleX(0);
            }
            to {
                transform: scaleX(1);
            }
        }
    }

    @media (max-width: 768px) {
        padding-top: ${props => props.theme.VH_SIZES.md};
        padding-left: 2rem;
        padding-right: 2rem;
    }
`