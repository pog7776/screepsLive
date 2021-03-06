// @flow

var storeCreep = require('function.store');

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

    	var targets = creep.room.find(FIND_CONSTRUCTION_SITES);

	    if(creep.memory.building && creep.carry.energy == 0 || !targets.length) {
            creep.memory.building = false;
            creep.say('harvest');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity && targets.length) {
	        creep.memory.building = true;
	        creep.say('build'); 
	    }
	    else{
	    	creep.memory.building = false;
	    }

	    //Put creep in storage
	    if(!targets.length){
            creep.memory.building = false;
            storeCreep.run(creep);
        }
        else{
        	creep.memory.store = false;
        }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}}, {maxRooms:1});
                }
            }
            if(!targets){
                //var closestDamagedStructure = towers.pos.findClosestByRange(FIND_STRUCTURES, 
                 //   {filter: (s) => s.hits < s.hitsMax && s.structureType == STRUCTURE_WALL || s.structureType == STRUCTURE_RAMPART});

            }
	    }
	    else if(targets.length){
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}}, {maxRooms:1});
            }
	    }
	}
};

module.exports = roleBuilder;