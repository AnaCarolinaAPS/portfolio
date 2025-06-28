
import type { ReactElement } from 'react';
import styles from './Botao.module.css';
import { Link } from 'react-router-dom';

type Props = {
    className: string,
    href: string,
    children: ReactElement,
    newTab?: boolean, //Para abrir em novas telas
    asLink?: boolean, //Caso o Botão seja um LINK do router, não cria como <a> pois o LINK já é u <a>
}

const Botao = ({ className, href, children, newTab, asLink = false }: Props) => {
    const classes = styles[className];
    if (asLink) {
        return (
        <Link to={href} className={classes}>
            {children}
        </Link>
        );
    }

    return (
        <a href={href} className={`${styles[className]}`} target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined} >
            {children}
        </a>
    );
};

export default Botao;