//Class Hero
//"CONSTANTES" para facilitar a leitura do codigo
var HERO_CIMA = 0;
var HERO_ESQUERDA = 1;
var HERO_BAIXO = 2;
var HERO_DIREITA = 3;

function Hero(ctx,teclado,img){
	this.ctx = ctx;
	this.teclado = teclado;
	this.x = 0;
	this.y = 0;
	//quantos pixels o heroi vai andar entre 1 animacao e outra
	this.velocidade = 2;
	//cria um objeto do tipo Spritesheet para controlar a a sequencia de movimentos do heroi
	this.sheet = new Spritesheet(ctx,img,9,9);
	//intervalo de tempo entre uma animacao e outra
	this.sheet.intervalo = 60;
	//inicia com ele parado
	this.andando = false;
	//inicia com ele virado pra baixo
	this.direcao = HERO_BAIXO;
}
Hero.prototype = {
	atualizar: function(){
		//se a tecla pressionada for a da direita...
		if(this.teclado.pressionada(SETA_DIREITA)){
			//se ele (nao estiver andando) ou a direcao atual for diferente da direia...
			if(!this.andando || this.direcao != HERO_DIREITA){
				//va para a linha 3 (que é a linha de imagens andando para a direita)
				this.sheet.linha = 3;
				//va para a coluna zero (para iniciar a animacao do inicio)
				this.sheet.coluna = 0;
			}
			//se a tecla pressionada for a da direita
			if(this.teclado.pressionada(SETA_DIREITA)){
				//define o andando como verdadeiro, ou seja, está falando q ele está andando agora!
				this.andando = true;
				//vira ele para a direita (quando estiver parado vai ficar olhando pra direita)
				this.direcao = HERO_DIREITA;
				//chma o proximo desenho
				this.sheet.proximoQuadro();
				//avanca para a direita
				if(this.x < this.ctx.canvas.height - 45)
					this.x += this.velocidade;
			}
		//se a tecla apertada for a da esquerda...
		}else if(this.teclado.pressionada(SETA_ESQUERDA)){
			//se ele estiver parado e nao estiver virado para a esquerda...
			if(!this.andando || this.direcao != HERO_ESQUERDA){
				//vai pra linha 2, que é a linha de imagens andando para a esquerda
				this.sheet.linha = 1;
				//vai para a coluna 1 para iniciar a animacao do zero
				this.sheet.coluna = 0;
			}
			//define q agora ele está andando
			this.andando = true;
			//define que o heroi está virado para a esquerda
			this.direcao = HERO_ESQUERDA;
			//chama o proximo desenho da linha
			this.sheet.proximoQuadro();
			//faz o heroi andar para a esquerda
			if(this.x >= -15)
				this.x -= this.velocidade;
		}else if(this.teclado.pressionada(SETA_CIMA)){
			//se o heroi estiver parado ou nao estiver virado para cima...
			if(!this.andando || this.direcao != HERO_CIMA){
				//vai para a linha 1 que é a linha que o heroi anda para cima
				this.sheet.linha = 0;
				//vai para a coluna 1 para iniciar a animacao
				this.sheet.coluna = 0;
			}
			//define q agora ele está andando!
			this.andando = true;
			//define que o heroi está virado para cima!
			this.direcao = HERO_CIMA;
			//chama o proximo desenho da linha
			this.sheet.proximoQuadro();
			//faz o heroi andar para cima
			this.y -= this.velocidade;
		}else if(this.teclado.pressionada(SETA_BAIXO)){
			//se ele estiver parado OU a direcao nao foi pra baixo...
			if(!this.andando || this.direcao != HERO_BAIXO){
				//coloca na linha 3, que é a que o heroi está virado para baixo
				this.sheet.linha = 2;
				//coloca na primeira coluna para iniciar a animacao
				this.sheet.coluna = 0;
			}
			//define que agora ele está andando.
			this.andando = true;
			//define que o heroi está virado para baixo
			this.direcao = HERO_BAIXO;
			//chama o proximo desenho da linha
			this.sheet.proximoQuadro();
			//faz o heroi andar para baixo
			this.y += this.velocidade;
		}else{
			this.sheet.linha = this.direcao;
			this.sheet.coluna = 0;
			this.andando = false;			
		}
	},
	desenhar: function(){
		this.sheet.desenhar(this.x,this.y);
	}
}