export interface TecnologiasItemType {
    nome: string;
    icone: string;
}

export interface HabilidadeDataType {
    categoria: string;
    itens: TecnologiasItemType[];
}

const habilidadeData: HabilidadeDataType[] = [
    {
        categoria: "FrontEnd",
        itens: [
            { nome: "React", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { nome: "Bootstrap", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
            { nome: "Vue.js", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
        ]
    },
    {
        categoria: "BackEnd",
        itens: [
            { nome: "PHP", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
            { nome: "Laravel", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
        ]
    },
    {
        categoria: "Base de Dados",
        itens: [
            { nome: "MySQL", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
            { nome: "PostgreSQL", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        ]
    },
    {
        categoria: "Ferramentas",
        itens: [
            { nome: "VSCode", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
            { nome: "Git", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" },
            { nome: "Docker", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
        ]
    }
];

export default habilidadeData;