/* global Phaser */

// Created by: xxx
//Copyright (c) 2022 maliksalem1 all rights reserved
//
// Created by: maliksalem1
// Created on: June 2022
// This is the Phaser3 configuration file

var game;

// Create a new game instance 600px wide and 450px tall:
game = new Phaser.Game(600, 450, Phaser.AUTO, '');

// First parameter is how our state will be called.
// Second parameter is an object containing the needed methods for state functionality
game.state.add('Menu', Menu);

game.state.start('Menu');

var game;

game = new Phaser.Game(600, 450, Phaser.AUTO, '');
        
game.state.add('Menu', Menu);
        
// Adding the Game state.
game.state.add('Game', Game);
        
game.state.start('Menu');

 game.state.add('Game_Over', Game_Over);
