import styled from "styled-components";

export const CardContent = styled.div`
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1; /* se quiser mais controle */

    h3 {
        font-size: ${({ theme }) => theme.FONT_SIZES.lg};
        margin-top: 1rem;
        color: ${({ theme }) => theme.COLORS.secondary};
        font-weight: bold;
    }

    p {        
        color: ${({ theme }) => theme.COLORS.textColor400};
        font-size: font-size: ${({ theme }) => theme.FONT_SIZES.lg};
        margin-top: 1rem;
        line-height: 1.4;
        text-align: center;
    }

    &:hover {
        transform: scale(1.05);
    }
`

export const CardImage = styled.div`
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`

export const CardLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto; /* força para base */
    padding-bottom: 20px;    
`