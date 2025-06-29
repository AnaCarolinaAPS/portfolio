
import type { ReactElement } from 'react';
import styles from './Botao.module.css';
import { Link } from 'react-router-dom';

type Props = {
    className: 'btn-primary' | 'btn-secondary' ; 
    href: string,
    children: ReactElement,
    newTab?: boolean, //Para abrir em novas telas
    asLink?: boolean, //Caso o Botão seja um LINK do router, não cria como <a> pois o LINK já é u <a>
    size?: 'pequeno' | 'medio' | 'grande'; 
}

const Botao = ({ className, href, children, newTab, asLink = false, size }: Props) => {
    const sizeClass = size ? styles[`tamanho-${size}`] : '';

    const combinedClass = `${styles[className]} ${sizeClass}`;
    
    if (asLink) {
        return (
        <Link to={href} className={combinedClass}>
            {children}
        </Link>
        );
    }

    return (
        <a href={href} className={combinedClass} target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined} >
            {children}
        </a>
    );
};

export default Botao;