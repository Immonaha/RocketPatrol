class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);

        //push object to scene
        scene.add.existing(this);

        this.isFiring = false;
    }
    update() {
        //movement
        if (!this.isFiring) {
            if(keyLEFT.isDown && this.x >= 47) {
                this.x -= 2;
            }
            else if(keyRIGHT.isDown && this.x <= 578) {
                this.x += 2;
            }
        }
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isFiring = true;
        }
        if (this.isFiring && this.y >= 108) {
            this.y -= 2;
        }
        //reset on miss
        if (this.y <= 108) {
            this.isFiring = false;
            this.y = 431;
        }
    }
}