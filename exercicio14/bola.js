//class bola
function Bola(ctx, animacao){
	this.context = ctx;
	this.x = 0;
	this.y = 0;
	this.velocidadeX = 0;
	this.velocidadeY = 0;
	//atributos de desenho padrao
	this.cor = 'black';
	this.raio = 10;
	this.animacao =  animacao;
	this.colisor = null;
}
Bola.prototype = {
	atualizar: function(){
		var ctx = this.context;
		this.x += this.velocidadeX;
		this.y += this.velocidadeY;
		this.verificarLimite();
	},
	desenhar: function(){
		var ctx = this.context;
		//guardar as configuracoes atuais
		ctx.save();
		//configurar o contexto de acordo com a bola
		ctx.fillStyle = this.cor;
		//desenhar
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.raio,0,2*Math.PI,false);
		ctx.fill();
		//voltar as configuracoes anteriores
		ctx.restore();
	},
	retangulosColisao: function(){
		return [{
			x: this.x,
			y: this.y,
			largura: this.raio,
			altura: this.raio
		}];
	},
	colidiuCom: function(){

	},
	verificarLimite: function(){
		if((this.x > canvas3.width) || (this.x + this.largura < 0) ||
			this.y > canvas3.height || (this.y + this.altura  < 0)){
			this.animacao.excluirSprite(this);
	        this.colisor.excluirSprite(this);
		}
	}
}