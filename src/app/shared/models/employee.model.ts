export const Roles = {
    developer: { id: 'developer', description: 'Analista de Desenvolvimento', color: '#22a7f0' },
    designer: { id: 'designer', description: 'UI/UX Designer', color: '#db0a5b' },
    tester: { id: 'tester', description: 'Analista de Testes', color: '#fad859' },
    devOps: { id: 'devOps', description: 'Analista de DevOps', color: '#f15a22' },
    requirementsAnalyst: { id: 'requirementsAnalyst', description: 'Analista de Requisitos', color: '#2ecc71' },
    projectManager: { id: 'projectManager', description: 'Gerente de Projetos', color: '#000000' },
    executiveManager: { id: 'executiveManager', description: 'Gerente Executivo', color: '#a537fd' }
};

export const SeniorityLevels = {
    estagiario: { id: 'estagiario', description: 'Estagiário' },
    junior: { id: 'junior', description: 'Júnio' },
    pleno: { id: 'pleno', description: 'Pleno' },
    senior: { id: 'senior', description: 'Senior' },
    master: { id: 'master', description: 'Master' },
    gerente: { id: 'gerente', description: 'Gerente' }
};

export const Skills = {
    // Dev
    angular: { id: 'angular', description: 'Angular', role: Roles.developer, score: 5 },
    react: { id: 'react', description: 'React', role: Roles.developer, score: 5 },
    angularjs: { id: 'angularjs', description: 'AngularJS', role: Roles.developer, score: 5 },
    css: { id: 'css', description: 'CSS', role: Roles.developer, score: 5 },
    javascript: { id: 'javascript', description: 'Javascript', role: Roles.developer, score: 5 },
    java: { id: 'java', description: 'Java', role: Roles.developer, score: 5 },
    prototipacao: { id: 'prototipacao', description: 'Prototipação', role: Roles.designer, score: 5 },

    // Design
    ui: { id: 'ui', description: 'UI', role: Roles.designer, score: 5 },
    ux: { id: 'ux', description: 'UX', role: Roles.designer, score: 5 },

    // Test
    jest: { id: 'jest', description: 'Jest', role: Roles.tester, score: 5 },
    selenium: { id: 'selenium', description: 'Selenium', role: Roles.tester, score: 5 },
    cypress: { id: 'cypress', description: 'Cypress', role: Roles.tester, score: 5 },

    // DevOps
    cicd: { id: 'cicd', description: 'CI/CD', role: Roles.devOps, score: 5 },
    jenkins: { id: 'jenkins', description: 'Jenkins', role: Roles.devOps, score: 5 },

    // Requirements
    documentacao: { id: 'documentacao', description: 'Documentação', role: Roles.requirementsAnalyst, score: 5 },

    // Manager
    scrum: { id: 'scrum', description: 'Scrum', role: Roles.projectManager, score: 5 },
    agile: { id: 'agile', description: 'Agile', role: Roles.projectManager, score: 5 },
    gestao: { id: 'gestao', description: 'Gestão', role: Roles.projectManager, score: 5 },
    prospeccao: { id: 'prospeccao', description: 'Prospecção', role: Roles.executiveManager, score: 5 },
};

