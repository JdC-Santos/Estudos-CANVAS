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
	this.spritesExcluir = [];
   	this.processamentosExcluir = [];
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
		this.processarExclusoes();
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
		ctx.clearRect(0,0,canvas3.width,canvas3.height);
	},
	excluirSprite: function(sprite) {
      	this.spritesExcluir.push(sprite);
   	},

   	processarExclusoes: function() {
     	// Criar novos arrays
      	var novoSprites = [];
      	var novoProcessamentos = [];
      
      	// Adicionar somente se não constar no array de excluídos
      	for (var i in this.sprites) {
         	if (this.spritesExcluir.indexOf(this.sprites[i]) == -1)
            	novoSprites.push(this.sprites[i]);
      	}
      
      // for (var i in this.processamentos) {
      //    if (this.processamentosExcluir.indexOf(this.processamentos[i])
      //        == -1)
      //       novoProcessamentos.push(this.processamentos[i]);
      // }
      
      // Limpar os arrays de exclusões
      this.spritesExcluir = [];
      // this.processamentosExcluir = [];
      
      // Substituir os arrays velhos pelos novos
      this.sprites = novoSprites;
      // this.processamentos = novoProcessamentos;
	}
}