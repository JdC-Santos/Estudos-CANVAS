//Class Animacao
function Animacao(ctx){
	//guarda em um array(lista) os sprites a serem animados
	this.sprites = [];
	//inicialmente a animacao está "pausada"
	this.ligado = false;
	//pega o contexto do canvas
	this.ctx = ctx;
	//cria um objeto para testar colisoes
	this.colisor = new Colisor();
}
Animacao.prototype = {
	novoSprite: function(sprite){
		//adiciona um novo sprite na lista de animacoes
		this.sprites.push(sprite);
		this.colisor.novoSprite(sprite);
	},
	ligar: function(){
		//ativa a animacao
		this.ligado = true;
		//chama a função para animar os frames
		this.proximoFrame();
	},
	desligar: function(){
		//"pausa" a animacao
		this.ligado = false;
	},
	proximoFrame: function(){
		//se nao tiver ligado...
		if(!this.ligado){
			//nao continue... (basicamente)
			return
		}
		//chama a funcao para limpar tudo antes de desenhar
		this.limparTela();
		//para cada um sprite na lista (sprites)...
		for(var i in this.sprites){
			//atualize do primeiro ao ultimo (basicamente)
			this.sprites[i].atualizar();
		}
		this.colisor.processar();
		//para cada um sprite na lista (sprites)...
		for(var i in this.sprites){
			//desenhe do primeiro ao ultimo (basicamente)...
			//Obs.: o metodo "desenhar"...
			//...vem de cada objeto que está na lista (sprites)
			this.sprites[i].desenhar();
		}
		//passa os dados dessa classepra variavel "animacao"
		var animacao = this;
		//repita o processo acima!
		requestAnimationFrame(function(){
			animacao.proximoFrame();
		});
	},
	limparTela: function(){
		//passa o contexto do canvas para a variavel "ctx"
		var ctx =  this.ctx;
		//limpa toda a tela do canvas
		ctx.clearRect(0,0,canvas.width,canvas.height);
	}
}