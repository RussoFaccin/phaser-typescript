import Phaser from 'phaser';

/*
| --------------------------------------------------------------------------------
| Game Settings
| --------------------------------------------------------------------------------
*/

const SETTINGS = {
    speed: 200
};

let sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    key: 'Main Scene',
    active: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0
            },
            debug: false,
            debugShowBody: true
        }
    }
};

/*
| --------------------------------------------------------------------------------
| Scene - SceneMain
| --------------------------------------------------------------------------------
*/

class SceneMain extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }
    init() {}
    preload() {}
    create() {}
    update(time, delta) {}
}

/*
| --------------------------------------------------------------------------------
| Game
| --------------------------------------------------------------------------------
*/

// Game configuration
const config: Phaser.Types.Core.GameConfig = {
    width: 375,
    height: 812,
    parent: document.querySelector<HTMLElement>('.gameContainer'),
    autoFocus: true,
    scale: {
        mode: Phaser.Scale.FIT
    },
    canvasStyle: 'outline: 1px solid;',
    title: 'Phaser Game',
    transparent: true,
    scene: new SceneMain()
};

class SampleGame {
    game: Phaser.Game;
    elementParent: HTMLElement;
    constructor(gameConfig: Phaser.Types.Core.GameConfig) {
        this.game = new Phaser.Game(gameConfig);
    }
}

let game = new SampleGame(config);