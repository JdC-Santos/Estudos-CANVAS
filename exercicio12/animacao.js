function Animacao(context){
	this.sprites = [];//array
	this.ligado = false;
	this.context = context;
}
Animacao.prototype = {
	novoSprite: function(sprite){
		this.sprites.push(sprite);
	},
	ligar: function(){
		this.ligado = true;
		this.proximoFrame();
	},
	desligar: function(){
		this.ligado = false;
	},
	proximoFrame: function(){
		//posso continuar?
		if(!this.ligado) return;
		//a cada ciclo limpamos a tela
		this.limparTela();
		//atualizamos o estado dos sprites
		for(var i in this.sprites){
			this.sprites[i].atualizar();
		}
		//desenhamos os sprites
		for(var i in this.sprites){
			this.sprites[i].desenhar();
		}
		//chamamos o proximo ciclo
		var animacao = this;
		requestAnimationFrame(function(){
			animacao.proximoFrame();
		});
	},
	limparTela: function(){
		var ctx = this.context;
		ctx.clearRect(0,0,canvas.width,canvas.height);
	}
}