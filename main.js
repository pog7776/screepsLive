// @flow

var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roleRepairer = require('role.repairer');
var roleReloader = require('role.reloader');
var roleTower = require('role.tower');
var roleTowerStructure = require('role.towerStructure');
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
    roleTowerStructure.run();
    var currentRoom = Game.spawns['Spawn1'].room.name;
    //console.log(currentRoom);
        

    // var towers = Game.rooms[currentRoom].find(FIND_STRUCTURES, {
    // filter: (s) => s.structureType == STRUCTURE_TOWER
    // });

    // for (let tower of towers) {
    //     var target = tower.room.find(FIND_HOSTILE_CREEPS);

    // var target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

    //     //console.log(tower + ' | ' + target);

    //     if (target != null) {
    //         switch(tower.attack(target)){
    //             case '-6':
    //                 console.log('Tower: ' + tower + "doesn't have enough energy!")
    //             break;

    //             case '-14':
    //                 console.log("Your level isn't high enough to use this tower" + tower)
    //             break;

    //         }
    //     }
    // }
}