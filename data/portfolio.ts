export const profile = {
  name: 'Gustavo Gomes',
  role: 'Desenvolvedor Full-Stack',
  location: 'Curitiba, PR',
  photo: '/profile1.jpg',
  github: 'https://github.com/eugustavogomes',
  linkedin: 'https://linkedin.com/in/eusougustavogomes',
  email: 'gustavo@gustavogomesdev.com',
  whatsapp: 'https://wa.me/5569999209333',
  resumeUrl: '/curriculo.pdf',
}

export const skills = [
  {
    category: 'Front-end',
    items: ['React', 'React Native', 'Next.js', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Bootstrap', 'Vite'],
  },
  {
    category: 'Back-end',
    items: ['C#', '.NET / ASP.NET Core', 'REST APIs', 'JWT / OAuth', 'Node.js', 'Express', 'Razor'],
  },
  {
    category: 'Banco de Dados',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
  },
  {
    category: 'DevOps & Qualidade',
    items: ['Git / GitHub', 'Docker', 'Nginx', 'CI/CD', 'xUnit', 'RabbitMQ', 'SOLID', 'Clean Code'],
  },
  {
    category: 'AI & Data',
    items: ['RAG', 'LLM Integration', 'GPT-4 / Claude', 'Prompt Engineering', 'Semantic Search'],
  },
]

export const projects = [
  {
    name: 'SimpleFinance',
    description:
      'Dashboard para controle e visualização de movimentações financeiras com back-end em .NET e front-end em React.',
    stack: ['C#', '.NET', 'Entity Framework', 'PostgreSQL', 'React'],
    github: 'https://github.com/eugustavogomes/SimpleFinance',
    demo: '',
  },
  {
    name: 'NotaFiscalApp',
    description:
      'Sistema de gerenciamento de notas fiscais com arquitetura de microsserviços, Angular no frontend e ASP.NET Core no backend.',
    stack: ['.NET 8', 'ASP.NET Core', 'Angular', 'Docker', 'TypeScript', 'Swagger'],
    github: 'https://github.com/eugustavogomes/NotaFiscalApp',
    demo: '',
  },
  {
    name: 'EcommerceAPI',
    description:
      'API de e-commerce com arquitetura de microsserviços, desenvolvida com ASP.NET Core e Entity Framework.',
    stack: ['.NET 8', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL'],
    github: 'https://github.com/eugustavogomes/EcommerceAPI',
    demo: '',
  },
  {
    name: 'ChatApp (WhatsApp Clone)',
    description:
      'Clone fullstack de WhatsApp com bot de IA integrado via Cohere AI — mensagens em tempo real com inteligência artificial.',
    stack: ['Node.js', 'Cohere AI', 'WebSocket', 'Fullstack'],
    github: 'https://github.com/eugustavogomes/chat-api',
    demo: '',
  },
  {
    name: 'AbastecyApp',
    description:
      'App mobile que protege motoristas contra fraudes em postos de combustível, cruzando dados públicos do Procon e da ANP.',
    stack: ['React Native', 'ANP API', 'Procon Data'],
    github: 'https://github.com/eugustavogomes/AbastecyApp',
    demo: '',
  },
  {
    name: 'Animal Care System',
    description:
      'Sistema web para gerenciamento de animais, cuidados e cuidadores, com foco em escalabilidade e usabilidade.',
    stack: ['Web', 'CRUD', 'React', 'Node.js'],
    github: 'https://github.com/eugustavogomes/animal-care-system',
    demo: '',
  },
]

export const experience = [
  {
    company: 'Myth.dev',
    role: 'Desenvolvedor Full-Stack',
    period: 'Jun 2023 – Abr 2024',
    bullets: [
      'Reconstruí a interface do dashboard em React + TypeScript durante migração do legado, melhorando navegabilidade e padronizando UI/UX.',
      'Criei uma API interna em C# / ASP.NET Core que varre arquivos React, identifica chaves de tradução e gera JSONs — reduziu o processo de localização em até 80%.',
      'Otimizei fluxos críticos reduzindo múltiplas requests por ação para 1, diminuindo tráfego de rede e complexidade do cliente.',
      'Implementei integrações com APIs de IA usando prompt templates, envio de contexto relevante e controle de tokens.',
      'Debugei problemas de performance com Chrome DevTools (Network, Rendering profiler, Lighthouse).',
    ],
    stack: ['React', 'TypeScript', 'C#/.NET', 'MySQL', 'JWT', 'OAuth', 'CI/CD', 'Scrum'],
  },
  {
    company: 'Autônomo',
    role: 'Soluções Digitais & Tráfego Pago',
    period: 'Mai 2022 – Abr 2025',
    bullets: [
      'Desenvolvi sites responsivos com WordPress, HTML e boas práticas de SEO, ajustando performance para conversão.',
      'Gerenciei campanhas de Google Ads e Facebook Ads com foco em performance, testes A/B e análise de dados.',
      'Implementei CRMs e automações para pequenos negócios, integrando ferramentas de marketing e vendas.',
      'Automatizei processos com Zapier, Make e n8n, reduzindo tarefas manuais e gargalos operacionais.',
    ],
    stack: ['HTML/CSS', 'WordPress', 'Google Ads', 'Facebook Ads', 'Zapier', 'Make', 'n8n'],
  },
]

export const education = [
  {
    course: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Cruzeiro do Sul',
    period: 'Jan 2025 – Jan 2027',
    status: 'Cursando',
  },
]

export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Avançado' },
]

export const certificates = [
  { name: 'Programador Full-Stack', issuer: 'OneBitCode' },
  { name: 'Lógica de Programação', issuer: 'DoDev School' },
  { name: 'C# Lógica de Programação e Algoritmos', issuer: 'Udemy' },
]
