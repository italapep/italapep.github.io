/**
 * LAPEP-ITA — config.js
 * Editado via painel admin em 21/06/2026, 13:45:41
 */

const LAPEP_CONFIG = {

  sheetId: '' ,
  abaAlunos: 'Alunos' ,
  portalAluno: 'https://script.google.com/macros/s/AKfycbwHcZVJd2vAC2PaNGXMVTR4j5nUIkaHRhWgFXOUaE5TUTgm9NXbztCLDdkECM59z02o/exec' ,
  portalOrientador: 'https://script.google.com/macros/s/AKfycbwHcZVJd2vAC2PaNGXMVTR4j5nUIkaHRhWgFXOUaE5TUTgm9NXbztCLDdkECM59z02o/exec?page=dashboard' ,

  sobre: {
    texto: 'O LAPEP (Laboratório de Pesquisas em Propelentes) é um laboratório do Instituto Tecnológico de Aeronáutica (ITA) dedicado ao desenvolvimento de tecnologias para propulsão química e materiais avançados voltados aos setores aeroespacial, energético e de defesa. Suas linhas de pesquisa abrangem propelentes líquidos, sólidos, híbridos e em gel, além de propelentes verdes à base de HTP, N₂O e ADN. O laboratório também atua no desenvolvimento de catalisadores e suportes catalíticos para sistemas propulsivos, bem como de materiais cerâmicos e carbonosos avançados. Outras áreas de atuação incluem materiais eletromagnéticos para aplicações em radar e comunicações estratégicas, materiais funcionais para baixa observabilidade e gerenciamento de assinaturas, manufatura aditiva de componentes funcionais e nanocatalisadores para aplicações energéticas e ambientais. O LAPEP realiza atividades de síntese, caracterização e avaliação de desempenho de materiais e sistemas, contribuindo para o avanço científico e tecnológico de áreas estratégicas para o Brasil. Suas pesquisas têm como foco a autonomia tecnológica, a inovação e o fortalecimento da capacidade nacional.' ,
    foto: 'foto-lapep.png' 
  },

  contato: {
    endereco: 'Departamento de Química — ITA\nCampus do CTA, São José dos Campos, SP\nCEP 12228-900' ,
    telefone: '(12) 3947-5948' ,
    email: 'lgustavoferroni@ita.br' ,
    instagram: 'ita_lapep' 
  },

  linhasPesquisa: [
    { icone: '🚀' , titulo: 'Monopropelentes Verdes' , descricao: 'HTP, ADN e N₂O como propelentes para sistemas de decomposição catalítica em micropropulsores e satélites.'  },
    { icone: '⚗️' , titulo: 'Bipropelentes Hipergólicos Verdes' , descricao: 'Pares oxidante-combustível baseados em HTP como oxidante para sistemas bipropelentes de baixa toxicidade.'  },
    { icone: '🔥' , titulo: 'Propulsão Híbrida e Propelentes em Gel' , descricao: 'Combustíveis compósitos e gelificados para sistemas híbridos de propulsão com elevada densidade energética.'  },
    { icone: '🔬' , titulo: 'Catalisadores e Suportes Catalíticos' , descricao: 'Espinélios de metais de transição e catalisadores heterogêneos, com suportes à base de hexaaluminatos e aluminas estruturadas.'  },
    { icone: '🏗️' , titulo: 'Manufatura Aditiva' , descricao: 'Produção de monólitos e componentes catalíticos funcionais por impressão 3D para aplicações em propulsão.'  },
    { icone: '🌿' , titulo: 'H₂ Verde e Fotocatálise' , descricao: 'Catalisadores de metais de transição e óxidos mistos para geração de hidrogênio verde e degradação fotocatalítica de poluentes.'  },
    { icone: '🧱' , titulo: 'Materiais Carbonosos' , descricao: 'Materiais carbonosos nanoestruturados obtidos por pirólise controlada para eletrocatálise, absorvedores de radiação eletromagnética, refratários industriais e aeroespaciais, e sistemas de defesa.'  },
    { icone: '🛡️' , titulo: 'Materiais Cerâmicos Avançados' , descricao: 'Síntese e caracterização de cerâmicas avançadas para aplicações aeroespaciais e de defesa, suportes catalíticos de alta estabilidade térmica e monólitos estruturados para sistemas propulsivos.'  },
    { icone: '💻' , titulo: 'Simulações Termodinâmicas' , descricao: 'Simulação termodinâmica de sistemas propulsivos químicos para avaliação de desempenho e dimensionamento de câmaras de combustão.'  },
    { icone: '📊' , titulo: 'DOE / RSM' , descricao: 'Planejamento experimental e otimização multivariada por superfície de resposta, aplicados transversalmente a todos os projetos.'  }
  ],

  projetos: [
    { titulo: 'Use of Hydrogen Peroxide as Propellant in Propulsion Systems' , descricao: 'P&D e desenvolvimento tecnológico com parceria internacional (TII). HTP como propelente para satélites e micropropulsores, com interesse estratégico para a defesa nacional.' , status: 'Em andamento' , tipo: ''  },
    { titulo: 'Desenvolvimento de Catalisador Heterogêneo para Propulsor Monopropelente' , descricao: 'Síntese e caracterização de catalisadores para decomposição de HTP em sistemas propulsivos de satélites.' , status: 'Em andamento' , tipo: ''  },
    { titulo: 'Desenvolvimento de Metodologia de Preparo de HTP em Grau Propulsivo' , descricao: 'Protocolo de produção e qualificação de HTP propulsivo em colaboração com o LTF-ITA.' , status: 'Em andamento' , tipo: ''  },
    { titulo: 'Nanopartículas de Espinélios para Nanocatalisadores em Sistemas Propulsivos' , descricao: 'Síntese e caracterização de nanopartículas catalíticas para aplicação em decomposição de propelentes. (Mestrado, 2026)' , status: 'Em andamento' , tipo: 'Mestrado'  },
    { titulo: 'Síntese de Precursor de Alumina como Suporte Catalítico Propulsivo' , descricao: 'Produção de suporte de alumina a partir de precursores para catálise em sistemas propulsivos. (Mestrado, 2026)' , status: 'Em andamento' , tipo: 'Mestrado'  },
    { titulo: 'Catalisadores de Metais de Transição para Produção de H₂ Verde' , descricao: 'Desenvolvimento de catalisadores para geração de hidrogênio verde em aplicações aeroespaciais. (Mestrado, 2026)' , status: 'Em andamento' , tipo: 'Mestrado'  },
    { titulo: 'Suportes Monolíticos de Alumina por Manufatura Aditiva para Propulsão Monopropelente' , descricao: 'Impressão 3D de monólitos cerâmicos como suportes catalíticos para propulsores a HTP. (Mestrado, 2025)' , status: 'Em andamento' , tipo: 'Mestrado'  },
    { titulo: 'Projeto e Otimização de Sistema Propulsivo Monopropelente a HTP' , descricao: 'Desenvolvimento e caracterização de propulsor monopropelente operado com HTP, com aplicações em defesa e sistemas aeroespaciais. (Mestrado, 2024)' , status: 'Em andamento' , tipo: 'Mestrado'  },
    { titulo: 'Combustível Hipergólico para Sistemas Bipropelentes com HTP como Oxidante' , descricao: 'Desenvolvimento e avaliação de combustível hipergólico verde compatível com HTP. (Mestrado, 2024)' , status: 'Em andamento' , tipo: 'Mestrado'  },
    { titulo: 'Metodologia Portátil para Quantificação de Defensivos Agrícolas em Sementes' , descricao: 'Desenvolvimento de método analítico miniaturizado para monitoramento de resíduos em sementes. (Doutorado, 2025)' , status: 'Em andamento' , tipo: 'Doutorado'  },
    { titulo: 'Catalisadores para Decomposição de Monopropelente à Base de HTP e ADN' , descricao: 'Desenvolvimento e avaliação de catalisadores heterogêneos para decomposição de monopropelentes verdes. (Mestrado)' , status: 'Em andamento' , tipo: 'Mestrado'  },
    { titulo: 'Nanopartículas de Espinélios para Decomposição Catalítica de HTP' , descricao: 'Síntese e avaliação de nanopartículas catalíticas à base de espinélios para propulsão monopropelente. (IC, 2026)' , status: 'Em andamento' , tipo: 'IC'  },
    { titulo: 'Oxidantes Verdes à Base de ADN e HTP para Sistemas Bipropelentes' , descricao: 'Avaliação de oxidantes alternativos de baixa toxicidade para aplicações em propulsão bipropelente. (IC, 2026)' , status: 'Em andamento' , tipo: 'IC'  },
    { titulo: 'Síntese de Catalisadores de Ag para Decomposição de H₂O₂ por DOE' , descricao: 'Planejamento experimental para otimização de catalisadores de prata para decomposição catalítica. (IC, 2026)' , status: 'Em andamento' , tipo: 'IC'  },
    { titulo: 'Óxidos Mistos para Degradação Fotocatalítica de Corantes' , descricao: 'Síntese e avaliação de óxidos mistos nanoestruturados como fotocatalisadores para tratamento de efluentes. (IC, 2026)' , status: 'Em andamento' , tipo: 'IC'  },
    { titulo: 'Materiais Carbonosos como Suportes para Eletrocatalisadores' , descricao: 'Desenvolvimento de suportes carbonosos nanoestruturados para aplicação em eletrocatálise e energia. (IC, 2026)' , status: 'Em andamento' , tipo: 'IC'  },
    { titulo: 'Materiais Carbonosos Nanoestruturados para Aplicação em Refratários Industriais e Aeroespaciais por Pirólise Controlada' , descricao: 'Síntese de materiais carbonosos via pirólise controlada para aplicações refratárias. (IC, 2026)' , status: 'Em andamento' , tipo: 'IC'  },
    { titulo: 'Pirólise para Produção de Materiais Carbonosos Nanoestruturados de Alta Área Superficial' , descricao: 'Desenvolvimento de materiais carbonosos com elevada área superficial via pirólise. (IC, 2026)' , status: 'Em andamento' , tipo: 'IC'  },
    { titulo: 'Síntese de Óxidos Mistos Ti-Fe para Degradação Fotocatalítica de Corantes' , descricao: 'Desenvolvimento e otimização por DOE de catalisadores à base de óxidos mistos para fotocatálise ambiental. (IC, 2026)' , status: 'Em andamento' , tipo: 'IC'  },
    { titulo: 'Hexaaluminato de Lantânio como Suporte Catalítico em Sistemas Propulsivos Monopropelentes' , descricao: 'Avaliação de suporte de alta estabilidade térmica para propulsão monopropelente a HTP. (Mestrado, 2025)' , status: 'Concluído' , tipo: 'Mestrado'  },
    { titulo: 'Characterization and Optimization of a Novel Hypergolic Propellant with MEA and n-Butanol' , descricao: 'Caracterização e otimização de par hipergólico com HTP como oxidante. (Mestrado, 2024)' , status: 'Concluído' , tipo: 'Mestrado'  },
    { titulo: 'Gel de Querosene para Sistemas Bipropelentes Hipergólicos' , descricao: 'Síntese e caracterização de combustível gelificado à base de querosene. (IC, 2025)' , status: 'Concluído' , tipo: 'IC'  },
    { titulo: 'Gel Combustível de Etanol para Bipropelentes com HTP' , descricao: 'Desenvolvimento de combustível gelificado à base de etanol para sistemas hipergólicos. (IC, 2025)' , status: 'Concluído' , tipo: 'IC'  },
    { titulo: 'Otimização de Bipropelentes Hipergólicos com HTP — Variáveis Composicionais' , descricao: 'Planejamento experimental aplicado à otimização de formulações bipropelentes verdes. (IC, 2025)' , status: 'Concluído' , tipo: 'IC'  },
    { titulo: 'Software MATLAB para DOE e Análise Experimental' , descricao: 'Desenvolvimento de ferramenta computacional para planejamento e análise estatística de experimentos. (IC, 2025)' , status: 'Concluído' , tipo: 'IC'  },
    { titulo: 'Gel Combustível para Sistemas Propulsivos Bipropelentes' , descricao: 'Síntese e avaliação de desempenho de combustíveis gelificados para propulsão bipropelente. (IC, 2024)' , status: 'Concluído' , tipo: 'IC'  },
    { titulo: 'Propelente Verde com MEA, iPrOH e Catalisador de Cobre e HTP' , descricao: 'Avaliação de novo par hipergólico verde para sistemas bipropelentes. (IC, 2023)' , status: 'Concluído' , tipo: 'IC'  },
    { titulo: 'Otimização de Leito Catalítico para Propulsor Monopropelente a HTP' , descricao: 'Desenvolvimento e otimização geométrica de reator catalítico para decomposição de HTP. (IC, 2023)' , status: 'Concluído' , tipo: 'IC'  },
    { titulo: 'Hexaaluminato de Lantânio para Sistemas Monopropulsivos de Satélites' , descricao: 'Síntese e avaliação de suporte cerâmico de alta temperatura para propulsão monopropelente. (IC, 2023)' , status: 'Concluído' , tipo: 'IC'  },
    { titulo: 'Combustíveis Hipergólicos Catalisados para Sistemas Bipropelentes' , descricao: 'Desenvolvimento de combustíveis com aditivos catalíticos para ignição hipergólica com HTP. (IC, 2022)' , status: 'Concluído' , tipo: 'IC'  },
    { titulo: 'Catalisadores Mássicos para HTP por Modelagem de Misturas' , descricao: 'Síntese e caracterização de catalisadores preparados por modelagem de misturas para decomposição de HTP. (IC, 2021)' , status: 'Concluído' , tipo: 'IC'  },
    { titulo: 'Catalisadores Espinélios Mistos para Decomposição de HTP' , descricao: 'Síntese e avaliação de catalisadores espinélios de metais de transição para propulsão monopropelente. (IC, 2020)' , status: 'Concluído' , tipo: 'IC'  },
    { titulo: 'Catalisadores Co-Mn para Decomposição de HTP' , descricao: 'Desenvolvimento inicial de catalisadores espinélios Co-Mn para propulsão monopropelente. (IC, 2017)' , status: 'Concluído' , tipo: 'IC'  }
  ],

  defesas: [
    { ano: 2025, tipo: 'Mestrado' , titulo: 'Desenvolvimento de Hexaaluminato de Lantânio para Emprego como Suporte Catalítico em Sistemas Propulsivos Monopropelentes' , nome: 'Geovanna Karolinne Carvalho Santos' , papel: 'Orientador' , instituicao: 'ITA / CAPES'  },
    { ano: 2024, tipo: 'Mestrado' , titulo: 'Characterization and Optimization of a Novel Hypergolic Propellant Using Monoethanolamine, n-Butanol and 90% Hydrogen Peroxide' , nome: 'Paull Cristhiann Acosta Mendoza' , papel: 'Co-orientador' , instituicao: 'ITA / CAPES'  },
    { ano: 2025, tipo: 'Pós-Doc' , titulo: 'Supervisão de Pós-Doutorado em Catálise e Propulsão' , nome: 'Renata Fraga Cardoso' , papel: 'Supervisor' , instituicao: 'Instituto Tecnológico de Aeronáutica (2025–2026)'  }
  ],

  parcerias: [
    { sigla: 'INPE' , imagem: 'INPE.png' , nome: 'INPE / LCP' , descricao: 'Laboratório de Combustão e Propulsão — parceria histórica em propulsão e foguetes desde 2011.'  },
    { sigla: 'TII' , imagem: 'TII.png' , nome: 'TII' , descricao: 'Technology Innovation Institute — colaboração internacional em propulsão com HTP.'  },
    { sigla: 'LTF' , imagem: 'LTF.jpeg' , nome: 'LTF-ITA' , descricao: 'Laboratório do ITA com colaboração em projetos de propulsão e desenvolvimento de HTP propulsivo.'  },
    { sigla: 'USP' , imagem: 'EEL_USP.png' , nome: 'EEL-USP' , descricao: 'Escola de Engenharia de Lorena — colaboração em catálise e materiais para propulsão.'  },
    { sigla: 'LPL' , imagem: 'LPL.jpeg' , nome: 'LPL-ITA' , descricao: 'Laboratório do ITA com colaboração em projetos de Propulsão Líquida.'  },
    { sigla: 'BIZU' , imagem: 'Bizu.jpg' , nome: 'Bizu' , descricao: 'Parceria em projeto de preparo de propelentes e desenvolvimento tecnológico.'  }
  ],

  publicacoes: [
    { ano: 2026, titulo: 'Optimization of a green bipropellant with monoethanolamine, 2-propanol, and hydrogen peroxide 90 wt% as oxidizer' , autores: 'Cardoso, R.F. et al.' , periodico: 'Brazilian Journal of Chemical Engineering' , qualis: 'A3' , doi: '' , pdf: 'Portifolio/Publicados/2026_Optimization of a green bipropellant with monoethanolamine, 2propanol, and hydrogen peroxide 90 wt% as oxidizer.pdf'  },
    { ano: 2026, titulo: 'Development and optimization of a green hypergolic gel propellant based on gelled ethanol with aluminum powder and copper(II) chloride with 90% hydrogen peroxide as oxidizer' , autores: 'Cardoso, R.F. et al.' , periodico: 'Acta Astronautica, v.247, p.669-680' , qualis: 'A2' , doi: '' , pdf: 'Portifolio/Publicados/2026_Development and optimization of a green hypergolic gel propellant based on.pdf'  },
    { ano: 2025, titulo: 'Composition optimization of a hypergolic green propellant based on monoethanolamine, n-butanol and 90% hydrogen peroxide' , autores: 'Mendoza, P.C.A. et al.' , periodico: 'Acta Astronautica, v.229, p.140-148' , qualis: 'A2' , doi: '' , pdf: 'Portifolio/Publicados/2025_Composition optimization of a hypergolic green propellant based on.pdf'  },
    { ano: 2022, titulo: 'Thermal, Viscosimetric and Thermomechanical Combined Assessment of Mixture Modelled Composite Fuels for Hybrid Propulsion' , autores: 'Péres de Araújo, E. et al.' , periodico: 'Propellants, Explosives, Pyrotechnics, v.47' , qualis: 'A4' , doi: '' , pdf: 'Portifolio/Publicados/2022_Thermal, Viscosimetric and Thermomechanical Combined Assessment of Mixture Modelled Composite Fuels for Hybrid Propulsion.pdf'  },
    { ano: 2021, titulo: 'Assessing the Performance of a Green Liquid Fuel Hypergolic with Hydrogen Peroxide in a 50 N Bipropellant Thruster' , autores: 'Maschio, L.J. et al.' , periodico: 'Int. Journal of Energetic Materials and Chemical Propulsion, v.20, p.21-30' , qualis: 'B3' , doi: '' , pdf: 'Portifolio/Publicados/2021_ASSESSING THE PERFORMANCE OF A 50 N BIPROPELLANT THRUSTER.pdf'  },
    { ano: 2021, titulo: 'Conversion of Co-Mn-Al hydrotalcites in highly active spinel-type catalysts for peroxide decomposition' , autores: 'Miranda, A.N. et al.' , periodico: 'Catalysis Today, v.397-399, p.365-374' , qualis: 'A1' , doi: '' , pdf: 'Portifolio/Publicados/2022_Conversion of Co-Mn-Al hydrotalcites in highly active spinel-type catalysts for peroxide decomposition.pdf'  },
    { ano: 2021, titulo: 'Laboratory scale method for preparation of mixture modeled composite fuels for hybrid propulsion' , autores: 'De Araújo, E.P. et al.' , periodico: 'Journal of Energetic Materials, v.1, p.1-18' , qualis: 'A2' , doi: '' , pdf: 'Portifolio/Publicados/2021-Laboratory scale method for preparation of mixture modeled composite fuels for hybrid propulsion.pdf'  },
    { ano: 2020, titulo: 'CoMn-Spinel Oxides as Supported Catalyst for Rocket-Grade Hydrogen Peroxide Decomposition' , autores: 'Ferroni Pereira, L.G. et al.' , periodico: 'Propellants, Explosives, Pyrotechnics, v.45' , qualis: 'A4' , doi: '' , pdf: '2020_CoMn-Spinel-HTP.pdf'  },
    { ano: 2018, titulo: 'Development of a rocket liquid fuel based on monoethanolamine and ethanol hypergolic with hydrogen peroxide' , autores: 'Maschio, L. et al.' , periodico: 'Int. Journal of Energetic Materials and Chemical Propulsion, v.17, p.137-145' , qualis: 'B3' , doi: '' , pdf: 'Portifolio/Publicados/2018_A DOE STUDY ON THE HYPERGOLICITY.pdf'  },
    { ano: 2016, titulo: 'Bulk catalyst for nitrous oxide decomposition in space thrusters' , autores: 'Okamoto, S. et al.' , periodico: 'Int. Journal of Energetic Materials and Chemical Propulsion, v.15, p.123-130' , qualis: 'B3' , doi: '' , pdf: 'Portifolio/Publicados/2016_BULK CATALYST FOR NITROUS OXIDE.pdf'  },
    { ano: 2014, titulo: 'CoMn-Based Oxides as Bulk Catalyst for Rocket-Grade Hydrogen Peroxide Decomposition' , autores: 'Maia, F.F. et al.' , periodico: 'Journal of Propulsion and Power (AIAA), v.30, p.309-313' , qualis: 'A3' , doi: '' , pdf: 'Portifolio/Publicados/2014_CoMn Based Oxides as Bulk Catalyst for Rocket Grade.pdf'  },
    { ano: 2014, titulo: 'Development and Optimization of a Catalytic Thruster for Hydrogen Peroxide Decomposition' , autores: 'Maia, F.F. et al.' , periodico: 'Journal of Aerospace Technology and Management (JATM), v.6, p.61-67' , qualis: 'B1' , doi: '' , pdf: 'Portifolio/Publicados/2014_Development and Optimization of a catalytic thruster for hydrogen peroxide decmposition.pdf'  }
  ],

  equipe: [
    { nome: 'Prof. Dr. Luís Gustavo Ferroni Pereira' , papel: 'Coordenador | Professor Adjunto' , foto: 'Fotos Alunos/Luis-Gustavo.jpeg' , tema: 'Monopropelentes, bipropelentes hipergólicos, propelentes sólidos e híbridos, propelentes em gel, catalisadores, suportes catalíticos, manufatura aditiva, H₂ verde, fotocatálise, materiais carbonosos e materiais eletromagnéticos' , tipo: 'professor'  },
    { nome: 'Prof. Dr. Leonardo Henrique Gouvêa' , papel: 'Coordenador Adjunto | Professor Adjunto' , foto: 'Fotos Alunos/Leonardo-Henrique.jpeg' , tema: 'Propulsão química de foguetes, propelentes híbridos, motores hipergólicos, candy rocket, HTP, projeto e operação de bancadas de testes e motores foguete' , tipo: 'professor'  },
    { nome: 'Dra. Renata Fraga Cardoso' , papel: 'Pós-Doutorado' , foto: 'Fotos Alunos/Renata.jpeg' , tema: 'Catálise heterogênea e propulsão' , tipo: 'aluno'  },
    { nome: 'Sandra Helena da Silva Siqueira Tanaka' , papel: 'Doutorado' , foto: 'Fotos Alunos/Sandra.jpeg' , tema: 'Métodos analíticos para detecção de contaminantes' , tipo: 'aluno'  },
    { nome: 'Emilly Estefane de Oliveira Fernandes' , papel: 'Mestrado' , foto: 'Fotos Alunos/Emilly.jpeg' , tema: 'Catalisadores para H₂ verde' , tipo: 'aluno'  },
    { nome: 'João Vítor Lima dos Santos' , papel: 'Mestrado' , foto: 'Fotos Alunos/Joao-Vitor.jpeg' , tema: 'Sistema propulsivo monopropelente a HTP' , tipo: 'aluno'  },
    { nome: 'Júlia Lima Siqueira' , papel: 'Mestrado' , foto: '' , tema: 'Nanocatalisadores para sistemas propulsivos' , tipo: 'aluno'  },
    { nome: 'Mariana Rosa de Lima Silva' , papel: 'Mestrado' , foto: 'Fotos Alunos/Mariana.jpeg' , tema: 'Suportes catalíticos para propulsão' , tipo: 'aluno'  },
    { nome: 'Sarah Moreira Silva Lima' , papel: 'Mestrado' , foto: 'Fotos Alunos/Sarah.jpeg' , tema: 'Suportes monolíticos por manufatura aditiva' , tipo: 'aluno'  },
    { nome: 'Victor Rabelo Rodrigues' , papel: 'Mestrado' , foto: 'Fotos Alunos/Victor.jpeg' , tema: 'Combustível hipergólico com HTP' , tipo: 'aluno'  },
    { nome: 'Vitória Isabelle dos Santos Argiona' , papel: 'Mestrado' , foto: 'Fotos Alunos/Vitoria-Argiona.jpeg' , tema: 'Catalisadores para decomposição de monopropelente a HTP e ADN' , tipo: 'aluno'  },
    { nome: 'André Luís Ventura Moreira' , papel: 'IC' , foto: 'Fotos Alunos/Andre.jpeg' , tema: 'Materiais carbonosos nanoestruturados para refratários industriais e aeroespaciais por pirólise controlada' , tipo: 'aluno'  },
    { nome: 'Breno Raphael da Silva Pereira' , papel: 'IC' , foto: '' , tema: 'Decomposição catalítica de HTP' , tipo: 'aluno'  },
    { nome: 'Karine de Fátima da Silva' , papel: 'IC' , foto: 'Fotos Alunos/Karine.jpeg' , tema: 'Oxidantes verdes para sistemas propulsivos' , tipo: 'aluno'  },
    { nome: 'Kimberly Liandra da Silva' , papel: 'IC' , foto: '' , tema: 'Catalisadores para decomposição de H₂O₂' , tipo: 'aluno'  },
    { nome: 'Luana Vitória da Silva Chantre' , papel: 'IC' , foto: 'Fotos Alunos/Luana.jpeg' , tema: 'Síntese de óxidos mistos para fotocatálise' , tipo: 'aluno'  },
    { nome: 'Maria Eduarda Cardoso de Oliveira' , papel: 'IC' , foto: 'Fotos Alunos/Maria-Eduarda.jpeg' , tema: 'Fotocatálise de poluentes em meio aquoso' , tipo: 'aluno'  },
    { nome: 'Maria Vitória Santos do Nascimento' , papel: 'IC' , foto: 'Fotos Alunos/Maria-Vitoria.png' , tema: 'Materiais carbonosos nanoestruturados' , tipo: 'aluno'  },
    { nome: 'Samuel Francisco Delfino Alves' , papel: 'IC' , foto: 'Fotos Alunos/Samuel.jpeg' , tema: 'Materiais carbonosos para eletrocatálise' , tipo: 'aluno'  }
  ],

  noticias: [

  ]

};
