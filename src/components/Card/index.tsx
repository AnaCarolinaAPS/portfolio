import type { CSSProperties, ReactElement } from 'react';
import { CardBox, CardInner, CardOverlay, CardContent } from "./styles"

type Props = {
    children: ReactElement,
    style?: CSSProperties,
}

const Card = ({ children, style }: Props) => {
    return (
        <CardBox data-aos="fade-up-right" data-aos-duration="1000" style={style}>
            <CardInner>
                <>
                    <CardOverlay></CardOverlay>
                    <CardContent>
                        {children}
                    </CardContent> 
                </>
            </CardInner>
        </CardBox>
    );
};

export default Card;