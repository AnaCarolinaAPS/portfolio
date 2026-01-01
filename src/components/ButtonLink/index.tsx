
import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { ButtonLinkElement } from './styles';


type Props = {
    style?: 'primary' | 'secondary' | 'default', 
    href: string,
    children: ReactElement,
    newTab?: boolean, //Para abrir em novas telas
    size?: 'sm' | 'md' ,
    borderRadius?: 'sm' | 'md' | 'rounded',
    width?: string,
    asLink?: boolean, //Caso o Botão seja um LINK do router, não cria como <a> pois o LINK já é u <a>
}

export const ButtonLink = ({ href, children, newTab, asLink = false, width='auto', style='default', size = 'sm', borderRadius = 'sm' }: Props) => {
     if (asLink) {
        return (
            <ButtonLinkElement 
                $size={size}
                $borderRadius={borderRadius}
                $width={width}
                $style={style}
            >
                <Link to={href} target={newTab ? '_blank' : undefined}>
                    {children}
                </Link>
            </ButtonLinkElement>
        );
    }

    return (
            <ButtonLinkElement 
                $size={size}
                $borderRadius={borderRadius}
                $width={width}
                $style={style}
            >
                <a href={href} target={newTab ? '_blank' : undefined}
                    rel={newTab ? 'noopener noreferrer' : undefined} >
                    {children}
                </a>
            </ButtonLinkElement>
        );

};