import Phaser, {GameObjects, Plugins} from 'phaser'

class MovingObject extends Phaser.GameObjects.Image {
  constructor (scene, x, y) {
    super(scene, x, y, 'MovingObject')
    this.setScale(0.3)
  }

  move() {
    return [
      this.pos[0] + this.movement[0],
      this.pos[1] + this.movement[1]
    ];
  }
}

class MovingObjectPlugin extends Phaser.Plugins.BasePlugin {

  constructor(pluginManager) {
    super(pluginManager);
    pluginManager.registerGameObject('MovingObject', this.createMovingObject);
  }

  createMovingObject(x, y) {
    return this.displayList.add(new MovingObject(this.scene, x, y));
  }

}
export {MovingObject}
export {MovingObjectPlugin}