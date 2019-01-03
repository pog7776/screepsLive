var roleHealer = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.room.controller.id != creep.memory.home){
            creep.moveTo(Game.getObjectById(creep.memory.home));
        }
        else if(creep.memory.home == undefined){
            creep.memory.home = '5bbcafbe9099fc012e63b192';
        }

        var closestDamagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < structure.hitsMax
            });

        if(creep.memory.healing && !closestDamagedStructure && creep.carry.energy == creep.carryCapacity) {
            creep.memory.healing = false;
            creep.say('Done');
        }
        else if(!creep.memory.healing && creep.carry.energy < creep.carryCapacity){
            creep.memory.harvesting = true;
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}}, {maxRooms:1});
            }
        }
        else{
            creep.memory.harvesting = false;
        }

        if(closestDamagedStructure != null && !creep.memory.harvesting){  //!creep.memory.healing &&
            creep.memory.healing = true;
            
            if(creep.repair(closestDamagedStructure) == -12){ //ERR_NOT_IN_RANGE
                creep.moveTo(closestDamagedStructure, {visualizePathStyle: {stroke: '#ffaa00'}}, {maxRooms:1});
            }
            creep.say('Healing');
        }
    }
};

module.exports = roleHealer;