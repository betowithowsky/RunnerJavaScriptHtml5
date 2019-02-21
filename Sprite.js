function Sprite(x, y, largura, altura) {
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas, yCanvas){
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
    }

}

var bg = new Sprite(0,0, 600, 600),
spriteBoneco = new Sprite(620, 5, 74.84,108),
spriteChao = new Sprite(394, 878, 600, 98);

setInterval(function(){
    spriteBoneco.x += 74.84;

    if(spriteBoneco.x > 1069.04){
        spriteBoneco.x = 620;
    }}, 100);