//funcao construtora
function Carro(cor,veloMax){
	this.cor = cor;
	this.veloMax = veloMax;
	this.veloAtual =0;
}
//prototype com os metodos
Carro.prototype = {
	acelerar:function(){
		this.veloAtual+=10;
	},
	desacelerar:function(){
		if(this.veloAtual > 0){
			this.veloAtual -=10;
		}
	}
}