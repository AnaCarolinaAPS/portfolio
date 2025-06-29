export interface TecnologiasItemType {
    nome: string;
    icone: string;
}

export interface RecursosItemType {
    descricao: string;
}

export interface LinksItemType {
    icone: string;
    text: string;
    href: string;
}

export interface ProjetosDataType {
    id: string;
    titulo: string;
    status: string;
    imagem: string;
    resumo: string;
    descricao: string;
    tecnologias: TecnologiasItemType[];
    recursos: RecursosItemType[];
    links: LinksItemType[];
}

const projetosData: ProjetosDataType[] = [
    {
        id: "powertrade",
        titulo: "PowerTrade.py",
        status: "Em Andamento",
        imagem: "/assets/images/powertrade.png", 
        resumo: "Sistema completo de logística com controle financeiro, funcionários e faturação.",
        descricao: "Desenvolvedora Full Stack com experiência em sistemas ERP e vitrines virtuais, com forte atuação em PHP (Laravel) e bancos de dados MySQL. Atualmente ampliando conhecimentos em frameworks modernos como React e Vue.js para retomar atuação na área de programação.",
        tecnologias: [
            { nome: "React", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { nome: "Bootstrap", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
            { nome: "Vue.js", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
        ],
        recursos: [
            { descricao: "User Auth - Sign up/sign in via Firebase email/password authentication." },
            { descricao: "Dashboard - Simple, intuitive interface for managing interviews." },
            { descricao: "Fully responsive design across desktop, tablet, and mobile" },
        ],
        links: [
            { text: "Git Hub", href: "https://github.com/AnaCarolinaAPS/powertradesys", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        ],
    },
    {
        id: "capacit",
        titulo: "Capacit",
        status: "Em Andamento",
        imagem: "/assets/images/capacit.png", 
        resumo: "Sistema para uma escola de informática com controle de alunos, turmas e pagamentos.",
        descricao: "Desenvolvedora Full Stack com experiência em sistemas ERP e vitrines virtuais, com forte atuação em PHP (Laravel) e bancos de dados MySQL. Atualmente ampliando conhecimentos em frameworks modernos como React e Vue.js para retomar atuação na área de programação.",
        tecnologias: [
            { nome: "React", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { nome: "Bootstrap", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
            { nome: "Vue.js", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
        ],
        recursos: [
            { descricao: "User Auth - Sign up/sign in via Firebase email/password authentication." },
            { descricao: "Dashboard - Simple, intuitive interface for managing interviews." },
            { descricao: "Fully responsive design across desktop, tablet, and mobile" },
        ],
        links: [
            { text: "Git Hub", href: "https://github.com/AnaCarolinaAPS/powertradesys", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        ],
    },
    {
        id: "edtpy",
        titulo: "Edtpy",
        status: "Concluído",
        imagem: "/assets/images/edtpy.png", 
        resumo: "Loja de produtos para rodeios, construido em wordpress.",
        descricao: "Desenvolvedora Full Stack com experiência em sistemas ERP e vitrines virtuais, com forte atuação em PHP (Laravel) e bancos de dados MySQL. Atualmente ampliando conhecimentos em frameworks modernos como React e Vue.js para retomar atuação na área de programação.",
        tecnologias: [
            { nome: "React", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { nome: "Bootstrap", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
            { nome: "Vue.js", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
        ],
        recursos: [
            { descricao: "User Auth - Sign up/sign in via Firebase email/password authentication." },
            { descricao: "Dashboard - Simple, intuitive interface for managing interviews." },
            { descricao: "Fully responsive design across desktop, tablet, and mobile" },
        ],
        links: [
            { text: "Git Hub", href: "https://github.com/AnaCarolinaAPS/powertradesys", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        ],
    },
];

export default projetosData;