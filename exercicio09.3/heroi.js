var DIRECAO_ESQUERDA = 1;
var DIRECAO_DIREITA  = 2;
var DIRECAO_CIMA 	 = 3;
var DIRECAO_BAIXO 	 = 4;
//classe heroi
function Heroi(ctx3,teclado,animacao){
	this.context = ctx3;
	this.teclado = teclado;
	this.animacao = animacao;
	this.x = 0;
	this.y = 0;
	//direcao padrao
	this.direcao = DIRECAO_DIREITA;
}
Heroi.prototype = {
	atualizar: function(){
		if(this.teclado.pressionada(SETA_ESQUERDA) && this.x >10){
			this.direcao = DIRECAO_ESQUERDA;
			this.x -=5;
		}else if(this.teclado.pressionada(SETA_DIREITA) && this.x < this.context.canvas.width - 20){
			this.direcao = DIRECAO_DIREITA;
			this.x +=5;
		}else if(this.teclado.pressionada(SETA_CIMA) && this.y > 10){
			this.direcao = DIRECAO_CIMA;
			this.y -=5;
		}else if(this.teclado.pressionada(SETA_BAIXO) && this.y < this.context.canvas.height -20){
			this.direcao = DIRECAO_BAIXO;
			this.y +=5;
		}
	},
	desenhar: function(){
			this.context.fillStyle = 'black';
			this.context.fillRect(this.x-5,this.y-5,20,20);
			this.context.fillStyle = 'blue';
			this.context.fillRect(this.x,this.y,10,10);
			this.context.fillStyle = 'black';
		if(this.direcao == DIRECAO_DIREITA){
			this.context.fillRect(this.x+15,this.y+3,5,4);
		}else if(this.direcao == DIRECAO_ESQUERDA){
			this.context.fillRect(this.x-10,this.y+3,5,4);
		}else if(this.direcao == DIRECAO_CIMA){
			this.context.fillRect(this.x+3,this.y-10,4,5);
		}else if(this.direcao == DIRECAO_BAIXO){
			this.context.fillRect(this.x+3,this.y+15,4,5);
		}
		
	},
	atirar: function(){
		var tiro = new Bola(this.context);
		if(this.direcao == DIRECAO_DIREITA){
			tiro.x = this.x + 5;
			tiro.y = this.y + 5;
			tiro.velocidadeX = 20;
		}else if(this.direcao == DIRECAO_ESQUERDA){
			tiro.x = this.x + 2;
			tiro.y = this.y + 5;
			tiro.velocidadeX = -20;
		}else if(this.direcao == DIRECAO_CIMA){
			tiro.x = this.x + 5;
			tiro.y = this.y + 2;
			tiro.velocidadeY = -20;
		}else if(this.direcao == DIRECAO_BAIXO){
			tiro.x = this.x + 5;
			tiro.y = this.y + 5;
			tiro.velocidadeY = 20;
		}
		tiro.raio = 2;
		tiro.cor = 'black';
		
		this.animacao.novoSprite(tiro);
	}
}