/*
*------------------------------------------
*   Script ensures basic staff are present
*------------------------------------------
*/

//essential staff list
 var staff = ['sHarvester','sUpgrader','sBuilder'];
 
 var essentialStaff = {
    run: function() { 
                    //spawn if not already 
    //builder
        if(!Game.creeps[staff[2]]){
            Game.spawns['Spawn1'].spawnCreep([WORK,MOVE,CARRY],staff[2],
                    {memory: { role: 'builder' } } );
        }

    //upgrader
        if(!Game.creeps[staff[1]]){
            Game.spawns['Spawn1'].spawnCreep([WORK,MOVE,CARRY],staff[1],
                    {memory: { role: 'upgrader' } } );
        }

    //harvester
        if(!Game.creeps[staff[0]]){
            Game.spawns['Spawn1'].spawnCreep([WORK,MOVE,CARRY],staff[0],
                { memory: { role: 'harvester' } } );
        }
    }
 };

module.exports = essentialStaff;