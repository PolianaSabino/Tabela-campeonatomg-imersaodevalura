var atletico = {
    nome: "Atlético",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
    aproveitamentos: 0
}

var america = {
    nome: "América",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
    aproveitamentos: 0
}

var cruzeiro = {
    nome: "Cruzeiro",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
    aproveitamentos: 0
}

  atletico.pontos = calculaPontos(atletico)
  america.pontos = calculaPontos(america)
  cruzeiro.pontos = calculaPontos(cruzeiro)
 
  function calculaPontos(times){
   var pontos = (times.vitorias * 3) + times.empates
   return pontos
}

  var times = [atletico, america, cruzeiro]

  exibirTimesNaTela(times)

  function exibirTimesNaTela(times){
  var html = ""
  for(var i=0; i < times.length; i++){
    html += "<tr><td>" + times[i].nome + "</td>"
    html += "<td>" + times[i].vitorias + "</td>"
    html += "<td>" + times[i].empates + "</td>"
    html += "<td>" + times[i].derrotas + "</td>"
    html += "<td>" + times[i].pontos + "</td>"
    html += "<td>" + times[i].aproveitamentos + "</td>"
    html += "<td><button onClick='adicionarVitoria("+ i + ")'>Vitoria</button></td>"
    html += "<td><button onClick='adicionarEmpate("+ i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota("+ i + ")'>Derrota</button></td></tr>"
 }

 var tabelaTimes = document.getElementById("tabelaTimes")
 tabelaTimes.innerHTML = html
}
  function adicionarVitoria(i){
  var time = times[i]
  time.vitorias++
  time.pontos = calculaPontos(time)
  exibirTimesNaTela(times)
}

  function adicionarEmpate(i){
  var time = times[i]
  time.empates++
  time.pontos = calculaPontos(time)
  exibirTimesNaTela(times)
}

  function adicionarDerrota(i){
  var time = times[i]
  time.derrotas++
  exibirTimesNaTela(times)
}

  atletico.aproveitamentos = calculaAproveitamentos(atletico)
  america.aproveitamentos = calculaAproveitamentos(america)
  cruzeiro.aproveitamentos = calculaAproveitamentos(cruzeiro)
 
  function calculaAproveitamentos(times){
  var aproveitamentos = (times.pontos / 33) * 100 
  return aproveitamentos.toFixed(1);
  exibirTimesNaTela(times)
}

  function adicionarVitoria(i){
  var time = times[i]
  time.vitorias++
  time.pontos = calculaPontos(time)
  time.aproveitamentos = calculaAproveitamentos(time) 
  exibirTimesNaTela(times)
}

 function adicionarEmpate(i){
  var time = times[i]
  time.empates++
  time.pontos = calculaPontos(time)
  time.aproveitamentos = calculaAproveitamentos(time) 
  exibirTimesNaTela(times)
}
