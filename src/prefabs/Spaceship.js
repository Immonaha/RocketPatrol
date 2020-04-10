class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, pointvalue, frame) {
        super(scene, x, y, texture, frame);

        //push object to scene
        scene.add.existing(this);
        this.points = pointvalue
    }
    update() {
        //move spaceshit left
        this.x -= 3;
        if (this.x <= 0 - this.width) {
            this.x = game.config.width; 
        }
    }
}