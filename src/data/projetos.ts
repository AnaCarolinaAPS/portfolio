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
        resumo: "Sistema de logística tipo courrier com controle financeiro, recursos humanos e faturação.",
        descricao: "Trabalhei como desenvolvedora FullStack nesse projeto, criando os conceitos, banco de dados e estrutura. O sistema foi criado em PHP (laravel) com base de dados MySQL com autenticação usando o Breeze e com níveis de acesso usando o Spatie.\nO projeto incluí a landing page e sistema web tipo ERP para controle logístico, financeiro e de recuros humanos da empresa. A ideia principal foi a informatização dos processos internos e trazer mais transparência para os clientes, substituindo o uso de planilhas Excel.\nO sistema também foi aberto ao público, permitindo que os clientes acompanhem os pacotes que estão chegando, visualizem pagamentos realizados e consultem um histórico completo das suas movimentações.",
        tecnologias: [
            { nome: "PHP (Laravel)", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
            { nome: "Bootstrap", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
            { nome: "MySql", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        ],
        recursos: [
            { descricao: "Autenticação de usuários;" },
            { descricao: "Perfis de usuário diferenciados;" },
            { descricao: "Controle de cargas, pacotes e entregas;" },
            { descricao: "Controle de caixas, invoices e vendas;" },
            { descricao: "Controle de funcionários, folhas de pagamentos e férias;" },
            { descricao: "Relatório de carga com gráficos de cargas e lucros;" },
            { descricao: "Relatório financeiro mensal com filtros e gráficos de gastos;" },
        ],
        links: [
            { text: "Visitar", href: "https://powertrade.com.py/", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { text: "Git Hub", href: "https://github.com/AnaCarolinaAPS/powertradesys", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        ],
    },
    {
        id: "capacit",
        titulo: "Capacit",
        status: "Em Andamento",
        imagem: "/assets/images/capacit.png", 
        resumo: "Sistema para uma escola de informática com controle de alunos, turmas e pagamentos.",
        descricao: "Trabalhando atualmente como desenvolvedora FullStack nesse projeto que tem como objetivo substituir o sistema desktop atual da escola, trazendo maior acessibilidade, responsividade e maior customização para as necessidades do cliente.\nO sistema contará com controle de alunos, atendimento/presenças, cursos, módulos e turmas, além de um controle de estoque e vendas para cantina da escola. ",
        tecnologias: [
            { nome: "PHP (Laravel)", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
            { nome: "Bootstrap", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
            { nome: "MySql", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        ],
        recursos: [
            { descricao: "Autenticação de usuários;" },
            { descricao: "Controle de alunos e interessados com relatórios;" },
            { descricao: "Controle de cursos, módulos, certificados e professores; " },
            { descricao: "Controle de turmas, salas e presença;" },
            { descricao: "Controle de contas a receber, a pagar, gastos e caixa;" },
            { descricao: "Controle de estoque, vendas e caixa para cantina." },
        ],
        links: [
            // { text: "Git Hub", href: "https://github.com/AnaCarolinaAPS/powertradesys", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        ],
    },
    {
        id: "edtpy",
        titulo: "Edtpy",
        status: "Concluído",
        imagem: "/assets/images/edtpy.png", 
        resumo: "Loja de produtos para rodeios, construido em wordpress.",
        descricao: "",
        tecnologias: [
            { nome: "PHP", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
            { nome: "CSS", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
            { nome: "Wordpress", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
        ],
        recursos: [
        ],
        links: [
            { text: "Visitar", href: "https://edtpy.com/", icone: "#" },
        ],
    },
    {
        id: "coexma",
        titulo: "Coexma",
        status: "Finalizado",
        imagem: "/assets/images/coexma.png", 
        resumo: "Loja de cadeiras e móveis de escritório, construído em wordpress.",
        descricao: "",
        tecnologias: [
            { nome: "PHP", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
            { nome: "CSS", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
            { nome: "Wordpress", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
        ],
        recursos: [
        ],
        links: [
            { text: "Visitar", href: "https://coexma.com.py/", icone: "#" },
        ],
    },
    {
        id: "novaelectronicos",
        titulo: "NovaElectronicos",
        status: "Finalizado",
        imagem: "/assets/images/no-image.png", 
        resumo: "Vitrine virtual de produtos eletrônicos responsiva.",
        descricao: "Trabalhei como desenvolvedora FullStack nesse projeto, o projeto foi desenvolvido com Backend PHP (Laravel) e Frontend Bootstrap e componentes VueJs. O projeto conta com painel administrativo baseado no template AdminLTE, e possui controle de produtos, usuários, categorias, sendo possível adicionar os icones de categorias e as fotos dos produtos.",
        tecnologias: [
            { nome: "PHP (Laravel)", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
            { nome: "Bootstrap", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
            { nome: "VueJs", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
            { nome: "MySql", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        ],
        recursos: [
            { descricao: "Autenticação de usuários;" },
            { descricao: "Controle de produtos e categorias com fotos;" },
            // { descricao: "Design responsivo para desktop, tablet e celular." },
        ],
        links: [
            { text: "Git Hub", href: "https://github.com/AnaCarolinaAPS/nova", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        ],
    },
    {
        id: "votacao",
        titulo: "Votacao",
        status: "Finalizado",
        imagem: "/assets/images/votacion.png", 
        resumo: "Sistema para controle de assistencia para votação com controle de zonas e locais.",
        descricao: "Trabalhei como desenvolvedora FullStack nesse projeto, o projeto foi desenvolvido com Backend PHP (Laravel) e Frontend Bootstrap e template AdminLte. O projeto consistia no cadastro de pessoas, zonas eletorais e locais. Servia para controle de quantidade de votos e para que o cliente pudesse cobrar os líderes de cada sessão a convocarem pessoas para votarem. Projeto contava com um gráfico de votantes x ausentes.",
        tecnologias: [
            { nome: "PHP (Laravel)", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
            { nome: "Bootstrap", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
            { nome: "MySql", icone: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        ],
        recursos: [
            { descricao: "Autenticação de usuários;" },
            { descricao: "Registro de votantes;" },
            { descricao: "Gráfico Votantes x Ausentes;" },
            { descricao: "Design responsivo para desktop, tablet e celular." },
        ],
        links: [
        ],
    },
];

export default projetosData;