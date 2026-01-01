export interface ContatoItemType {
    nome: string;
    linkContato: string;
    icone: string;
}

export interface TeconologiasDataType {
    nome: string;
    icone: string;
}

export interface SkillsDataType {
    nivel: string;
    tecnologias: TeconologiasDataType[];
}

export interface SobremimDataType {
    resumo: string;
    linkcv: string;
    itens: ContatoItemType[];
    skills: SkillsDataType[];
}

const sobremimData: SobremimDataType = {
    resumo: "Minha trajetória profissional na tecnologia começou em 2010 e ao longo dos anos tive a oportunidade de trabalhar com diversas áreas, como ensino, desenvolvimento desktop e web, além de testes de software e análise. Tive oportunidade de trabalhar com diversas linguagens, incluindo tecnologias proprietárias.\nNos últimos sete anos, desenvolvi um sistema ERP completo em PHP (laravel) apesar da minha principal aérea de atuação estar focada na administrativa e financeiro da empresa em que trabalho. Pude com isso, informatizar 100% os processos logísticos e financeiros da empresa.\nNo último ano venho me dedicando ao front-end, aprimorando minhas habilidades em React e VueJS. Estou muito animada para atuar como desenvolvedora júnior. Amo aprender coisas novas, tanto no âmbito profissional quanto pessoal. Compartilhar conhecimento e construir soluções que facilitem processos é algo que considero muito satisfatório, seja causando pequenos ou grandes impactos.",  
    linkcv: "/assets/Ana-CV.pdf",
    itens: [
        { nome: "linkedin", linkContato:"https://www.linkedin.com/in/ana-carolina-aps/", icone: "/assets/icons/brand-linkedin.svg" },
        { nome: "github", linkContato:"https://github.com/AnaCarolinaAPS", icone: "/assets/icons/brand-github.svg" },
        { nome: "email", linkContato:"mailto:anacarolinapv@gmail.com", icone: "/assets/icons/mail.svg" },
        { nome: "whatsapp", linkContato:"https://wa.me/555180194413", icone: "/assets/icons/brand-whatsapp.svg" },
    ],
    skills: [
        {
            nivel: "Intermediário",
            tecnologias: [
                { nome: "Bootstrap", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
                { nome: "Laravel", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
                { nome: "MySQL", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
                { nome: "PHP", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
            ]
        },
        {
            nivel: "Básico",
            tecnologias: [
                { nome: "React", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
                { nome: "PostgreSQL", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
            ]
        },
        {
            nivel: "Estudando",
            tecnologias: [
                { nome: "Docker", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
                { nome: "Tailwindcss", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
                { nome: "Vue.js", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
            ]
        }
    ]
};

export default sobremimData;