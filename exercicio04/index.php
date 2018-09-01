<!DOCTYPE html>
<html>
<head>
	<title>Exercicio 04</title>
</head>
<style type="text/css">
	canvas{
		background:#ccc;
	}
</style>
<body>
	<canvas id="canvas" width="600" height="80">
		Seu Parsa nao pode usar canvas, Browser!
	</canvas>
	<br>
	<canvas id="canvas2" width="600" height="80">
		Seu Parsa nao pode usar canvas, Browser!
	</canvas>
	<canvas id="canvas3" width="600" height="600">
		Seu Parsa nao pode usar canvas, Browser!
	</canvas>
	<script type="text/javascript">
		/*========================================
			EXERCICIOS PRINCIPAIS
		==========================================*/
			var c = document.getElementById('canvas');
			var ctx = c.getContext('2d');
			//carregando ibagem
			var img = new Image();
			img.src = 'img/ovni.png';
			img.onload = function(){
				var x = 20;
				//desenhar as ibagens, quero ibagens!!
				for(var i=1;i<=5;i++){
					ctx.drawImage(img,	//objeto(imagem)
								  x,	//X
								  20,	//Y
								  64,	//largura
								  32);	//altura
					x+=70;
				}
			}
			//EXPLOOOSIION
			var c2 = document.getElementById('canvas2');
			var ctx2 = c2.getContext('2d');
			//carregando a EXPLOOOOOSION
			var img2 = new Image();
			img2.src = 'img/explosao.png';
			img2.onload = function(){
				ctx2.drawImage(
					img2,
					80,10,60,65,//area da img a ser mostrada
					20,20,60,65// posição e tamanho no canvas(x,y,larg,alt)
					);
			}
		/*========================================
			TREINO 01 : posicionar todas as imagens da EXPLOOOOOOOOSION uma embaixo da outra
		==========================================*/
			var c3 = document.getElementById('canvas3');
			var ctx3 = c3.getContext('2d');
			var img3 = new Image();
			img3.src = 'img/explosao.png';

			img3.onload = function(){
				ctx3.drawImage(img3,
					0,10,60,65,//quadrado na imagem
					10,10,60,65);//area do canvas
				ctx3.drawImage(img3,
					80,0,60,65,//quadrado na imagem
					20,50,60,65);//area do canvas
				ctx3.drawImage(img3,
					150,0,60,65,//quadrado da imagem
					20,120,60,65);//area do canvas
				ctx3.drawImage(img3,
					210,0,60,65,//quadrado da imagem
					10,190,60,65);//area do canvas
				ctx3.drawImage(img3,
					280,0,60,65,//area da imagem
					10,250,60,65);//area do canvas
			}
	</script>
</body>
</html>