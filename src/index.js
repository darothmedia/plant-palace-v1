import Phaser from 'phaser'
import { StaticObject } from './scripts/static_object.js'
import { Plant } from './scripts/plant.js'
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
      debug: false
    }
  },
  backgroundColor: '#404040',
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
  this.load.tilemapCSV('map', '/tilemaps/level1.csv')
  this.load.image('tiles', '/bg/floorplan-elements.png')
  this.load.image('wall1', '/furniture/walls/wall-h-1.png')
  this.load.image('wall2', '/furniture/walls/wall-h-2.png')
  this.load.image('wall3', '/furniture/walls/wall-v-1.png')
}
var plant1;
var cursors;
var wall1;
var wall2;
var wall3;
var plant;
var map;
var tileset;
var layer;
const plants = ['plant1', 'plant2', 'plant3']
var plantloc = []

function create() {
  this.physics.world.setBounds(70, 105, 640, 440)
  
  this.add.image(390, 340, 'level1')
  this.add.image(880, 340, 'sidePanel')

  const grid = this.add.grid(390, 340, 640, 416, 32, 32, 0xFADEA8)
  grid.fillAlpha = 0
  grid.outlineFillColor = "#7C877B"
  grid.outlineFillAlpha = 0.12

  const logo = this.add.image(390, 75, 'logo')
  logo.scale = 0.3

  map = this.make.tilemap({key: 'map', tileWidth: 32, tileHeight: 32})
  tileset = map.addTilesetImage('tiles', null, 32, 32, 1)
  layer = map.createLayer(0, tileset, 5, 5)

  // layer.setCollisionByProperty({collides: true})

  // wall1 = new StaticObject(this, 165, 308, 'wall1')
  // wall2 = new StaticObject(this, 260, 405, 'wall2')
  // wall3 = new StaticObject(this, 343, 228, 'wall3')
  // wall1.setCollisionBetween(54, 83)

  function xpos(x) { return 85 + (32 * x) }
  function ypos(y) { return 135 + (32 * y) }
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < 15; i++) {
    let xx = xpos(getRandomInt(20))
    let yy = ypos(getRandomInt(13))
    while (plantloc.includes([xx,yy])) {
      xx = xpos(getRandomInt(20))
      yy = ypos(getRandomInt(13))
    }
    let plantindex = plants[getRandomInt(3)]

    plant = new Plant(this, xx, yy, plantindex)
    plantloc.push([plant.x, plant.y])
    plant.body.collideWorldBounds = true;
  }

  cursors = this.input.keyboard.createCursorKeys();
}
function update() {
  if (cursors.up.isDown) {
    var tile = layer.getTileAtWorldXY(plant.x, plant.y - 32, true)
    if (tile.index > 0) {}
    else { plant.y -= 6}
    
  }
  else if (cursors.down.isDown) {
    var tile = layer.getTileAtWorldXY(plant.x, plant.y + 32, true)
    if (tile.index > 0) { }
    else {plant.y += 6}
  }
    
  else if (cursors.left.isDown) {
    var tile = layer.getTileAtWorldXY(plant.x - 32, plant.y, true)
    if (tile.index > 0) { }
    else {plant.x -= 6}
  }
    
  else if (cursors.right.isDown) {
    var tile = layer.getTileAtWorldXY(plant.x + 32, plant.y, true)
    if (tile.index > 0) { }
    else {plant.x += 6}
  }
    
  plant.update();
  // this.physics.collide(wall1, plant1);
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