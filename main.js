// @flow

var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleReloader = require('role.reloader');
var roleTower = require('role.tower');
var roleTowerStructure = require('role.tower');
var home = require('function.home');

var essentialStaff = require('staff.essential');
var autoSpawn = require('staff.autoSpawn');

module.exports.loop = function () {

    //ensure basic staff is present
    //essentialStaff.run();

    //run autoSpawner
    autoSpawn.run();

    //run tower defense
    roleTower.run();

    //show energy -- ??
    for(var name in Game.rooms) {
        //console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
        //Game.creeps['sHarvester'].say(Game.rooms[name].energyAvailable);
    }
    //instruct creeps
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];

        home.run(creep);
        //creep.memory.isHome = true;

        if(creep.memory.role == 'harvester' && creep.memory.isHome == true) {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader' && creep.memory.isHome == true) {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder' && creep.memory.isHome == true) {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'healer' || creep.memory.role == 'repairer' && creep.memory.isHome == true){
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'reloader' && creep.memory.isHome == true){
            roleReloader.run(creep);
        }
    }

    //instruct structures

    var currentRoom = Game.spawns['Spawn1'].room.name;
    console.log(currentRoom);

    var enemies= Game.rooms[currentRoom].find(Game.HOSTILE_CREEPS);
    

    var towers = Game.rooms[currentRoom].find(FIND_STRUCTURES, {
    filter: (s) => s.structureType == STRUCTURE_TOWER
    });

    for (let tower of towers) {
        var enemies = tower.room.find(FIND_HOSTILE_CREEPS);

        console.log(tower + ' | ' + enemies);

        var target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (enemies) {
            tower.attack(enemies[0]);
        }
    }
    //roleTowerStructure.run(currentRoom);
}