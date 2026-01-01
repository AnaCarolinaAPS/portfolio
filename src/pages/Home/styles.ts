import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`

export const ResponsiveImage = styled.img`
    max-width: 100%;
    height: auto;
    display: block;
`

export const HabilidadesIcon = styled.img`
    max-width: 100%;
    width: 60px;
    height: 60px;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
        filter: drop-shadow(0 0 2em ${props => props.theme.COLORS.primary});
    }
`
