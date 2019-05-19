function Alvo(ctx,animacao,direcao,local){
	this.x = 0;
	this.y = 0;
	this.l = 25;//largura
	this.a = 25;//altura
	this.context = ctx;
	this.animacao = animacao;
	this.direcao = direcao;
	this.cor = 'yellow';
	this.colisor = null;

	if(direcao == 1){
		this.x = local;
	}else if(direcao == 2){
		this.x = local;
		this.y = 400;
	}else if(direcao == 3){
		this.y = local;
	}else{
		this.y = local;
		this.x = 500;
	}
}
Alvo.prototype = {
	atualizar: function(){
		if(this.direcao == 1){
			this.y += 1;
		}else if(this.direcao == 2){
			this.y -=1;
		}else if(this.direcao == 3){
			this.x +=1;
		}else{
			this.x -=1;
		}

		this.verificarLimite();
	},
	desenhar: function(){
		var ctx =  this.context;

		ctx.save();
		ctx.fillStyle = this.cor;
		if(this.direcao == 1 ){// cima para baixo
			ctx.fillRect(this.x,this.y,this.l,this.a);
		}else if(this.direcao == 2){//baixo para cima
			ctx.fillRect(this.x,this.y,this.l,this.a);
		}else if(this.direcao == 3){
			ctx.fillRect(this.x,this.y,this.l,this.a);
		}else{
			ctx.fillRect(this.x,this.y,this.l,this.a);
		}
	},
	retangulosColisao: function(){
		return [{
			x: this.x,
			y: this.y,
			largura: this.l,
			altura: this.a
		}];
	},
	colidiuCom: function(outro){
		if((outro instanceof Bola)){
			this.animacao.excluirSprite(this);
	        this.colisor.excluirSprite(this);
	        this.animacao.excluirSprite(outro);
	        this.colisor.excluirSprite(outro);
		}else if(outro instanceof Heroi){
			console.log('caboo');
			this.animacao.desligar();
		}
	},
	verificarLimite: function(){
		if((this.x > canvas3.width) || (this.x + this.largura < 0) ||
			this.y > canvas3.height || (this.y + this.altura  < 0)){
			this.animacao.excluirSprite(this);
	        this.colisor.excluirSprite(this);
		}
	}
}