// @flow

var home = {

    /** @param {Creep} creep **/
    run: function(creep) {
       
        // if(creep.room.controller.id != creep.memory.home){
        //     creep.moveTo(Game.getObjectById(creep.memory.home));
        //     //console.log(creep.name + ' current ' + creep.room.controller.id +' home ' + creep.memory.home);
        // }
        // else if(creep.memory.home == undefined){
        //     creep.memory.home = '5bbcafbe9099fc012e63b192';
        //     //console.log(creep.name + ' current ' + creep.room.controller.id +' home ' + creep.memory.home);
        // }

        if(!creep.memory.home){
            creep.memory.home = creep.room.name;
        }

        if(creep.room.name == creep.memory.home){
            creep.memory.isHome = true;
        }
        else{
            creep.memory.isHome = false;
            creep.moveTo(Game.spawns['Spawn1']);
        }

        //console.log(creep.name + " is home: " + creep.memory.isHome + ", home = " + creep.memory.home + ', current room = ' + creep.room.name);

    }
};
module.exports = home;