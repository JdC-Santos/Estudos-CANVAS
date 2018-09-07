//Class Teclado
//"CONSTANTES": dando o numero(keycode) de cada tecla
//para a variavel que a representará
var SETA_ESQUERDA = 37;
var SETA_DIREITA = 39;
var SETA_CIMA = 38;
var SETA_BAIXO = 40;
var ESPACO = 32;
function Teclado(elemento){
	//
	this.elemento = elemento;
	//armazena as teclas pressionadas em um array(lista)
	this.pressionadas = [];
	//
	this.disparadas = [];
	//
	this.funcoesDisparo = [];
	// a variavel "teclado" recebe o objeto
	var teclado = this;
	//ativa a funcao quando houver teclas sendo pressionadas
	elemento.addEventListener('keydown',function(e){
		//var "tecla" recebe o numero(keyCode) pressionada
		var tecla = e.keyCode;
		//armazena estado da tecla (pressionada = "verdadeiro")
		teclado.pressionadas[tecla] = true;
		//existe funcaoDisparo com essa tecla E na lista de disparo essa tecla está com "false"?
		if(teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla]){
			//defina essa tecla como "true" dentro da lista
			teclado.disparadas[tecla] = true;
			//ative a funcao que a tecla deve disparar
			teclado.funcoesDisparo[tecla] ();
		}
	});
	//ativa a funcao quando teclas estiverem "levantando" (nao achei a palavra exata pra isso, mas é basicamente isso)
	elemento.addEventListener('keyup', function(e){
		//tecla receve o numero(keyCode) da tecla que foi "despressionada"
		var tecla = e.keyCode;
		//está mais sendo pressionada, defina pra false (para que a funcao acima nao faca nenhuma acao baseado nessa tecla)
		teclado.pressionadas[tecla] = false;
		//define para false para que a funcao acima possa disparar eventos baseados nessa tecla
		teclado.disparadas[tecla] = false;
	});
}
Teclado.prototype = {
	pressionada: function(tecla){
		return this.pressionadas[tecla];
	},
	disparou: function (tecla,callback){
		//armazena o numero da tecla e a funcao que ela ativa (a funcao vem de um objeto (heroi,monstro...))
		this.funcoesDisparo[tecla] = callback;
		//dessa forma eu 'conecto' o numero a tecla a ação que deve ser executada exemplo: soltar um Hadouken!
	}
}