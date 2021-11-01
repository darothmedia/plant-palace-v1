import { MovingObject } from './moving_object.js'

class Plant extends MovingObject {
  constructor(scene, x, y, textureKey) {
    super(scene, x, y, textureKey, 'Player')
    this.scale = 0.2
    // cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    // if (cursors.up.isDown)
    //   this.y -= 6;
    // if (cursors.down.isDown)
    //   this.y += 6;
    // if (cursors.left.isDown)
    //   this.x -= 6;
    // if (cursors.right.isDown)
    //   this.x += 6;
  }
}

export {Plant};