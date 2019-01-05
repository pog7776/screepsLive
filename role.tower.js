// @flow

var roleTower = {

    /** @param {Creep} creep **/
    run: function() {

        var currentRoom = Game.spawns['Spawn1'].room.name;


        var towers = Game.rooms[currentRoom].find(FIND_STRUCTURES, {
        filter: (s) => s.structureType == STRUCTURE_TOWER
        });

        for (let tower of towers) {
            var target = tower.room.find(FIND_HOSTILE_CREEPS);

        var target = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);

        //console.log(tower + ' | ' + target);

            if (target != null) {
                Game.notify('Under attack yo');
                switch(tower.attack(target)){
                    case '-6':
                        console.log('Tower: ' + tower + "doesn't have enough energy!")
                    break;

                    case '-14':
                        console.log("Your level isn't high enough to use this tower" + tower)
                    break;
                }
            }
            else{ 
                //....first heal any damaged creeps 
                for (let name in Game.creeps) { 
                    // get the creep object 
                    var creep = Game.creeps[name]; 
                    if (creep.hits < creep.hitsMax) { 
                        towers.forEach(tower => tower.heal(creep)); 
                        console.log("Tower is healing Creeps."); 
                    } 
                }
            }
        }
         

        for(var i in towers){ //...repair Buildings! :) But ONLY until HALF the energy of the tower is gone. 
                            //Because we don't want to be exposed if something shows up at our door :) 
            if(towers.energy > ((towers.energyCapacity / 10)* 9)){

                //Find the closest damaged Structure
                var closestDamagedStructure = towers.pos.findClosestByRange(FIND_STRUCTURES, 
                    {filter: (s) => s.hits < s.hitsMax && s.structureType != STRUCTURE_WALL && s.structureType != STRUCTURE_RAMPART});
                if(closestDamagedStructure) {
                    towers.repair(closestDamagedStructure);
                    console.log("The tower is repairing buildings.");
                }
                
            }
            
        }

    }
};

module.exports = roleTower;