import Phaser, { Game } from 'phaser'

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('Locked and Loaded!')

});

function preload() {
  this.load.setBaseURL('./img')
  this.load.image('sky', '/plant-palace-logo.png')
  this.load.image('logo', 'assets/plants/medium/plant-orange-medium.png')
}

function create() {
  // this.add.image(400, 300, 'sky')

  const logo = this.physics.add.image(400, 100, 'logo')

  logo.setVelocity(100, 200)
  logo.setBounce(1, 1)
  logo.setCollideWorldBounds(true)

  emitter.startFollow(logo)
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

new Phaser.Game(config)
