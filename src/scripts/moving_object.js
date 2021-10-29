
class MovingObject extends GameObject {
  constructor (options) {
    this.gridPos = options['gridPos'];
    this.avatar = options['avatar'];
    this.scale = options['scale']
    this.game = options['game'];
    this.movement = options['movement']
  }

  move() {
    return [
      this.pos[0] + this.movement[0],
      this.pos[1] + this.movement[1]
    ];
  }
}
export {MovingObject as MO}