import Phaser, { Game } from 'phaser'
import Grid from './scripts/grid.js'

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('Locked and Loaded!')

});

function preload() {
  this.load.setBaseURL('./img')
  // this.load.image('logo', 'plant-palace-logo.png')
  this.load.image('plant1', 'assets/plants/short/leafy-plant-short.png')
  this.load.image('plant2', 'assets/plants/tall/man-eater-tall.png')
  this.load.image('plant3', 'assets/plants/short/bonsai-short.png')
}

function create() {

  const grid = this.add.grid(400, 300, 640, 416, 32, 32, 0xFADEA8)

  // const logo = this.add.image(400, 30, 'logo')

  function xpos(x) { return 90 + (32 * x)}
  function ypos(y) { return 80 + (32 * y)}
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // for(leti=0;i<45;i++) {
  //   this.add.image(xpos(getRandomInt(10)), ypos(getRandomInt(10)))
  // }

  const plant1 = this.add.image(xpos(getRandomInt(10)), ypos(getRandomInt(10)), 'plant1')
  const plant2 = this.add.image(xpos(getRandomInt(10)), ypos(getRandomInt(10)), 'plant2')
  const plant3 = this.add.image(xpos(getRandomInt(10)), ypos(getRandomInt(10)), 'plant3')

  // logo.scale = 0.4

  plant1.scale = 0.3
  // plant1.setVelocity(100, 200)
  // plant1.setBounce(1, 1)
  // plant1.setCollideWorldBounds(true)

  plant2.scale = 0.3
  // plant2.setVelocity(50, 25)
  // plant2.setBounce(1, 1)
  // plant2.setCollideWorldBounds(true)

  plant3.scale = 0.3
  // plant3.setVelocity(100, 200)
  // plant3.setBounce(1, 1)
  // plant3.setCollideWorldBounds(true)

  // emitter.startFollow(logo)

  this.tweens.add({

    targets: [plant1, plant2, plant3],
    // scaleX: 0.32,
    // scaleY: 0.32,
    angle: 5,
    yoyo: true,
    repeat: -1,
    ease: 'Sine.easeInOut'

  });
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#A69EB0',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload: preload,
    create: create
  }
}

const game = new Phaser.Game(config)
