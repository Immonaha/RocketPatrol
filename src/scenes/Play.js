class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        this.load.image("rocket","./assets/rocket.png");
        this.load.image("spaceship","./assets/spaceship.png");
        this.load.image("starfield","./assets/starfield.png");
    }
    create() {
        //place tile sprite
        this.starfield = this.add.tileSprite(0,0,640,480,"starfield").setOrigin(0,0);
        //white rec border
        this.add.rectangle(5,5,630,32,0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(5,443,630,32,0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(5,5,32,455,0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(603,5,32,455,0xFFFFFF).setOrigin(0,0);
        //green ui background
        this.add.rectangle(37,42,566,64,0x00FF00).setOrigin(0,0);

        //add player 1
        this.p1Rocket = new Rocket(this, game.config.width/2, 431, 'rocket',0).setScale(0.5,0.5).setOrigin(0,0);
        //add ship#1
        this.ship1 = new Spaceship(this, game.config.width+192, 132, 'spaceship',30,0).setOrigin(0,0);
        this.ship2 = new Spaceship(this, game.config.width+96, 196, 'spaceship',20,0).setOrigin(0,0);
        this.ship3 = new Spaceship(this, game.config.width, 260, 'spaceship',10,0).setOrigin(0,0);


        //define keyboard
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        //scroll starfield
        this.starfield.tilePositionX -= 4;
        this.p1Rocket.update();
        this.ship1.update();
        this.ship2.update();
        this.ship3.update();
    }
}