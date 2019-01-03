var storeCreep = {

    /** @param {Creep} creep **/
    run: function(creep) {
       
        if(Game.flags['Storage']){
        	var storage = Game.flags['Storage'].pos;
    	}
    	else{
    		console.log('Place flag "Storage" to store creeps');
    		return 'No Flag';
    	}

        if(creep.memory.store == false){
	    	console.log('Putting ' + creep.name + ' in storage');
	    	creep.memory.store = true;
	    }
        
        if(creep.pos != storage){
	        creep.moveTo(storage, {visualizePathStyle: {stroke: '#ff5555'}}, {maxRooms:1});
	        creep.say('z');
	    }
    }
};
module.exports = storeCreep;