(function(){
  var WA_NUM = "5567996813014";
  var WA_MSG = "Olá, gostaria de informações sobre atendimento notarial";
  var WA_URL = "https://wa.me/" + WA_NUM + "?text=" + encodeURIComponent(WA_MSG);
  document.querySelectorAll("a.wa").forEach(function(a){ a.href = WA_URL; });

  var SERVICES = {
    escritura:{kicker:"Serviço notarial",title:"Escritura Pública",intro:"Compra e venda, doação, permuta e declarações formalizadas com fé pública, conferindo segurança e eficácia ao negócio jurídico.",modalidade:"Presencial ou por videoconferência (e-Notariado).",requisitos:["Documento de identificação oficial com foto e CPF de todas as partes e respectivos cônjuges","Comprovante de residência atualizado das partes","Certidão de casamento atualizada ou declaração de estado civil; pacto antenupcial, se houver","Matrícula atualizada do imóvel emitida pelo Registro de Imóveis","Certidão negativa de ônus e ações reais e pessoais reipersecutórias sobre o imóvel","Comprovante de quitação de IPTU (urbano) ou ITR e CCIR (rural)","Guia de recolhimento do ITBI ou do ITCMD, conforme a natureza do ato","Contrato social e comprovante de representação, quando houver pessoa jurídica"],comoFunciona:"A serventia recebe a documentação, confere as certidões, apura os tributos incidentes e redige a minuta para conferência das partes. Com a minuta aprovada e os emolumentos recolhidos, a escritura é lida e assinada — presencialmente ou por videoconferência — e o traslado é entregue para registro no Registro de Imóveis."},
    procuracao:{kicker:"Serviço notarial",title:"Procuração Pública",intro:"Outorga de poderes com fé pública para atos de plenos poderes, previdenciários, bancários, imobiliários ou finalidades específicas.",modalidade:"Presencial ou por videoconferência (e-Notariado).",requisitos:["Documento de identificação oficial com foto e CPF do outorgante","Comprovante de residência atualizado","Certidão de casamento atualizada, quando o ato exigir outorga conjugal","Dados completos do procurador: nome, CPF, estado civil, profissão e endereço","Descrição dos poderes pretendidos e a finalidade da procuração","Matrícula do imóvel, quando os poderes envolverem bens imóveis","Contrato social e comprovante de representação, no caso de pessoa jurídica"],comoFunciona:"Os poderes são redigidos conforme a finalidade informada e submetidos à conferência do outorgante. A assinatura pode ser colhida no balcão ou por videoconferência com certificado digital notarizado. Procurações para atos que exijam forma pública são lavradas em livro próprio, com traslado entregue no mesmo atendimento nos casos simples."},
    inventario:{kicker:"Serviço notarial",title:"Inventário & Partilha",intro:"Solução extrajudicial da sucessão quando há consenso entre os herdeiros capazes, sem necessidade de processo judicial.",modalidade:"Presencial ou por videoconferência (e-Notariado), com assistência de advogado.",requisitos:["Certidão de óbito do autor da herança","Documento de identificação oficial com foto e CPF do falecido, dos herdeiros e cônjuges","Certidão de casamento do falecido atualizada; pacto antenupcial, se houver","Certidões de nascimento ou casamento dos herdeiros","Certidão negativa de testamento emitida pela CENSEC","Documentos dos bens: matrículas de imóveis, CRLV de veículos, extratos e saldos bancários","Certidões negativas de débitos federais, estaduais e municipais","Guia de recolhimento do ITCMD","Procuração e indicação do advogado que assistirá as partes"],comoFunciona:"Reunida a documentação, a serventia elabora a minuta da escritura de inventário e partilha, com o plano de partilha acordado entre os herdeiros e o advogado. Após o recolhimento do ITCMD e dos emolumentos, a escritura é assinada por todos e serve de título para o registro dos bens em nome dos herdeiros. A presença de herdeiro incapaz, de testamento ou de litígio remete o caso à via judicial."},
    testamento:{kicker:"Serviço notarial",title:"Testamento",intro:"Planejamento sucessório documentado em vida, com respeito à legítima dos herdeiros necessários e proteção do patrimônio familiar.",modalidade:"Exclusivamente presencial, com duas testemunhas.",requisitos:["Documento de identificação oficial com foto e CPF do testador","Comprovante de residência atualizado","Certidão de casamento atualizada ou comprovação do estado civil","Relação dos bens e valores a serem contemplados","Qualificação completa dos herdeiros e legatários indicados","Duas testemunhas maiores e capazes, sem parentesco com as partes, com documento com foto"],comoFunciona:"O tabelião ouve as disposições de última vontade do testador, orienta quanto aos limites legais — em especial a reserva da legítima — e lavra o testamento em livro próprio. O ato é lido em voz alta na presença das duas testemunhas e assinado por todos. O testamento é comunicado à Central Notarial de Serviços Eletrônicos Compartilhados e pode ser revogado ou alterado a qualquer tempo pelo testador."},
    uniao:{kicker:"Serviço notarial",title:"União Estável & Dissolução",intro:"Formalização ou dissolução da convivência por escritura pública, com definição do regime de bens e efeitos patrimoniais.",modalidade:"Presencial ou por videoconferência (e-Notariado).",requisitos:["Documento de identificação oficial com foto e CPF de ambos os companheiros","Comprovante de residência atualizado","Certidão de nascimento atualizada ou de casamento com averbação do divórcio","Definição do regime de bens pretendido e da data de início da convivência","Relação dos bens a partilhar, no caso de dissolução","Assistência de advogado quando a dissolução envolver partilha de bens"],comoFunciona:"A escritura declara a existência da união estável, a data de início e o regime de bens escolhido, produzindo efeitos patrimoniais e previdenciários e podendo ser averbada no registro civil. Na dissolução, a escritura encerra a convivência e formaliza a partilha acordada. Havendo filhos menores ou incapazes, o caso segue pela via judicial."},
    certidoes:{kicker:"Serviço notarial",title:"Certidões & Autenticações",intro:"Reconhecimento de firma, autenticação de cópias e emissão de certidões de atos lavrados nesta serventia.",modalidade:"Presencial; certidões de atos eletrônicos podem ser solicitadas a distância.",requisitos:["Documento de identificação oficial com foto e CPF do interessado","Documento original a ser autenticado, acompanhado da cópia","Assinatura previamente cadastrada nesta serventia, para reconhecimento de firma","Para abertura de firma: comparecimento pessoal com documento original com foto e CPF","Para certidões: tipo do ato, nome das partes e, se possível, livro, folha e data","Autorização do interessado ou comprovação de legítimo interesse, quando aplicável"],comoFunciona:"Autenticações e reconhecimentos de firma são realizados no mesmo atendimento, no balcão. Para reconhecimento por semelhança é necessária ficha de firma já aberta nesta serventia; por autenticidade, o signatário assina na presença do escrevente. Certidões de atos lavrados aqui são emitidas em pouco tempo; atos de outras serventias devem ser pedidos ao cartório de origem."},
    protesto:{kicker:"Protesto de títulos",title:"Protesto de Títulos",intro:"Apresentação de títulos e documentos de dívida para protesto, cobrança extrajudicial e regularização financeira.",modalidade:"Presencial ou por remessa eletrônica pela Central de Remessa de Arquivos.",requisitos:["Título ou documento de dívida original: duplicata, nota promissória, cheque, contrato ou sentença","Qualificação completa do devedor: nome, CPF ou CNPJ e endereço atualizado","Comprovação da entrega da mercadoria ou da prestação do serviço, no caso de duplicata","Indicação do valor atualizado e da data de vencimento","Documento de identificação e comprovação de representação do apresentante","Para cancelamento: título original quitado ou carta de anuência com firma reconhecida"],comoFunciona:"Recebido o título, a serventia examina os requisitos formais e intima o devedor no prazo legal. O pagamento no cartório dentro do prazo evita o protesto e o valor é repassado ao credor. Não havendo pagamento ou sustação judicial, o título é protestado. Após a quitação, o cancelamento é feito com a apresentação do título original ou de carta de anuência."}
  };

  var home = document.getElementById("home");
  var page = document.getElementById("servico");
  var drawer = document.getElementById("drawer");
  var burger = document.getElementById("burger");

  function closeDrawer(){ drawer.classList.remove("open"); burger.setAttribute("aria-expanded","false"); }
  burger.addEventListener("click", function(){
    var open = drawer.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  function showHome(id){
    page.hidden = true; home.hidden = false; closeDrawer();
    if(id){
      var el = document.getElementById(id);
      if(el) window.scrollTo({top: Math.max(0, el.offsetTop - 78), behavior:"smooth"});
    } else { window.scrollTo(0,0); }
  }

  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener("click", function(e){
      var id = a.getAttribute("href").slice(1);
      if(!id || id === "top"){ e.preventDefault(); showHome(null); return; }
      if(document.getElementById(id)){ e.preventDefault(); showHome(id); }
    });
  });
  document.querySelectorAll("[data-home]").forEach(function(b){
    b.addEventListener("click", function(e){ e.preventDefault(); showHome(null); });
  });

  document.querySelectorAll("[data-svc]").forEach(function(btn){
    btn.addEventListener("click", function(){
      var s = SERVICES[btn.getAttribute("data-svc")];
      if(!s) return;
      document.getElementById("svcKicker").textContent = s.kicker;
      document.getElementById("svcTitle").textContent = s.title;
      document.getElementById("svcIntro").textContent = s.intro;
      document.getElementById("svcModal").textContent = s.modalidade;
      document.getElementById("svcHow").textContent = s.comoFunciona;
      var ul = document.getElementById("svcReq");
      ul.innerHTML = "";
      s.requisitos.forEach(function(r){
        var li = document.createElement("li");
        li.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1D5FD6" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span></span>';
        li.querySelector("span").textContent = r;
        ul.appendChild(li);
      });
      document.title = s.title + " — Tabelionato Água Clara";
      home.hidden = true; page.hidden = false; closeDrawer();
      window.scrollTo(0,0);
    });
  });

  var form = document.getElementById("triagem");
  var err = document.getElementById("formErr");
  form.addEventListener("submit", function(e){
    e.preventDefault();
    var d = new FormData(form);
    var nome = (d.get("nome")||"").trim(), tel = (d.get("telefone")||"").trim(), svc = d.get("servico");
    function fail(m){ err.textContent = m; err.classList.add("show"); }
    err.classList.remove("show");
    if(!nome || !tel || !svc) return fail("Informe nome, telefone e o tipo de serviço desejado.");
    if(!d.get("consent")) return fail("É necessário concordar com a Política de Privacidade para prosseguir.");
    var texto = [
      "Solicitação de atendimento — Tabelionato Água Clara",
      "Nome: " + nome,
      "E-mail: " + ((d.get("email")||"").trim() || "não informado"),
      "Telefone/WhatsApp: " + tel,
      "Serviço: " + svc,
      "Mensagem: " + ((d.get("mensagem")||"").trim() || "—")
    ].join("\n");
    window.open("https://wa.me/" + WA_NUM + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
  });
})();
