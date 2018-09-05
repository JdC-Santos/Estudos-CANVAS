//class spritesheet
function Spritesheet(ctx,img,l,c){
	this.context = ctx;
	this.imagem = img;
	this.numLinhas = l;
	this.numColunas = c;
	this.intervalo = 0;
	this.linha = 0;
	this.coluna = 0;
}
Spritesheet.prototype = {
	proximoQuadro: function(){
		//momento atual
		var agora = new Date().getTime();
		//se anda nao tem ultimo tempo medido
		if(!this.ultimoTempo){
			this.ultimoTempo = agora;
		}
		//ja é hora de mudar de coluna?
		if(agora - this.ultimoTempo < this.intervalo){
			return;
		}
		if(this.coluna < this.numColunas -1){
			this.coluna++;
		}else{
			this.coluna = 0;
		}

		this.ultimoTempo = agora;
	},
	desenhar: function(x,y){
		var larguraQ = this.imagem.width / this.numColunas;
		var alturaQ = this.imagem.height / this.numLinhas;

		this.context.drawImage(
			this.imagem,
			larguraQ * this.coluna,
			alturaQ * this.linha,
			larguraQ,
			alturaQ,
			x,
			y,
			larguraQ,
			alturaQ
		);
	}
}