// @flow

var roleHealer = {

    /** @param {Creep} creep **/
    run: function(creep) {

        //find damages structure
        var closestDamagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < structure.hitsMax
            });

        //idle
        if(creep.memory.healing && !closestDamagedStructure && creep.carry.energy == creep.carryCapacity) {
            creep.memory.healing = false;
            creep.say('Done');
        }
        

        if(!creep.memory.healing && creep.carry.energy < creep.carryCapacity){
            creep.memory.harvesting = true;
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}}, {maxRooms:1});
        }
        else{
            creep.memory.harvesting = false;
        }

        if(closestDamagedStructure != null && !creep.memory.harvesting){  //!creep.memory.healing &&
            creep.memory.healing = true;
            
            if(creep.repair(closestDamagedStructure) == -6){ //ERR_NOT_IN_RANGE
                creep.moveTo(closestDamagedStructure, {visualizePathStyle: {stroke: '#ffaa00'}}, {maxRooms:1});
            }
            creep.say('Healing');
        }
    }
};

module.exports = roleHealer;