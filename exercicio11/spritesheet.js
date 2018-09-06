//Class Spritesheet
function Spritesheet(ctx,img,l,c){
	//contexto do canvas
	this.ctx = ctx;
	//se refere ao objeto (heroi/imagem)
	this.img = img;
	//se refere ao total de linhas e colunas
	//para criar a "grade" de divisao do spritesheet
	this.numLinhas = l;
	this.numColunas = c;
	//o tempo para mudar de imagem
	this.intervalo = 0;
	//se refere a linha e coluna atuais
	this.linha = 0;
	this.coluna = 0;
}
Spritesheet.prototype = {
	proximoQuadro: function(){
		//pega o momento atual
		var agora = new Date().getTime();
		//se ainda nao tiver definido o ultimo tempo
		if(!this.ultimoTempo){
			//define o ultimoTempo com o tempo atual
			this.ultimoTempo = agora;
		}
		//se o intervalo atual for menor que o definido
		if(agora - this.ultimoTempo < this.intervalo){
			//faça nada...
			return;
		}
		//se nao chegou na ultima coluna...
		if(this.coluna < this.numColunas -1){
			//vai pra proxima!
			this.coluna++;
		//se ja chegoou na ultima coluna...
		}else{
			//volte para a coluna 0
			this.coluna = 1;
		}
		//depois de mudar, atualiza o ultimoTempo
		//para a proxima comparação
		this.ultimoTempo = agora;
	},
	desenhar: function(x,y){
		//define a largura para cada quadrado
		var larguraQ = this.img.width / this.numColunas;
		//define a altura para cada quadrado
		var alturaQ = this.img.width / this.numLinhas;
		//desenha no canvas
		this.ctx.drawImage(
			this.img,
			larguraQ * this.coluna,//eixo X na imagem
			alturaQ * this.linha,//eixo Y na imagem
			larguraQ,//largura na imagem
			alturaQ,//altura na imagem
			x,//eixo X no canvas
			y,//eixo X no canvas
			larguraQ,//largura no canvas
			alturaQ//altura no canvas
		);
	}
}