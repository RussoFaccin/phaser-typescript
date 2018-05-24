export class SimpleGame{
  game: Phaser.Game;
  constructor(canvasContainer: String){
    this.game = new Phaser.Game(800, 600, Phaser.AUTO, canvasContainer, {preload: this.preload, create: this.create});
  }
  preload(){
    this.game.load.image('logo', 'assets/phaser.png');
  }
  create(){
    var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  }
}

window.onload = () => {
  var game = new SimpleGame('content');
}