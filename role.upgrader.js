var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.room.controller.id != creep.memory.home){
            creep.moveTo(Game.getObjectById(creep.memory.home));
        }
        else if(creep.memory.home == undefined){
            creep.memory.home = '5bbcafbe9099fc012e63b192';
        }

        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('harvest');//Ã°ÂÂÂ
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('upgrade');//Ã¢ÂÂ¡
        }

        if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}}, {maxRooms:1});
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}}, {maxRooms:1});
            }
        }
    }
};

module.exports = roleUpgrader;