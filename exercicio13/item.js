//Class item
function Item(ctx,x,y){
	this.x =x;
	this.y =y;
	this.l = 15;
	this.a = 15;
	this.ctx = ctx;
	this.cor = 'black';
	
}
Item.prototype = {
	atualizar: function(){

	},
	desenhar: function(){
		this.ctx.fillStyle = this.cor;
		this.ctx.fillRect(this.x,this.y,this.l,this.a);
	},
	retangulosColisao: function(){
		return [{
			x: this.x,
			y: this.y,
			largura: this.l,
			altura: this.a
		}];
	},
	colidiuCom: function(){
		this.cor = 'yellow';
	}
}