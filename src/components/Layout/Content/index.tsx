import { Body, Container,  Header, HeaderInfo, HeaderSubtitle, HeaderTitle } from "./styles"

type Props = {
    children: React.ReactNode,
    title: string,
    subTitle?: string,
}

export const PageLayout = ({ children, title, subTitle }: Props) => {
    return (
        <Container>
            <Header>
                <HeaderInfo>
                    <HeaderTitle>{title}</HeaderTitle>
                    {subTitle &&
                        <HeaderSubtitle>{subTitle}</HeaderSubtitle>
                    }                    
                </HeaderInfo>          
            </Header>        
            <Body>                    
                {children}
            </Body>  
        </Container>
    )
}