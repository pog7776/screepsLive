var roleTower = {

    /** @param {Creep} creep **/
    run: function() {

        for(var name in Game.rooms) {

            for(var name in Game.structures.StructureTower) {
                var tower = Game.structures.StructureTower[name];
            }
        }
        
        if(tower) {
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < structure.hitsMax
            });
            if(closestDamagedStructure) {
                tower.repair(closestDamagedStructure);
            }

            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                tower.attack(closestHostile);
            }
        }
    }
};

module.exports = roleTower;