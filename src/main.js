var config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu,Play],
};

var game = new Phaser.Game(config)

var keyF,keyLEFT,keyRIGHT;