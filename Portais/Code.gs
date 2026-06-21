// ============================================================
// LAPEP-ITA — Portal do Orientando  |  Code.gs  v6  (coorientadores)
// ============================================================
const SHEET_NAME_REGISTROS      = 'Registros';
const SHEET_NAME_ALUNOS         = 'Alunos';
const SHEET_NAME_EVENTOS        = 'Eventos';
const SHEET_NAME_COORIENTADORES = 'Coorientadores';
const SENHA_DASHBOARD           = 'lapep2024';
const EMAIL_ORIENTADOR          = 'lgustavoferroni@gmail.com';
const COL_NOME=1,COL_NIVEL=2,COL_TEMA=3,COL_EMAIL=4,COL_TEL=5,COL_INI=6,COL_FIM=7,COL_COORIENT=8;

function getSpreadsheet() {
  const p=PropertiesService.getScriptProperties();
  let id=p.getProperty('SPREADSHEET_ID');
  if(id){try{return SpreadsheetApp.openById(id);}catch(e){}}
  const ss=SpreadsheetApp.create('Portal LAPEP-ITA — Dados');
  p.setProperty('SPREADSHEET_ID',ss.getId());
  return ss;
}

function doGet(e) {
  const page=(e&&e.parameter&&e.parameter.page)?e.parameter.page:'form';
  const tpl=HtmlService.createTemplateFromFile(page==='dashboard'?'Dashboard':'Formulario');
  return tpl.evaluate().setTitle('Portal LAPEP-ITA')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport','width=device-width,initial-scale=1');
}

// ── Formulário semanal ───────────────────────────────────────
function submitForm(data) {
  try {
    const ss=getSpreadsheet();
    let sh=ss.getSheetByName(SHEET_NAME_REGISTROS);
    if(!sh){
      sh=ss.insertSheet(SHEET_NAME_REGISTROS);
      sh.appendRow(['Timestamp','Nome','Nível','Semana','Realizações','Próximos Passos','Dificuldades','Progresso','Observações']);
      sh.getRange(1,1,1,9).setFontWeight('bold').setBackground('#1a3a5c').setFontColor('#fff');
      sh.setFrozenRows(1);
    }
    sh.appendRow([new Date(),data.nome,data.nivel,data.semana,
      data.realizacoes,data.proximosPassos,data.dificuldades,data.progresso,data.observacoes||'']);
    sh.getRange(sh.getLastRow(),1).setNumberFormat('dd/MM/yyyy HH:mm');
    return {success:true};
  }catch(e){return {success:false,error:e.message};}
}

// ── Aba Alunos ───────────────────────────────────────────────
function _alunosSheet() {
  const ss=getSpreadsheet();
  let sh=ss.getSheetByName(SHEET_NAME_ALUNOS);
  if(!sh){
    sh=ss.insertSheet(SHEET_NAME_ALUNOS);
    sh.getRange(1,1,1,8).setValues([['Nome','Nível','Tema','Email','Telefone','DataInicio','DataFim','Coorientador']]);
    sh.getRange(1,1,1,8).setFontWeight('bold').setBackground('#1a3a5c').setFontColor('#fff');
    sh.setFrozenRows(1);
    const al=[
      ['Renata Fraga Cardoso','Pós-Doutorado','Propelentes hipergólicos em gel','','','','',''],
      ['Sandra Helena da Silva Siqueira Tanaka','Doutorado','Quantificação de defensivos agrícolas','','','','',''],
      ['Júlia Lima Siqueira','Mestrado','Nanopartículas de espinélios para nanocatalisadores propulsivos','','','','',''],
      ['Mariana Rosa de Lima Silva','Mestrado','Alumina para suportes catalíticos propulsivos','','','','',''],
      ['Emilly Estefane de Oliveira Fernandes','Mestrado','Catalisadores para H2 verde em aplicações aeroespaciais','','','','',''],
      ['Sarah Moreira Silva Lima','Mestrado','Suportes monolíticos de alumina por manufatura aditiva','','','','',''],
      ['João Vítor Lima dos Santos','Mestrado','Sistema propulsivo monopropelente a HTP','','','','',''],
      ['Victor Rabelo Rodrigues','Mestrado','Combustível hipergólico para sistemas bipropelentes com HTP','','','','',''],
      ['Breno Raphael da Silva Pereira','IC','Nanopartículas de espinélios para decomposição de HTP','','','','',''],
      ['Karine de Fátima da Silva','IC','Oxidantes à base de ADN e HTP para sistemas bipropelentes','','','','',''],
      ['Kimberly Liandra da Silva','IC','DOE para síntese de catalisadores de Ag para H2O2','','','','',''],
      ['Maria Eduarda Cardoso de Oliveira','IC','Óxidos mistos Zn-Ce para degradação fotocatalítica','','','','',''],
      ['Samuel Francisco Delfino Alves','IC','Materiais carbonosos como suportes para eletrocatalisadores','','','','',''],
      ['Maria Vitória Santos do Nascimento','IC','Pirólise para materiais carbonosos nanoestruturados','','','','',''],
      ['Luana Vitória da Silva Chantre','IC','DOE para óxidos mistos Ti-Fe em degradação de corantes','','','','','']
    ];
    sh.getRange(2,1,al.length,8).setValues(al);
    sh.autoResizeColumns(1,8);
  } else {
    const nc=sh.getLastColumn();
    if(nc<8){
      const hdrs=['Nome','Nível','Tema','Email','Telefone','DataInicio','DataFim','Coorientador'];
      for(let c=nc+1;c<=8;c++) sh.getRange(1,c).setValue(hdrs[c-1]).setFontWeight('bold').setBackground('#1a3a5c').setFontColor('#fff');
    }
  }
  return sh;
}

function _fmtDate(v){
  if(v instanceof Date) return Utilities.formatDate(v,Session.getScriptTimeZone(),'dd/MM/yyyy');
  return String(v||'');
}

function getStudents() {
  const sh=_alunosSheet(), n=sh.getLastRow();
  if(n<=1) return [];
  const nc=Math.max(sh.getLastColumn(),8);
  return sh.getRange(1,1,n,nc).getValues().slice(1)
    .filter(r=>r[0]&&String(r[0]).trim())
    .map(r=>({
      nome:String(r[0]),nivel:String(r[1]),tema:String(r[2]),
      email:String(r[3]||''),telefone:String(r[4]||''),
      dataInicio:_fmtDate(r[5]),dataFim:_fmtDate(r[6]),
      coorientador:String(r[7]||'')
    }));
}

function getContact(nome) {
  const sh=_alunosSheet();
  const d=sh.getDataRange().getValues();
  for(let i=1;i<d.length;i++){
    if(d[i][0]===nome){
      const e=String(d[i][3]||''),t=String(d[i][4]||'');
      return (e||t)?{email:e,telefone:t}:null;
    }
  }
  return null;
}

function registerContact(nome,email,telefone) {
  try{
    const sh=_alunosSheet();
    const d=sh.getDataRange().getValues();
    for(let i=1;i<d.length;i++){
      if(d[i][0]===nome){
        if(email)    sh.getRange(i+1,COL_EMAIL).setValue(email);
        if(telefone) sh.getRange(i+1,COL_TEL).setValue(telefone);
        return {success:true};
      }
    }
    return {success:false,error:'Aluno não encontrado.'};
  }catch(e){return {success:false,error:e.message};}
}

function addStudent(senha,nome,nivel,tema){
  if(senha!==SENHA_DASHBOARD) return {success:false,error:'Não autorizado.'];
  try{
    if(!nome||!nivel) return {success:false,error:'Nome e nível obrigatórios.'};
    const sh=_alunosSheet(),d=sh.getDataRange().getValues();
    if(d.some(r=>r[0]&&String(r[0]).toLowerCase()===nome.toLowerCase()))
      return {success:false,error:'Aluno já cadastrado.'};
    sh.appendRow([nome,nivel,tema||'','','','','','']);
    return {success:true};
  }catch(e){return {success:false,error:e.message};}
}

function removeStudent(senha,nome){
  if(senha!==SENHA_DASHBOARD) return {success:false,error:'Não autorizado.'};
  try{
    const sh=_alunosSheet(),d=sh.getDataRange().getValues();
    for(let i=d.length-1;i>=1;i--) if(d[i][0]===nome){sh.deleteRow(i+1);return {success:true};}
    return {success:false,error:'Aluno não encontrado.'};
  }catch(e){return {success:false,error:e.message};}
}

function updateStudent(senha,nomeBusca,upd){
  if(senha!==SENHA_DASHBOARD) return {success:false,error:'Não autorizado.'};
  try{
    const ss=getSpreadsheet(),sh=_alunosSheet(),d=sh.getDataRange().getValues();
    for(let i=1;i<d.length;i++){
      if(d[i][0]===nomeBusca){
        const nn=upd.nome!==undefined?upd.nome:nomeBusca;
        sh.getRange(i+1,1).setValue(nn);
        if(upd.nivel!==undefined)      sh.getRange(i+1,COL_NIVEL).setValue(upd.nivel);
        if(upd.tema!==undefined)       sh.getRange(i+1,COL_TEMA).setValue(upd.tema);
        if(upd.email!==undefined)      sh.getRange(i+1,COL_EMAIL).setValue(upd.email);
        if(upd.telefone!==undefined)   sh.getRange(i+1,COL_TEL).setValue(upd.telefone);
        if(upd.dataInicio!==undefined) sh.getRange(i+1,COL_INI).setNumberFormat('@').setValue(upd.dataInicio);
        if(upd.dataFim!==undefined)    sh.getRange(i+1,COL_FIM).setNumberFormat('@').setValue(upd.dataFim);
        if(nn!==nomeBusca){
          [SHEET_NAME_REGISTROS,SHEET_NAME_EVENTOS].forEach(sn=>{
            const s2=ss.getSheetByName(sn);if(!s2||s2.getLastRow()<=1)return;
            const d2=s2.getDataRange().getValues();
            for(let j=1;j<d2.length;j++) if(d2[j][1]===nomeBusca) s2.getRange(j+1,2).setValue(nn);
          });
        }
        return {success:true};
      }
    }
    return {success:false,error:'Aluno não encontrado.'};
  }catch(e){return {success:false,error:e.message};}
}

// ── Eventos ──────────────────────────────────────────────────
function _eventosSheet(){
  const ss=getSpreadsheet();
  let sh=ss.getSheetByName(SHEET_NAME_EVENTOS);
  if(!sh){
    sh=ss.insertSheet(SHEET_NAME_EVENTOS);
    sh.appendRow(['ID','Nome','Descrição','Data']);
    sh.getRange(1,1,1,4).setFontWeight('bold').setBackground('#1a3a5c').setFontColor('#fff');
    sh.setFrozenRows(1);
  }
  return sh;
}

function addStudentEvent(senha,nome,descricao,dataStr){
  if(senha!==SENHA_DASHBOARD) return {success:false,error:'Não autorizado.'};
  try{
    const sh=_eventosSheet(),id=String(Date.now());
    sh.appendRow([id,nome,descricao,dataStr]);
    return {success:true,id};
  }catch(e){return {success:false,error:e.message};}
}

function removeStudentEvent(senha,eventId){
  if(senha!==SENHA_DASHBOARD) return {success:false,error:'Não autorizado.'};
  try{
    const sh=_eventosSheet();if(sh.getLastRow()<=1)return {success:true};
    const d=sh.getDataRange().getValues();
    for(let i=1;i<d.length;i++) if(String(d[i][0])===String(eventId)){sh.deleteRow(i+1);return {success:true};}
    return {success:true};
  }catch(e){return {success:false,error:e.message};}
}

// ── Dashboard data ───────────────────────────────────────────
function getDashboardData(senha){
  if(senha!==SENHA_DASHBOARD) return null;
  const students=getStudents(),ss=getSpreadsheet();
  const regSh=ss.getSheetByName(SHEET_NAME_REGISTROS),regMap={};
  if(regSh&&regSh.getLastRow()>1){
    regSh.getDataRange().getValues().slice(1).forEach(r=>{
      const n=String(r[1]||'');if(!regMap[n])regMap[n]=[];
      regMap[n].push({ts:String(r[0]||''),nivel:String(r[2]||''),semana:String(r[3]||''),
        realizacoes:String(r[4]||''),proximosPassos:String(r[5]||''),
        dificuldades:String(r[6]||''),progresso:String(r[7]||''),observacoes:String(r[8]||'')});
    });
    Object.keys(regMap).forEach(k=>regMap[k].sort((a,b)=>new Date(b.ts)-new Date(a.ts)));
  }
  const evSh=ss.getSheetByName(SHEET_NAME_EVENTOS),evMap={};
  if(evSh&&evSh.getLastRow()>1){
    evSh.getDataRange().getValues().slice(1).forEach(r=>{
      const n=String(r[1]||'');if(!evMap[n])evMap[n]=[];
      evMap[n].push({id:String(r[0]),descricao:String(r[2]||''),data:String(r[3]||'')});
    });
  }
  const result=students.map(s=>({
    nome:s.nome,nivel:s.nivel,tema:s.tema,email:s.email,telefone:s.telefone,
    dataInicio:s.dataInicio,dataFim:s.dataFim,coorientador:s.coorientador||'',
    eventos:evMap[s.nome]||[],registros:regMap[s.nome]||[]
  }));
  result.sort((a,b)=>{
    const ta=a.registros[0]?new Date(a.registros[0].ts):new Date(0);
    const tb=b.registros[0]?new Date(b.registros[0].ts):new Date(0);
    return tb-ta;
  });
  return {auth:true,students:result};
}

// ── Alertas de datas importantes (gatilho diário) ────────────
function checkEventAlerts(){
  const students=getStudents();
  const sMap={};students.forEach(s=>{sMap[s.nome]=s;});
  const evSh=getSpreadsheet().getSheetByName(SHEET_NAME_EVENTOS);
  if(!evSh||evSh.getLastRow()<=1) return;
  const now=new Date();now.setHours(0,0,0,0);
  const INTERVALS=[{days:30,label:'em 1 mês'},{days:7,label:'em 1 semana'},{days:1,label:'amanhã'}];
  const portalUrl=ScriptApp.getService().getUrl();

  evSh.getDataRange().getValues().slice(1).forEach(row=>{
    const [id,nome,desc,dataVal]=row;
    if(!dataVal) return;
    let evDate;
    if(dataVal instanceof Date) evDate=new Date(dataVal);
    else {
      const s=String(dataVal);
      if(/^\d{4}-\d{2}-\d{2}/.test(s)) evDate=new Date(s+'T00:00:00');
      else if(/^\d{2}\/\d{2}\/\d{4}/.test(s)){const p=s.split('/');evDate=new Date(+p[2],+p[1]-1,+p[0]);}
      else evDate=new Date(s);
    }
    if(!evDate||isNaN(evDate)) return;
    evDate.setHours(0,0,0,0);
    const diffDays=Math.round((evDate-now)/(86400000));
    const interval=INTERVALS.find(x=>x.days===diffDays);
    if(!interval) return;

    const s=sMap[nome];
    const evDateStr=evDate.toLocaleDateString('pt-BR');
    const subj='LAPEP-ITA: "'+desc+'" vence '+interval.label;

    // Email ao orientador
    try{MailApp.sendEmail({
      to:EMAIL_ORIENTADOR,subject:subj,
      body:'Aluno: '+nome+'\nEvento: '+desc+'\nData: '+evDateStr+' ('+interval.label+')'
    });}catch(e){}

    // Email ao coorientador (se houver e tiver email cadastrado)
    if(s&&s.coorientador){
      const coSh=_coorientadoresSheet();
      if(coSh.getLastRow()>1){
        const coRows=coSh.getDataRange().getValues().slice(1);
        const coRow=coRows.find(r=>String(r[0])===s.coorientador);
        const emailCo=coRow&&String(coRow[2]||'');
        if(emailCo) try{MailApp.sendEmail({
          to:emailCo,subject:subj,
          body:'Coorientador(a), '+s.coorientador.split(' ')[0]+'!\n\nAluno(a): '+nome+'\nEvento: '+desc+'\nData: '+evDateStr+' ('+interval.label+')\n\nPortal LAPEP-ITA — Prof. Ferroni'
        });}catch(e){}
      }
    }

    // Email ao aluno
    if(s&&s.email) try{MailApp.sendEmail({
      to:s.email,subject:subj,
      body:'Olá, '+nome.split(' ')[0]+'!\n\nLembrete do Portal LAPEP-ITA:\n\n"'+desc+'"\nData: '+evDateStr+' ('+interval.label+')\n\nQualquer dúvida, fale com o Prof. Ferroni.\n'+portalUrl
    });}catch(e){}
  });
}

// ── Lembretes semanais (sexta 18h) ───────────────────────────
function sendWeeklyReminders(){
  const students=getStudents(),ss=getSpreadsheet();
  const sh=ss.getSheetByName(SHEET_NAME_REGISTROS);
  const now=new Date(),dw=now.getDay(),diff=dw===0?6:dw-1;
  const mon=new Date(now);mon.setDate(now.getDate()-diff);mon.setHours(0,0,0,0);
  const sent=new Set();
  if(sh&&sh.getLastRow()>1) sh.getDataRange().getValues().slice(1).forEach(r=>{if(new Date(r[0])>=mon)sent.add(r[1]);});
  const url=ScriptApp.getService().getUrl();
  const pend=students.filter(s=>!sent.has(s.nome));
  if(!pend.length) return 'Todos preencheram.';
  pend.forEach(s=>{
    if(!s.email) return;
    try{MailApp.sendEmail({
      to:s.email,
      subject:'LAPEP-ITA: preencha seu registro semanal',
      body:'Olá, '+s.nome.split(' ')[0]+'!\n\nVocê ainda não preencheu o registro desta semana.\nAcesse: '+url+'\n\nProf. Ferroni'
    });}catch(e){}
  });
  return 'Lembretes enviados: '+pend.length;
}

// ── Setup dos gatilhos ───────────────────────────────────────
function setupTriggers(){
  ScriptApp.getProjectTriggers().forEach(t=>{
    if(['sendWeeklyReminders','checkEventAlerts'].includes(t.getHandlerFunction()))
      ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('sendWeeklyReminders').timeBased()
    .onWeekDay(ScriptApp.WeekDay.FRIDAY).atHour(21).create();
  ScriptApp.newTrigger('checkEventAlerts').timeBased()
    .everyDays(1).atHour(11).create();
  return 'Gatilhos configurados.';
}

function getPortalUrl(){return ScriptApp.getService().getUrl();}
function include(fn){return HtmlService.createHtmlOutputFromFile(fn).getContent();}

// ── Coorientadores ───────────────────────────────────────────
function _coorientadoresSheet(){
  const ss=getSpreadsheet();
  let sh=ss.getSheetByName(SHEET_NAME_COORIENTADORES);
  if(!sh){
    sh=ss.insertSheet(SHEET_NAME_COORIENTADORES);
    sh.appendRow(['Nome','Senha','Email']);
    sh.getRange(1,1,1,3).setFontWeight('bold').setBackground('#1a3a5c').setFontColor('#fff');
    sh.setFrozenRows(1);
  } else if(sh.getLastColumn()<3){
    sh.getRange(1,3).setValue('Email').setFontWeight('bold').setBackground('#1a3a5c').setFontColor('#fff');
  }
  return sh;
}

function listCoorientadores(senha){
  if(senha!==SENHA_DASHBOARD) return null;
  const sh=_coorientadoresSheet();
  if(sh.getLastRow()<=1) return [];
  return sh.getDataRange().getValues().slice(1)
    .filter(r=>r[0])
    .map(r=>({nome:String(r[0]),senha:String(r[1]),email:String(r[2]||'')}));
}

function addCoorientador(senha,nomeCompleto,senhaCo,emailCo){
  if(senha!==SENHA_DASHBOARD) return {success:false,error:'Não autorizado.'};
  try{
    if(!nomeCompleto) return {success:false,error:'Nome obrigatório.'};
    if(!senhaCo)      return {success:false,error:'Senha obrigatória.'};
    const sh=_coorientadoresSheet(),d=sh.getDataRange().getValues();
    if(d.some(r=>r[0]&&String(r[0]).toLowerCase()===nomeCompleto.toLowerCase()))
      return {success:false,error:'Coorientador já cadastrado.'};
    sh.appendRow([nomeCompleto,senhaCo,emailCo||'']);
    return {success:true,senha:senhaCo};
  }catch(e){return {success:false,error:e.message};}
}

function removeCoorientador(senha,nomeCoorientador){
  if(senha!==SENHA_DASHBOARD) return {success:false,error:'Não autorizado.'};
  try{
    const sh=_coorientadoresSheet(),d=sh.getDataRange().getValues();
    for(let i=d.length-1;i>=1;i--){
      if(String(d[i][0])===nomeCoorientador){
        sh.deleteRow(i+1);
        // Limpar vínculo nos alunos
        const as=_alunosSheet(),ad=as.getDataRange().getValues();
        for(let j=1;j<ad.length;j++){
          if(String(ad[j][COL_COORIENT-1])===nomeCoorientador)
            as.getRange(j+1,COL_COORIENT).setValue('');
        }
        return {success:true};
      }
    }
    return {success:false,error:'Coorientador não encontrado.'};
  }catch(e){return {success:false,error:e.message};}
}

function atribuirCoorientador(senha,nomeAluno,nomeCoorientador){
  if(senha!==SENHA_DASHBOARD) return {success:false,error:'Não autorizado.'};
  try{
    const sh=_alunosSheet(),d=sh.getDataRange().getValues();
    if(sh.getLastColumn()<COL_COORIENT)
      sh.getRange(1,COL_COORIENT).setValue('Coorientador').setFontWeight('bold').setBackground('#1a3a5c').setFontColor('#fff');
    for(let i=1;i<d.length;i++){
      if(d[i][0]===nomeAluno){
        sh.getRange(i+1,COL_COORIENT).setValue(nomeCoorientador||'');
        return {success:true};
      }
    }
    return {success:false,error:'Aluno não encontrado.'};
  }catch(e){return {success:false,error:e.message};}
}

function getDashboardDataCoorientador(senha){
  const sh=_coorientadoresSheet();
  if(sh.getLastRow()<=1) return null;
  const d=sh.getDataRange().getValues().slice(1);
  const co=d.find(r=>String(r[1])===senha);
  if(!co) return null;
  const nomeCo=String(co[0]);
  const students=getStudents().filter(s=>s.coorientador===nomeCo);
  const ss=getSpreadsheet();
  const regSh=ss.getSheetByName(SHEET_NAME_REGISTROS),regMap={};
  if(regSh&&regSh.getLastRow()>1){
    regSh.getDataRange().getValues().slice(1).forEach(r=>{
      const n=String(r[1]||'');if(!regMap[n])regMap[n]=[];
      regMap[n].push({ts:String(r[0]||''),nivel:String(r[2]||''),semana:String(r[3]||''),
        realizacoes:String(r[4]||''),proximosPassos:String(r[5]||''),
        dificuldades:String(r[6]||''),progresso:String(r[7]||''),observacoes:String(r[8]||'')});
    });
    Object.keys(regMap).forEach(k=>regMap[k].sort((a,b)=>new Date(b.ts)-new Date(a.ts)));
  }
  const evSh=ss.getSheetByName(SHEET_NAME_EVENTOS),evMap={};
  if(evSh&&evSh.getLastRow()>1){
    evSh.getDataRange().getValues().slice(1).forEach(r=>{
      const n=String(r[1]||'');if(!evMap[n])evMap[n]=[];
      evMap[n].push({id:String(r[0]),descricao:String(r[2]||''),data:String(r[3]||'')});
    });
  }
  const result=students.map(s=>({
    nome:s.nome,nivel:s.nivel,tema:s.tema,email:s.email,telefone:s.telefone,
    dataInicio:s.dataInicio,dataFim:s.dataFim,coorientador:s.coorientador||'',
    eventos:evMap[s.nome]||[],registros:regMap[s.nome]||[]
  }));
  result.sort((a,b)=>{
    const ta=a.registros[0]?new Date(a.registros[0].ts):new Date(0);
    const tb=b.registros[0]?new Date(b.registros[0].ts):new Date(0);
    return tb-ta;
  });
  return {auth:true,role:'coorientador',nomeCoorientador:nomeCo,emailCoorientador:String(co[2]||''),students:result};
}
