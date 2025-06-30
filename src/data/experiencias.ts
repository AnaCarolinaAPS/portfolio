export interface DescricaoJobType {
    descricao: string;
}

export interface ExperienciasDataType {
    ano: string;
    funcao: string;
    empresa: string;
    descricao: DescricaoJobType[];
}

const experienciasData: ExperienciasDataType[] = [
    {
        ano: "Desde Nov/2020",
        funcao: "Desenvolvedor Web",
        empresa: "Autônomo - Freelance | Remoto",
        descricao: [
            { descricao: "Desenvolvi vitrines virtuais para empresas, com foco na apresentação de produtos, utilizando PHP, VueJS e MySQL;" },
            { descricao: "Colaborei no desenvolvimento de site de compras em wordpress." },
        ],    
    },
    {
        ano: "Desde Nov/2017",
        funcao: "Gerente Administrativo Financeiro",
        empresa: "PowerTrade.Py | Ciudad del Este - Paraguay  ",
        descricao: [
            { descricao: "Desenvolvi e implementei sistema ERP com foco em gestão financeira e controle logístico, utilizando PHP (Laravel), MySQL, HTML5 e Bootstrap;" },
            { descricao: "Liderei a equipe operacional, garantindo a qualidade dos processos;" },
            { descricao: "Treinei novos colaboradores e clientes nos fluxos operacionais e no uso do ERP." },
        ],    
    },
    {
        ano: "Out/2014 a Dez/2015",
        funcao: "Qualidade de Software Júnior",
        empresa: "IBM Brasil | Porto Alegre - Brasil ",
        descricao: [
            { descricao: "Realizei testes unitários em projetos da equipe de Business Intelligence;" },
            { descricao: "Apoiei a análise funcional e a elaboração de documentos técnicos para o time de desenvolvimento." },
        ],    
    },
    {
        ano: "Jan/2014 a Set/2014",
        funcao: "Desenvolvedor ADVPL (Estágio)",
        empresa: "TOTVS RS | Porto Alegre - Brasil ",
        descricao: [
            { descricao: "Desenvolvi soluções de pequeno porte com ADVPL, linguagem proprietária do sistema ERP Protheus;" },
            { descricao: "Criei uma ferramenta para geração de telas personalizadas em ADVPL." },
        ],    
    },
    {
        ano: "Ago/2011 a Jan/2014",
        funcao: "Desenvolvedor Júnior",
        empresa: "CTD Cia de Impressão Digital | Canoas - Brasil ",
        descricao: [
            { descricao: "Scripts personalizados de impressão (CAPS), ferramentas em Visual Basic 6 e C#;" },
            { descricao: "Nivelamento técnico de desenvolvedores juniores." },
        ],    
    },
    {
        ano: "Abr/2010 a Jul/2010",
        funcao: "Professora de Informática (Estágio)",
        empresa: "Escola Profissional de Informática | Canoas - Brasil ",
        descricao: [
            { descricao: "Ministrar aulas em laboratório de informática utilizando ferramenta de ensino individual, auxiliando os alunos com eventuais dúvidas ou curiosidades sobre os cursos ministrados (Pacote Office)." },
        ],    
    },
]

export default experienciasData;