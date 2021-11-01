import Phaser from 'phaser'
// import './scripts/phaser.min.js'

window.addEventListener('DOMContentLoaded', (event) => {
  console.log('Locked and Loaded!')

});

const config = {
  type: Phaser.CANVAS,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
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
    max: {
      width: 1000,
      height: 700
    },
    min: {
      width: 750,
      height: 500
    }
  }
}

const game = new Phaser.Game(config)

function preload() {
  this.load.setBaseURL('./img/assets')
  this.load.image('logo', 'pp-game-logo.png')
  this.load.image('level1', '/bg/lv1-floor.png')
  this.load.image('sidePanel', '/bg/side-panel.png')
  this.load.image('plant1', '/plants/short/leafy-plant-short.png')
  this.load.image('plant2', '/plants/tall/man-eater-tall.png')
  this.load.image('plant3', '/plants/short/bonsai-short.png')
  // this.load.image('tiles', '/bg/lvl1-walls.png')
  // this.load.image('walls', '/bg/lvl1-walls.png')
  this.load.image('wall1', '/furniture/walls/wall-h-1.png')
  this.load.image('wall2', '/furniture/walls/wall-h-2.png')
  this.load.image('wall3', '/furniture/walls/wall-v-1.png')
}
var plant1;
var cursors;
var wall1;
var wall2;
var wall3;

function create() {
  this.physics.world.setBounds(55, 70, 670, 480)
  

  this.add.image(390, 340, 'level1')
  this.add.image(880, 340, 'sidePanel')

  const grid = this.add.grid(390, 340, 640, 416, 32, 32, 0xFADEA8)
  grid.fillAlpha = 0
  grid.outlineFillColor = "#7C877B"
  grid.outlineFillAlpha = 0.12


  const logo = this.add.image(390, 75, 'logo')
  logo.scale = 0.3

  wall1 = this.physics.add.sprite(165, 308, 'wall1')
  wall1.body.immovable = true;

  wall2 = this.physics.add.sprite(260, 405, 'wall2')
  wall2.body.immovable = true;
  wall3 = this.physics.add.sprite(343, 228, 'wall3')
  wall3.body.immovable = true;
  // wall1.setCollisionBetween(54, 83)

  function xpos(x) { return 80 + (32 * x) }
  function ypos(y) { return 120 + (32 * y) }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  plant1 = this.physics.add.sprite(xpos(getRandomInt(20)), ypos(getRandomInt(13)), 'plant2', 1)
  plant1.scale = 0.3

  cursors = this.input.keyboard.createCursorKeys();
  plant1.body.collideWorldBounds = true;
}

function update() {

  if (cursors.up.isDown)
    plant1.y -= 6;
  if (cursors.down.isDown)
    plant1.y += 6;
  if (cursors.left.isDown)
    plant1.x -= 6;
  if (cursors.right.isDown)
    plant1.x += 6;
  this.physics.collide(wall1, plant1);
};

// function startDrag(targets) {
//   this.input.off('pointerdown', this.startDrag, this)
//   this.dragObj = targets[0]
//   this.input.on('pointermove', this.doDrag, this)
//   this.input.on('pointerup', this.stopDrag, this)
// }

// function doDrag(pointer) {
//   this.dragObj.x = pointer.x;
//   this.dragObj.y = pointer.y;
// }

// function stopDrag() {
//   this.input.on('pointerdown', this.startDrag, this)
//   this.input.off('pointermove', this.doDrag, this)
//   this.input.on('pointerup', this.stopDrag, this)
// }

// function propogate() {

//   function xpos(x) { return 80 + (32 * x) }
//   function ypos(y) { return 120 + (32 * y) }
//   function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }

//   let xx = xpos(getRandomInt(20));
//   let yy = ypos(getRandomInt(13));

//   for (let i = 0; i < 7; i++) {
//     xx = xpos(getRandomInt(20));
//     yy = ypos(getRandomInt(13));
//     let clone = this.add.image(xx, yy, 'plant1')
//     clone.scale = 0.3
//     clone.setInteractive()
//   }
// }