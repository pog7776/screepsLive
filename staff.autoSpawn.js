/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('staff.autoSpawn');
 * mod.thing == 'a thing'; // true
 */
var autoSpawn = {
    run: function(creep) {

//clear name memory
    for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

//main spawner
var mainSpawn = Game.spawns['Spawn1'];

//unit types
var harvesters;
var upgraders;
var builders;

var unitTypesString = ['harvesters', 'upgraders', 'builders']; //,'harvestersLong', 'upgradersLong', 'buildersLong'
var unitTypes = [harvesters, upgraders, builders];

//control number of units--------------------------------------------------------------------------

var numHarvesters = 3;//3;
var numHarvesters1 = 3;

var numUpgraders = 5;//5;
var numUpgraders1 = 5;

var numBuilders = 3;//3;
var numBuilders1 = 3;

var unitAmount = [numHarvesters, numUpgraders, numBuilders];

//Control level of creeps------------------------------------------------------------------------

//Worker creeps----------------------------------------------------------------------------------
//worker creep presets
var lvl1 = [WORK,CARRY,MOVE];
var lvl2 = [WORK,CARRY,CARRY,MOVE,MOVE];
var lvl3 = [WORK,WORK,CARRY,CARRY,MOVE,MOVE];

    //worker creep levels
    var levels = [lvl1, lvl2, lvl3];

    //worker level setter
    for(var name in Game.rooms) {
        for (var i = levels.length - 1; i >= 0; i--) {
            if(Game.rooms[name].controller.level == i){
                currentLevel = levels[i];
            }
            else{
                currentLevel = levels[levels.length-1];
            }
        }
    }

    // !!! override current worker level !!!
    var currentLevel = lvl2;
        //console.log(currentLevel);

//Healer creeps----------------------------------------------------------------------------------
//healer creep presets
var healLvl1 = [MOVE, HEAL, WORK, CARRY];

//Combat creeps----------------------------------------------------------------------------------
//close range creep presets

//long range creep presets


//Spawn creeps-----------------------------------------------------------------------------------

function removeLastLeter(string) {
    return string.slice(0, -1)
}
//builders---------------------------------------------------------------------------------------
        for (var i = unitTypes.length - 1; i >= 0; i--) {

             unitTypes[i] = _.filter(Game.creeps, (creep) => creep.memory.role == removeLastLeter(unitTypesString[i]));
            //console.log('Builders: ' + builders.length);

            if(unitTypes[i].length < unitAmount[i] && !mainSpawn.spawning) {
                var newName = capitalizeFirstLetter(removeLastLeter(unitTypesString[i])) + Game.time;
                console.log('Attempting to spawn new ' + removeLastLeter(unitTypesString[i]) + ' ' + newName);
                if(mainSpawn.spawnCreep(currentLevel, newName, 
                    {memory: {role: removeLastLeter(unitTypesString[i])}}) == -6){    //, home: rooms.controller.id
                    console.log('Not Enough Energy');
                }
                else{
                    console.log(newName + ' spawning');
                }
            }
        }


//Displays---------------------------------------------------------------

//unit types
//var unitTypes = [harvesters, harvestersLong, upgraders, upgradersLong, builders, buildersLong];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//announce spawning
    //**move to own "spawnner" script
        if(mainSpawn.spawning) { 
            var spawningCreep = Game.creeps[mainSpawn.spawning.name];
            mainSpawn.room.visual.text(
                spawningCreep.memory.role,
                mainSpawn.pos.x + 1, 
                mainSpawn.pos.y, 
                    {align: 'left', opacity: 0.8});
        }
        
//display unit numbers
        for (var i = unitTypes.length - 1; i >= 0; i--) {
            mainSpawn.room.visual.text(
                capitalizeFirstLetter(unitTypesString[i]) + ': ' + unitTypes[i].length,
                mainSpawn.pos.x -6, 
                mainSpawn.pos.y+(i/1.8)-0.3, 
                    {font: 0.5, align: 'left', opacity: 1});
        }
        
//display avaliable energy
        for(var name in Game.rooms) {
            mainSpawn.room.visual.text(
                Game.rooms[name].energyAvailable,
                mainSpawn.pos.x, 
                mainSpawn.pos.y-1.5, 
                    {font: 0.5, align: 'center', opacity: 1});
        }
    }
}

module.exports = autoSpawn;