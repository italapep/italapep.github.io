/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         LAPEP-ITA — ARQUIVO DE CONFIGURAÇÃO DO SITE         ║
 * ║                        config.js                            ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║  Edite este arquivo para atualizar:                         ║
 * ║  • Publicações                                              ║
 * ║  • Parcerias                                                ║
 * ║  • Links dos Portais                                        ║
 * ║  • ID da planilha Google Sheets (para alunos e notícias)    ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * ⚠️  IMPORTANTE: Após editar, salve o arquivo e faça upload
 *     no GitHub para as mudanças aparecerem no site.
 */

const LAPEP_CONFIG = {

  /* ────────────────────────────────────────────────────────────
     GOOGLE SHEETS — ID DA PLANILHA
  ────────────────────────────────────────────────────────────── */
  sheetId: '',          // ← Cole o ID da planilha aqui
  noticiasSheetId: '1xej4U-TsxlSgLgdDamxdrlC1WKY2sDEJ5zaD-dc-nJQ', // ← ID da planilha de notícias (separada)
  abaAlunos: 'Alunos',
  abaNoticias: 'Noticias',

  /* ────────────────────────────────────────────────────────────
     PORTAIS — URLs dos Apps Script
  ────────────────────────────────────────────────────────────── */
  portalAluno: 'https://script.google.com/macros/s/AKfycbwHcZVJd2vAC2PaNGXMVTR4j5nUIkaHRhWgFXOUaE5TUTgm9NXbztCLDdkECM59z02o/exec',
  portalOrientador: 'https://script.google.com/macros/s/AKfycbwHcZVJd2vAC2PaNGXMVTR4j5nUIkaHRhWgFXOUaE5TUTgm9NXbztCLDdkECM59z02o/exec?page=dashboard',

  /* ────────────────────────────────────────────────────────────
     PARCERIAS
     sigla: texto exibido quando não há imagem
     imagem: caminho relativo ao arquivo de logo (ou '' para usar sigla)
  ────────────────────────────────────────────────────────────── */
  parcerias: [
    {
      sigla: 'INPE',
      imagem: 'INPE.png',
      nome: 'INPE / LCP',
      descricao: 'Laboratório de Combustão e Propulsão — parceria histórica em propulsão e foguetes desde 2011.'
    },
    {
      sigla: 'TII',
      imagem: 'TII.png',
      nome: 'TII',
      descricao: 'Technology Innovation Institute — colaboração internacional em propulsão com HTP.'
    },
    {
      sigla: 'LTF',
      imagem: 'LTF.jpeg',
      nome: 'LTF-ITA',
      descricao: 'Laboratório do ITA com colaboração em projetos de propulsão e desenvolvimento de HTP propulsivo.'
    },
    {
      sigla: 'USP',
      imagem: '',
      nome: 'EEL-USP',
      descricao: 'Escola de Engenharia de Lorena — colaboração em catálise e materiais para propulsão.'
    },
    {
      sigla: 'LPL',
      imagem: 'LPL.jpeg',
      nome: 'LPL-ITA',
      descricao: 'Laboratório do ITA com colaboração em projetos de Propulsão Líquida.'
    },
    {
      sigla: 'BIZU',
      imagem: 'Bizu.jpg',
      nome: 'Bizu',
      descricao: 'Parceria em projeto de preparo de propelentes e desenvolvimento tecnológico.'
    }
  ],

  /* ────────────────────────────────────────────────────────────
     PUBLICAÇÕES
     doi: link do artigo online (ou '' se não disponível)
     pdf: caminho relativo ao PDF local (ou '' se não disponível)
     qualis: classificação Qualis CAPES
  ────────────────────────────────────────────────────────────── */
  publicacoes: [
    {
      ano: 2026,
      titulo: 'Optimization of a green bipropellant with monoethanolamine, 2-propanol, and hydrogen peroxide 90 wt% as oxidizer',
      autores: 'Pereira, L.G.F. et al.',
      periodico: 'Brazilian Journal of Chemical Engineering',
      qualis: 'A3',
      doi: '',
      pdf: 'Portifolio/Publicados/2026_Optimization of a green bipropellant with monoethanolamine, 2-propanol, and hydrogen peroxide 90 wt% as oxidizer.pdf'
    },
    {
      ano: 2026,
      titulo: 'Development and optimization of a green hypergolic gel propellant based on gelled ethanol with aluminum powder and copper(II) chloride with 90% hydrogen peroxide as oxidizer',
      autores: 'Pereira, L.G.F. et al.',
      periodico: 'Acta Astronautica, v.247, p.669-680',
      qualis: 'A2',
      doi: '',
      pdf: 'Portifolio/Publicados/2026_Development and optimization of a green hypergolic gel propellant based on.pdf'
    },
    {
      ano: 2025,
      titulo: 'Composition optimization of a hypergolic green propellant based on monoethanolamine, n-butanol and 90% hydrogen peroxide',
      autores: 'Pereira, L.G.F. et al.',
      periodico: 'Acta Astronautica, v.229, p.140-148',
      qualis: 'A2',
      doi: '',
      pdf: 'Portifolio/Publicados/2025_Composition optimization of a hypergolic green propellant based on.pdf'
    },
    {
      ano: 2022,
      titulo: 'Thermal, Viscosimetric and Thermomechanical Combined Assessment of Mixture Modelled Composite Fuels for Hybrid Propulsion',
      autores: 'Pereira, L.G.F. et al.',
      periodico: 'Propellants, Explosives, Pyrotechnics, v.47',
      qualis: 'A4',
      doi: '',
      pdf: 'Portifolio/Publicados/2022_Thermal, Viscosimetric and Thermomechanical Combined Assessment of Mixture Modelled Composite Fuels for Hybrid Propulsion.pdf'
    },
    {
      ano: 2021,
      titulo: 'Assessing the Performance of a Green Liquid Fuel Hypergolic with Hydrogen Peroxide in a 50 N Bipropellant Thruster',
      autores: 'Pereira, L.G.F. et al.',
      periodico: 'Int. Journal of Energetic Materials and Chemical Propulsion, v.20, p.21-30',
      qualis: 'B3',
      doi: '',
      pdf: 'Portifolio/Publicados/2021_ASSESSING THE PERFORMANCE OF A 50 N BIPROPELLANT THRUSTER.pdf'
    },
    {
      ano: 2021,
      titulo: 'Conversion of Co-Mn-Al hydrotalcites in highly active spinel-type catalysts for peroxide decomposition',
      autores: 'Pereira, L.G.F. et al.',
      periodico: 'Catalysis Today, v.397-399, p.365-374',
      qualis: 'A1',
      doi: '',
      pdf: 'Portifolio/Publicados/2022_Conversion of Co-Mn-Al hydrotalcites in highly active spinel-type catalysts for peroxide decomposition.pdf'
    },
    {
      ano: 2021,
      titulo: 'Laboratory scale method for preparation of mixture modeled composite fuels for hybrid propulsion',
      autores: 'Pereira, L.G.F. et al.',
      periodico: 'Journal of Energetic Materials, v.1, p.1-18',
      qualis: 'A2',
      doi: '',
      pdf: 'Portifolio/Publicados/2021-Laboratory scale method for preparation of mixture modeled composite fuels for hybrid propulsion.pdf'
    },
    {
      ano: 2020,
      titulo: 'CoMn-Spinel Oxides as Supported Catalyst for Rocket-Grade Hydrogen Peroxide Decomposition',
      autores: 'Pereira, L.G.F. et al.',
      periodico: 'Propellants, Explosives, Pyrotechnics, v.45',
      qualis: 'A4',
      doi: '',
      pdf: 'Portifolio/Publicados/2020_CoMn‑Spinel Oxides as Supported Catalyst for Rocket‑Grade Hydrogen Peroxide Decomposition.pdf'
    },
    {
      ano: 2018,
      titulo: 'Development of a rocket liquid fuel based on monoethanolamine and ethanol hypergolic with hydrogen peroxide',
      autores: 'Pereira, L.G.F. et al.',
      periodico: 'Int. Journal of Energetic Materials and Chemical Propulsion, v.17, p.137-145',
      qualis: 'B3',
      doi: '',
      pdf: 'Portifolio/Publicados/2018_A DOE STUDY ON THE HYPERGOLICITY.pdf'
    },
    {
      ano: 2016,
      titulo: 'Bulk catalyst for nitrous oxide decomposition in space thrusters',
      autores: 'Pereira, L.G.F. et al.',
      periodico: 'Int. Journal of Energetic Materials and Chemical Propulsion, v.15, p.123-130',
      qualis: 'B3',
      doi: '',
      pdf: 'Portifolio/Publicados/2016_BULK CATALYST FOR NITROUS OXIDE.pdf'
    },
    {
      ano: 2014,
      titulo: 'CoMn-Based Oxides as Bulk Catalyst for Rocket-Grade Hydrogen Peroxide Decomposition',
      autores: 'Pereira, L.G.F. et al.',
      periodico: 'Journal of Propulsion and Power (AIAA), v.30, p.309-313',
      qualis: 'A3',
      doi: '',
      pdf: 'Portifolio/Publicados/2014_CoMn-Based Oxides as Bulk Catalyst for Rocket-Grade.pdf'
    },
    {
      ano: 2014,
      titulo: 'Development and Optimization of a Catalytic Thruster for Hydrogen Peroxide Decomposition',
      autores: 'Pereira, L.G.F. et al.',
      periodico: 'Journal of Aerospace Technology and Management (JATM), v.6, p.61-67',
      qualis: 'B1',
      doi: '',
      pdf: 'Portifolio/Publicados/2014_Development and Optimization of a catalytic thruster for hydrog