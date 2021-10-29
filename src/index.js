import Phaser, { Game } from 'phaser'

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('Locked and Loaded!')

});

function preload() {
  this.load.setBaseURL('./img')
  this.load.image('logo', 'plant-palace-logo.png')
  this.load.image('plant1', 'assets/plants/short/leafy-plant-short.png')
  this.load.image('plant2', 'assets/plants/tall/man-eater-tall.png')
  this.load.image('plant3', 'assets/plants/short/bonsai-short.png')
}

function create() {

  const logo = this.add.image(400, 300, 'logo')

  const plant1 = this.physics.add.image(400, 100, 'plant1')
  const plant2 = this.physics.add.image(25, 50, 'plant2')
  const plant3 = this.physics.add.image(600, 50, 'plant3')

  logo.scale = 0.4


  plant1.setVelocity(100, 200)
  plant1.setBounce(1, 1)
  plant1.setCollideWorldBounds(true)

  plant2.setVelocity(50, 25)
  plant2.setBounce(1, 1)
  plant2.setCollideWorldBounds(true)

  plant3.setVelocity(100, 200)
  plant3.setBounce(1, 1)
  plant3.setCollideWorldBounds(true)

  // emitter.startFollow(logo)
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
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
