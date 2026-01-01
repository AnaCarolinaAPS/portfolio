import styled from "styled-components";

export const TimeLine = styled.div`
    position: relative;
    max-width: 90%;
    margin: 50px auto;
    padding: 20px 0;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 3px;
        background: ${props => props.theme.COLORS.primary};
        transform: translateX(-50%);
    }

    @media (max-width: 1264px) {
        margin: 20px auto;

        &:before {
            display: none;
        }
    }
`

export const TimelineItem = styled.div<{ $isLeft: boolean }>`
    position: relative;
    width: 50%;
    padding: 20px 20px;
    box-sizing: border-box;
    transition: all 0.3s ease;
    text-align: ${props => props.$isLeft == true ? 'right': 'left' };

    ${props => props.$isLeft == true ? 'left: 0;': 'left: 50%;' } 

    @media (max-width: 1264px) {
        width: 100%;
        left: 0;
        text-align: left;
        padding: 20px;
    }
    
`

export const CirclePoint = styled.div<{ $isLeft: boolean }>`
    position: absolute;
    top: 5rem;
    width: ${props => props.theme.FONT_SIZES.lg};
    height: ${props => props.theme.FONT_SIZES.lg};
    background: radial-gradient(circle, ${props => props.theme.COLORS.secondary}, ${props => props.theme.COLORS.secondaryHover});
    border-radius: 50%;
    z-index: 1; 

    ${props => props.$isLeft == true ? 'right: calc(-1 * '+props.theme.FONT_SIZES.lg+' / 2);': 'left: calc(-1 * '+props.theme.FONT_SIZES.lg+' / 2);' } 

    @media (max-width: 1264px) {
        display: none;
        text-align: left;
        left: 0;
    }
`

export const DescriptionList = styled.ul`
    padding-left: 1.2rem;
    list-style-type: disc;
    list-style-position: outside;
    text-align: left;
`