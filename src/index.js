import Phaser from 'phaser'

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('Locked and Loaded!')

});

var OPENING = 200;

const config = {
  type: Phaser.CANVAS,
  physics: {
    defualt: 'arcade',
    arcade: {
      debug: false
    }
  },
  backgroundColor: '#747B75',
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  scale: {
    mode: Phaser.Scale.FIT,
    width: 1000,
    height: 600,
  }
}

const game = new Phaser.Game(config)

function preload() {

  // game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  // game.scale.pageAlignHorizontally = true;
  // game.scale.pageAlignVertically = true;
  
  this.load.setBaseURL('./img/assets')
  this.load.image('logo', 'pp-game-logo.png')
  this.load.image('level1', '/bg/level-1.png')
  this.load.image('sidePanel', '/bg/side-panel.png')
  this.load.image('wall', '/furniture/walls/platform.png')
  // this.load.image('plant1', 'assets/plants/short/leafy-plant-short.png')
  // this.load.image('plant2', 'assets/plants/tall/man-eater-tall.png')
  // this.load.image('plant3', 'assets/plants/short/bonsai-short.png')

}



function create() {
  // this.physics.startSystem(Phaser.Physics.ARCADE)

  const level1 = this.add.image(390, 340, 'level1')
  const sidepanel = this.add.image(880, 340, 'sidePanel')

  const grid = this.add.grid(390, 340, 640, 416, 32, 32, 0xFADEA8)
  grid.fillAlpha = 0
  grid.outlineFillColor = "#7C877B"
  grid.outlineFillAlpha = 0.12


  const logo = this.add.image(390, 75, 'logo')
  logo.scale = 0.3

  this.scene.add

  // this.walls = this.add.group();

  function xpos(x) { return 80 + (32 * x) }
  function ypos(y) { return 120 + (32 * y) }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // const mo = this.add.GameObject.Image(xpos(getRandomInt(10)), ypos(getRandomInt(10)), 'MovingObject')
  // const plant1 = this.add.image(xpos(getRandomInt(20)), ypos(getRandomInt(13)), 'plant1')
  // const plant2 = this.add.image(xpos(getRandomInt(20)), ypos(getRandomInt(13)), 'plant2')
  // const plant3 = this.add.image(xpos(getRandomInt(20)), ypos(getRandomInt(13)), 'plant3')

  // const title = this.add.text(300, 25, 'Plant Palace', 50)

  // title.fontSize = 50


  // plant1.scale = 0.3
  // plant2.scale = 0.3
  // plant3.scale = 0.3

  // this.add.sprite(xpos(getRandomInt(10), ypos(getRandomInt(10), 'plant3')

  // this.tweens.add({

  //   targets: [plant1, plant2, plant3],
  //   // scaleX: 0.32,
  //   // scaleY: 0.32,
  //   angle: 5,
  //   yoyo: true,
  //   repeat: -1,
  //   ease: 'Sine.easeInOut'

  // });
}

function update() {};
