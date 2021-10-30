import Phaser, { Game, GameObjects, Plugins } from 'phaser'
import {MovingObject, MovingObjectPlugin} from './scripts/moving_object.js'



window.addEventListener('DOMContentLoaded', (event) => {
  console.log('Locked and Loaded!')

});

const config = {
  type: Phaser.AUTO,
  width: 950,
  height: 600,
  backgroundColor: '#41633D',
  // pixelArt: true,
  global: [
    { key: 'MovingObjectPlugin', plugin: MovingObjectPlugin, start: true }
  ],
  scene: {
    preload: preload,
    create: create
  }
}

const game = new Phaser.Game(config)

function preload() {
  this.load.setBaseURL('./img')
  this.load.image('logo', '/assets/pp-game-logo.png')
  this.load.image('level1', 'bg/level-1.png')
  this.load.image('plant1', 'assets/plants/short/leafy-plant-short.png')
  this.load.image('plant2', 'assets/plants/tall/man-eater-tall.png')
  this.load.image('plant3', 'assets/plants/short/bonsai-short.png')
  this.load.image('MovingObject', 'assets/plants/short/bonsai-short.png')
}

function create() {

  

  const bg = this.add.image(390, 340, 'level1')
  const grid = this.add.grid(390, 340, 640, 416, 32, 32, 0xFADEA8)
  const logo = this.add.image(390, 58, 'logo')

  function xpos(x) { return 80 + (32 * x) }
  function ypos(y) { return 120 + (32 * y) }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // const mo = this.add.GameObject.Image(xpos(getRandomInt(10)), ypos(getRandomInt(10)), 'MovingObject')
  const plant1 = this.add.image(xpos(getRandomInt(20)), ypos(getRandomInt(13)), 'plant1')
  const plant2 = this.add.image(xpos(getRandomInt(20)), ypos(getRandomInt(13)), 'plant2')
  const plant3 = this.add.image(xpos(getRandomInt(20)), ypos(getRandomInt(13)), 'plant3')

  // const title = this.add.text(300, 25, 'Plant Palace', 50)

  // title.fontSize = 50
  bg.scale = 1
  logo.scale = 0.3
  grid.fillAlpha = 0
  grid.outlineFillColor = "#F7EEDE"
  grid.outlineFillAlpha = 0.2

  plant1.scale = 0.3

  plant2.scale = 0.3

  plant3.scale = 0.3

  // this.add.sprite(xpos(getRandomInt(10), ypos(getRandomInt(10), 'plant3')

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
