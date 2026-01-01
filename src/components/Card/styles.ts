import styled from "styled-components";

export const CardBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    margin: 5px;

    border-radius: 12px;
    overflow: hidden;
    position: relative;
    background: linear-gradient(to bottom right, ${({ theme }) => theme.COLORS.background} 90%, ${({ theme }) => theme.COLORS.background});
    transition: box-shadow 0.3s ease;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

    &:hover {
        box-shadow: 0 0 15px ${({ theme }) => theme.COLORS.primary}80; /* primary no hover */
    }

`

export const CardInner = styled.div`
    position: relative;
    height: 100%;
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    position: relative;
    padding: 20px;
    z-index: 2;
`

export const CardOverlay = styled.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(
    to bottom right,
        ${({ theme }) => theme.COLORS.primary}33,   /* azul claro */
        ${({ theme }) => theme.COLORS.purple}33,   /* roxo lavanda */
        ${({ theme }) => theme.COLORS.secondary}33   /* rosa vibrante */
    );
    pointer-events: none;

    opacity: 0.7;
    transition: opacity 0.3s ease;
    z-index: 1; 
`