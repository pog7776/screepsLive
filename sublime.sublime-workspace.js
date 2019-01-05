{
	"auto_complete":
	{
		"selected_items":
		[
			[
				"roleH",
				"roleHealer\t{}"
			],
			[
				"close",
				"closestDamagedStructure\t(?)"
			],
			[
				"cap",
				"capitalizeFirstLetter"
			],
			[
				"unit",
				"unitTypes"
			],
			[
				"remove",
				"removeLastLeter(string)"
			],
			[
				"uni",
				"unitAmount\t[]"
			],
			[
				"numH",
				"numHarvesters"
			],
			[
				"lo",
				"log\t( x: number ): number Math"
			],
			[
				"roo",
				"rooms"
			],
			[
				"harve",
				"harvestersLong"
			],
			[
				"numB",
				"numBuilders\t(num)"
			],
			[
				"numHarve",
				"numHarvesters1"
			],
			[
				"role",
				"roleTower\t{}"
			],
			[
				"to",
				"tower\t(?)"
			],
			[
				"level",
				"level1\t[]"
			],
			[
				"ha",
				"harvester"
			],
			[
				"ne",
				"newName\t(str)"
			],
			[
				"harvesters",
				"harvesters.length"
			],
			[
				"carry",
				"carryCapacity\t(?)"
			],
			[
				"main",
				"mainSpawn"
			],
			[
				"num",
				"numHarvesters"
			],
			[
				"carr",
				"carryCapacityÃÂ£ÃÂÃÂvariableÃÂ£ÃÂÃÂ"
			],
			[
				"s",
				"spawning"
			],
			[
				"str",
				"structure"
			],
			[
				"p",
				"pos"
			],
			[
				"cree",
				"creeps"
			],
			[
				"energy",
				"energyTimer\t(num)"
			],
			[
				"staff",
				"staffÃÂ£ÃÂÃÂvariableÃÂ£ÃÂÃÂ"
			],
			[
				"spee",
				"speed"
			],
			[
				"net",
				"network"
			],
			[
				"N",
				"N"
			],
			[
				"diag",
				"diagnose"
			],
			[
				"speed",
				"speedTest"
			],
			[
				"re",
				"rexBig"
			],
			[
				"font",
				"font-weight\tproperty"
			],
			[
				"HUD",
				"HUD_crosshair"
			],
			[
				"de",
				"degToRad"
			],
			[
				"ma",
				"Math"
			],
			[
				"hu",
				"HUD_header"
			],
			[
				"add",
				"addCollider"
			],
			[
				"light",
				"lightSphere"
			],
			[
				"li",
				"lightSphere"
			],
			[
				"an",
				"Android"
			],
			[
				"ter",
				"tesseract2"
			],
			[
				"tr",
				"true"
			],
			[
				"inter",
				"interact"
			],
			[
				"tra",
				"translateY"
			],
			[
				"ra",
				"ray"
			],
			[
				"co",
				"CowboyModel"
			],
			[
				"cow",
				"Cowboy"
			],
			[
				"tesser",
				"tesseractTexture"
			],
			[
				"te",
				"tesseractTexture"
			],
			[
				"wall",
				"wall4"
			],
			[
				"wa",
				"wall3"
			],
			[
				"me",
				"mesh"
			],
			[
				"mesh",
				"MeshLambertMaterial"
			],
			[
				"mes",
				"mesh3"
			],
			[
				"geome",
				"geometry"
			],
			[
				"geom",
				"geometry2"
			],
			[
				"geo",
				"geometry2"
			],
			[
				"inner",
				"innerHeight"
			],
			[
				"file",
				"filename"
			],
			[
				"connec",
				"connectionSocket"
			]
		]
	},
	"buffers":
	[
		{
			"file": "main.js",
			"settings":
			{
				"buffer_size": 1480,
				"line_ending": "Unix"
			}
		},
		{
			"file": "staff.essential.js",
			"settings":
			{
				"buffer_size": 915,
				"line_ending": "Unix"
			}
		},
		{
			"contents": "/*\n * Module code goes here. Use 'module.exports' to export things:\n * module.exports.thing = 'a thing';\n *\n * You can import it from another modules like this:\n * var mod = require('staff.autoSpawn');\n * mod.thing == 'a thing'; // true\n */\nvar autoSpawn = {\n    run: function(creep) {\n\n//clear name memory\n    for(var name in Memory.creeps) {\n        if(!Game.creeps[name]) {\n            delete Memory.creeps[name];\n            console.log('Clearing non-existing creep memory:', name);\n        }\n    }\n\n//main spawner\nvar mainSpawn = Game.spawns['Spawn1'];\n\n//unit types\nvar harvesters;\nvar upgraders;\nvar builders;\n\nvar unitTypesString = ['harvesters', 'upgraders', 'builders']; //,'harvestersLong', 'upgradersLong', 'buildersLong'\nvar unitTypes = [harvesters, upgraders, builders];\n\n//control number of units--------------------------------------------------------------------------\n\nvar numHarvesters = 3;//3;\nvar numHarvesters1 = 3;\n\nvar numUpgraders = 5;//5;\nvar numUpgraders1 = 5;\n\nvar numBuilders = 3;//3;\nvar numBuilders1 = 3;\n\nvar unitAmount = [numHarvesters, numUpgraders, numBuilders];\n\n//Control level of creeps------------------------------------------------------------------------\n\n//Worker creeps----------------------------------------------------------------------------------\n//worker creep presets\nvar level1 = [WORK,CARRY,MOVE];\nvar level2 = [WORK,CARRY,CARRY,MOVE,MOVE];\nvar level3 = [WORK,WORK,CARRY,CARRY,MOVE,MOVE];\n\n    //worker creep levels\n    var levels = [level1, level2, level3];\n\n    //worker level setter\n    for(var name in Game.rooms) {\n        for (var i = levels.length - 1; i >= 0; i--) {\n            if(Game.rooms[name].controller.level == i){\n                currentLevel = levels[i];\n            }\n            else{\n                currentLevel = levels[levels.length-1];\n            }\n        }\n    }\n\n    // !!! override current worker level !!!\n    var currentLevel = level2;\n        //console.log(currentLevel);\n\n//Healer creeps----------------------------------------------------------------------------------\n//healer creep presets\nvar healLvl1 = [MOVE, HEAL];\n\n//Combat creeps----------------------------------------------------------------------------------\n//close range creep presets\n\n//long range creep presets\n\n\n//Spawn creeps-----------------------------------------------------------------------------------\n\nfunction removeLastLeter(string) {\n    return string.slice(0, -1)\n}\n//builders---------------------------------------------------------------------------------------\n        for (var i = unitTypes.length - 1; i >= 0; i--) {\n\n             unitTypes[i] = _.filter(Game.creeps, (creep) => creep.memory.role == removeLastLeter(unitTypesString[i]));\n            //console.log('Builders: ' + builders.length);\n\n            if(unitTypes[i].length < unitAmount[i] && !mainSpawn.spawning) {\n                var newName = capitalizeFirstLetter(removeLastLeter(unitTypesString[i])) + Game.time;\n                console.log('Attempting to spawn new ' + removeLastLeter(unitTypesString[i]) + ' ' + newName);\n                if(mainSpawn.spawnCreep(currentLevel, newName, \n                    {memory: {role: removeLastLeter(unitTypesString[i])}}) == -6){    //, home: rooms.controller.id\n                    console.log('Not Enough Energy');\n                }\n                else{\n                    console.log(newName + ' spawning');\n                }\n            }\n        }\n\n\n//         var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');\n//         //console.log('Builders: ' + builders.length);\n\n//         if(builders.length < numBuilders && !mainSpawn.spawning) {\n//             var newName = 'Builder' + Game.time;\n//             console.log('Attempting to spawn new builder: ' + newName);\n//             if(mainSpawn.spawnCreep(currentLevel, newName, \n//                 {memory: {role: 'builder'}}) == -6){    //, home: rooms.controller.id\n//                 console.log('Not Enough Energy');\n//             }\n//             else{\n//                 console.log(newName + ' spawning');\n//             }\n//         }\n\n//     //long range\n//         var buildersLong = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder1');\n\n//         if(buildersLong.length < numBuilders1 && !mainSpawn.spawning) {\n//             var newName = 'Builder-Long' + Game.time;\n//             console.log('Attempting to spawn new builder-long: ' + newName);\n//             if(mainSpawn.spawnCreep(currentLevel, newName, \n//                 {memory: {role: 'builder1'}}) == -6){\n//                 console.log('Not Enough Energy');\n//             }\n//             else{\n//                 console.log(newName + ' spawning');\n//             }        \n//         }\n\n// //upgraders---------------------------------------------------------------------------------------\n//         var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');\n//         //console.log('Upgraders: ' + upgraders.length);\n\n//         if(upgraders.length < numUpgraders && !mainSpawn.spawning) {\n//             var newName = 'Upgrader' + Game.time;\n//             console.log('Attempting to spawn new upgrader: ' + newName);\n//             if(mainSpawn.spawnCreep(currentLevel, newName, \n//                 {memory: {role: 'upgrader'}}) == -6){\n//                 console.log('Not Enough Energy');\n//             }\n//             else{\n//                 console.log(newName + ' spawning');\n//             }       \n//         }\n\n//     //long range\n//         var upgradersLong = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader1');\n\n//         if(upgradersLong.length < numUpgraders1 && !mainSpawn.spawning) {\n//             var newName = 'Upgrader-Long' + Game.time;\n//             console.log('Attempting to spawn new upgrader-long: ' + newName);\n//             if(mainSpawn.spawnCreep(currentLevel, newName, \n//                 {memory: {role: 'upgrader1'}}) == -6){\n//                 console.log('Not Enough Energy');\n//             }\n//             else{\n//                 console.log(newName + ' spawning');\n//             }        \n//         }\n\n// //harvesters---------------------------------------------------------------------------------------\n//         var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');\n//         //console.log('Harvesters: ' + harvesters.length);\n\n//         if(harvesters.length < numHarvesters && !mainSpawn.spawning) {\n//             var newName = 'Harvester' + Game.time;\n//             console.log('Attempting to spawn new harvester: ' + newName);\n//             if(mainSpawn.spawnCreep(currentLevel, newName, \n//                 {memory: {role: 'harvester'}}) == -6){\n//                 console.log('Not Enough Energy');\n//             }\n//             else{\n//                 console.log(newName + ' spawning');\n//             }        \n//         }\n//     //long range\n//         var harvestersLong = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester1');\n//         //console.log('Harvesters: ' + harvesters.length);\n\n//         if(harvestersLong.length < numHarvesters1 && !mainSpawn.spawning) {\n//             var newName = 'Harvester-Long' + Game.time;\n//             console.log('Attempting to spawn new harvester-long: ' + newName);\n//             if(mainSpawn.spawnCreep(currentLevel, newName, \n//                 {memory: {role: 'harvester1'}}) == -6){\n//                 console.log('Not Enough Energy');\n//             }\n//             else{\n//                 console.log(newName + ' spawning');\n//             }        \n//         }\n\n//Displays---------------------------------------------------------------\n\n//unit types\n//var unitTypes = [harvesters, harvestersLong, upgraders, upgradersLong, builders, buildersLong];\n\nfunction capitalizeFirstLetter(string) {\n    return string.charAt(0).toUpperCase() + string.slice(1);\n}\n\n//announce spawning\n    //**move to own \"spawnner\" script\n        if(mainSpawn.spawning) { \n            var spawningCreep = Game.creeps[mainSpawn.spawning.name];\n            mainSpawn.room.visual.text(\n                spawningCreep.memory.role,\n                mainSpawn.pos.x + 1, \n                mainSpawn.pos.y, \n                    {align: 'left', opacity: 0.8});\n        }\n        \n//display unit numbers\n        for (var i = unitTypes.length - 1; i >= 0; i--) {\n            mainSpawn.room.visual.text(\n                capitalizeFirstLetter(unitTypesString[i]) + ': ' + unitTypes[i].length,\n                mainSpawn.pos.x -6, \n                mainSpawn.pos.y+(i/1.8)-0.3, \n                    {font: 0.5, align: 'left', opacity: 1});\n        }\n        \n//display avaliable energy\n        for(var name in Game.rooms) {\n            mainSpawn.room.visual.text(\n                Game.rooms[name].energyAvailable,\n                mainSpawn.pos.x, \n                mainSpawn.pos.y-1.5, \n                    {font: 0.5, align: 'center', opacity: 1});\n        }\n    }\n}\n\nmodule.exports = autoSpawn;",
			"file": "staff.autoSpawn.js",
			"file_size": 9021,
			"file_write_time": 131909831314612499,
			"settings":
			{
				"buffer_size": 9021,
				"line_ending": "Unix"
			}
		},
		{
			"file": "role.harvester.js",
			"settings":
			{
				"buffer_size": 1815,
				"line_ending": "Unix"
			}
		},
		{
			"file": "role.builder.js",
			"settings":
			{
				"buffer_size": 1692,
				"line_ending": "Unix"
			}
		},
		{
			"file": "function.store.js",
			"settings":
			{
				"buffer_size": 624,
				"line_ending": "Unix"
			}
		},
		{
			"file": "role.upgrader.js",
			"settings":
			{
				"buffer_size": 1215,
				"line_ending": "Unix"
			}
		},
		{
			"file": "role.healer.js",
			"settings":
			{
				"buffer_size": 1589,
				"line_ending": "Unix"
			}
		},
		{
			"file": "role.tower.js",
			"settings":
			{
				"buffer_size": 811,
				"line_ending": "Unix"
			}
		}
	],
	"build_system": "",
	"build_system_choices":
	[
	],
	"build_varint": "",
	"command_palette":
	{
		"height": 0.0,
		"last_filter": "",
		"selected_items":
		[
			[
				"Package Control: insta",
				"Package Control: Install Package"
			],
			[
				"Package Control: ",
				"Package Control: List Packages"
			],
			[
				"Package Control: remo",
				"Package Control: Remove Package"
			],
			[
				"Package Control: in",
				"Package Control: Install Package"
			],
			[
				"Package Control: instal",
				"Package Control: Install Package"
			],
			[
				"Package Control: re",
				"Package Control: Remove Package"
			],
			[
				"Package Control: insta\tll",
				"Package Control: Install Package"
			],
			[
				"Package Control: inst",
				"Package Control: Install Package"
			],
			[
				"Package Control: install",
				"Package Control: Install Package"
			],
			[
				"Package Controlinsta",
				"Package Control: Install Package"
			]
		],
		"width": 0.0
	},
	"console":
	{
		"height": 144.0,
		"history":
		[
			"git",
			"Git: Status",
			"Git: status",
			"ginit",
			"var room = new Room(); room.lookAt(x, y)"
		]
	},
	"distraction_free":
	{
		"menu_visible": true,
		"show_minimap": false,
		"show_open_files": false,
		"show_tabs": false,
		"side_bar_visible": false,
		"status_bar_visible": false
	},
	"file_history":
	[
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/default/.je-project-settings/project_settings.json",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/default/sublime.sublime-project",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/default/default.sublime-project",
		"/C/Users/Pog/AppData/Roaming/Sublime Text 3/Packages/JavaScript Enhancements/changelog/install.txt",
		"/C/Users/Pog/AppData/Roaming/Sublime Text 3/Packages/JavaScript Enhancements/default_autocomplete.json",
		"/C/Users/Pog/AppData/Roaming/Sublime Text 3/Packages/JavaScript Enhancements/messages.json",
		"/C/Users/Pog/AppData/Roaming/Sublime Text 3/Packages/JavaScript Enhancements/README.md",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/screeps/role.upgrader1.js",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/screeps/harvesterTest.js",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/screeps/legacy/role.upgrader - legacy.js",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/screeps/role.upgrader - Copy.js",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/screeps/role.upgrader.js",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/default/main.js",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/default/staff.autoSpawn.js",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/default/staff.essential.js",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/default/role.builder.js",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/default/role.harvester.js",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/default/role.upgrader.js",
		"/C/Users/Pog/AppData/Roaming/Sublime Text 3/Packages/User/SublimeGit.sublime-settings",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/tutorial-4/main.js",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/tutorial-4/staff.autoSpawn.js",
		"/C/Users/Pog/AppData/Local/Screeps/scripts/screeps.com/tutorial-3/main.js",
		"/C/Users/Pog/AppData/Roaming/Sublime Text 3/Packages/User/SublimeCodeIntel.sublime-settings",
		"/C/Users/Pog/AppData/Local/Temp/Rar$DIa0.020/SublimeCodeIntel.json",
		"/C/Users/Pog/AppData/Roaming/Sublime Text 3/Packages/TernJS/TernJS.sublime-settings",
		"/C/Users/Pog/Desktop/Pi_Eyes-master/eyes.py",
		"/C/Users/Pog/Desktop/ledController.html",
		"/D/Win 7/AppData/Local/uts.ini",
		"/C/Users/Pog/Desktop/network_diag.bat",
		"/C/Users/Pog/Desktop/stats.py",
		"/C/Users/Pog/Desktop/Pi_Eyes-master/cyclops.py",
		"/C/Users/Pog/Documents/School/Year 2/Semester 2/Applications Programming/BlueJ/Assignment 1/sikAssignment/ComputerBuilder.java",
		"/C/Users/Pog/Documents/School/Year 2/Semester 2/Applications Programming/BlueJ/Assignment 1/computerBuilder.jar",
		"/C/Users/Pog/Desktop/Console Audio/amarectv231_en/amarectv231_en/auto_preset.ini",
		"/C/Users/Pog/AppData/Roaming/obs-studio/global.ini",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/utils/collider.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/utils/pointerTrigger.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/utils/locationTracker.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/skybox.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/room.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/cowboy.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/utils/engine.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Game Design/Digital game/Prototype/Prototype 2/Assets/Scenes/Level99.unity",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/rex.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/samus.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/pacman.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/mario8bit.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/laraCroft.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/ghost.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/dragonborn.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/chief.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/amiiboMario.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/snake.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/utils/pointerLockControls.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/dist/index.html",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/index.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/rexBig.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/npm_start_windows.bat",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/node_install_windows.bat",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Old/git/Test/CompGraphicsUTS/src/utils/locationTracker.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/utils/temp.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Old/git/Test/CompGraphicsUTS/dist/index.html",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Old/git/Test/CompGraphicsUTS/src/index.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/statues.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS - - Copy/src/misc/marioamiibo.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS/src/misc/room.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS/src/index.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS/src/misc/cowboy.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS/src/utils/pointerLockControls.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS/node_modules/three/src/materials/Material.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS/src/misc/room2.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS/node_modules/snapdragon/lib/parser.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS/src/misc/rooms.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS/src/misc/floors.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/Work on Layout/CompGraphicsUTS/dist/models/Wall.fbx",
		"/D/School/Uni/2017 Semester 1/web_systems/public_html/websystems/template.html",
		"/C/Users/Pog/Documents/Webpages/HomePage/index.html",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/Test/CompGraphicsUTS/dist/style.css",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/Test/CompGraphicsUTS/src/utils/locationTracker.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/Test/CompGraphicsUTS/dist/index.html",
		"/D/School/Uni/2017 Semester 1/web_systems/public_html/websystems/websystems.css",
		"/C/Users/Pog/Documents/Webpages/HomePage/style.css",
		"/C/Users/Pog/AppData/Roaming/.minecraft/assets/objects/1b/1b4b03096b79814a49683685acdf0e0dfca28791",
		"/C/Users/Pog/Desktop/cemu_1.12.0/cemu_1.12.0/gameProfiles/0005000010145000.ini",
		"/C/Users/Pog/Desktop/cemu_1.12.0/cemu_1.12.0/gameProfiles/00050000101c9500.ini",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/Test/CompGraphicsUTS/dist/inflate.min.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/Source tree/src/utils/collider.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/OLD/CompGraphicsUTS 0.3/src/misc/cowboy.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS/src/misc/android.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS/src/index.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/Test/New folder/CompGraphicsUTS/src/utils/pointerLockControls.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS/src/misc/cowboy.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/OLD/CompGraphicsUTS 0.3/src/misc/android.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/Source tree/src/misc/android.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/Source tree/src/index.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/Source tree/src/misc/cowboy.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/Source tree/src/utils/pointerLockControls.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/Source tree/src/utils/pointerLockControls(Run).js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS 0.2/src/utils/pointerLockControls.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/Source tree/src/misc/floors.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS/src/utils/pointerLockControls.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS/src/utils/pointerLockControls(Default).js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS 0.1/src/index.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS 0.2/src/misc/android.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS 0.2/src/misc/cowboy.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS OLD/src/index.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS/node_modules/cloneable-readable/example.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS/src/libs/NURBSUtils.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS/src/utils/simpleCamera.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS/src/utils/scene.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS/src/misc/tesseract.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS/src/utils/renderer.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS/dist/bundle.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS/src/misc/pikachu.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/git/CompGraphicsUTS/npm_install.sh",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Basic/threejs-1_basic/index.html",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/three 2/three/PointerLockControls.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Museum_Project/three 2/three/main.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Basic/threejs-1_basic/controls_world.html",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Basic/threejs-1_basic/js/mousecontrols.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Basic/threejs-1_basic/mousecontrol2.js",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Basic/threejs-1_basic/index - Copy.html",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Basic/threejs-1_basic/controls_test.html",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Basic_package_start2/Basic_package_start/basic.html",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Ex02_simple_geometry/Ex02_simple_geometry - Copy/index.html",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Basic_package_start/Basic_package_start/basic.html",
		"/G/My Drive/desktop.ini",
		"/C/Users/Pog/Documents/School/Year 2/Semester 1/Comp Graphics/Basic_package_start/Basic_package_start/basic - Copy.html"
	],
	"find":
	{
		"height": 41.6
	},
	"find_in_files":
	{
		"height": 0.0,
		"where_history":
		[
		]
	},
	"find_state":
	{
		"case_sensitive": true,
		"find_history":
		[
		],
		"highlight": true,
		"in_selection": false,
		"preserve_case": false,
		"regex": false,
		"replace_history":
		[
		],
		"reverse": false,
		"show_context": true,
		"use_buffer2": true,
		"whole_word": false,
		"wrap": true
	},
	"groups":
	[
		{
			"selected": 2,
			"sheets":
			[
				{
					"buffer": 0,
					"file": "main.js",
					"semi_transient": false,
					"settings":
					{
						"buffer_size": 1480,
						"regions":
						{
						},
						"selection":
						[
							[
								134,
								134
							]
						],
						"settings":
						{
							"auto_complete": false,
							"syntax": "Packages/JavaScript/JavaScript.sublime-syntax",
							"tab_size": 4,
							"translate_tabs_to_spaces": true
						},
						"translation.x": 0.0,
						"translation.y": 213.0,
						"zoom_level": 1.0
					},
					"stack_index": 1,
					"type": "text"
				},
				{
					"buffer": 1,
					"file": "staff.essential.js",
					"semi_transient": false,
					"settings":
					{
						"buffer_size": 915,
						"regions":
						{
						},
						"selection":
						[
							[
								0,
								0
							]
						],
						"settings":
						{
							"syntax": "Packages/JavaScript/JavaScript.sublime-syntax",
							"tab_size": 4,
							"translate_tabs_to_spaces": true
						},
						"translation.x": 0.0,
						"translation.y": 0.0,
						"zoom_level": 1.0
					},
					"stack_index": 8,
					"type": "text"
				},
				{
					"buffer": 2,
					"file": "staff.autoSpawn.js",
					"semi_transient": false,
					"settings":
					{
						"buffer_size": 9021,
						"regions":
						{
						},
						"selection":
						[
							[
								3431,
								3431
							]
						],
						"settings":
						{
							"auto_complete": false,
							"syntax": "Packages/JavaScript/JavaScript.sublime-syntax",
							"tab_size": 4,
							"translate_tabs_to_spaces": true,
							"word_separators": "./\\()\"'-:,.;<>~!@#$%^&*|+=[]{}`~?"
						},
						"translation.x": 0.0,
						"translation.y": 1368.0,
						"zoom_level": 1.0
					},
					"stack_index": 0,
					"type": "text"
				},
				{
					"buffer": 3,
					"file": "role.harvester.js",
					"semi_transient": false,
					"settings":
					{
						"buffer_size": 1815,
						"regions":
						{
						},
						"selection":
						[
							[
								817,
								817
							]
						],
						"settings":
						{
							"auto_complete": false,
							"syntax": "Packages/JavaScript/JavaScript.sublime-syntax",
							"tab_size": 4,
							"translate_tabs_to_spaces": true
						},
						"translation.x": 0.0,
						"translation.y": 54.0,
						"zoom_level": 1.0
					},
					"stack_index": 6,
					"type": "text"
				},
				{
					"buffer": 4,
					"file": "role.builder.js",
					"semi_transient": false,
					"settings":
					{
						"buffer_size": 1692,
						"regions":
						{
						},
						"selection":
						[
							[
								608,
								608
							]
						],
						"settings":
						{
							"auto_complete": false,
							"syntax": "Packages/JavaScript/JavaScript.sublime-syntax",
							"tab_size": 4,
							"translate_tabs_to_spaces": true
						},
						"translation.x": 0.0,
						"translation.y": 167.0,
						"zoom_level": 1.0
					},
					"stack_index": 3,
					"type": "text"
				},
				{
					"buffer": 5,
					"file": "function.store.js",
					"semi_transient": false,
					"settings":
					{
						"buffer_size": 624,
						"regions":
						{
						},
						"selection":
						[
							[
								579,
								579
							]
						],
						"settings":
						{
							"auto_complete": false,
							"syntax": "Packages/JavaScript/JavaScript.sublime-syntax",
							"tab_size": 4,
							"translate_tabs_to_spaces": true
						},
						"translation.x": 0.0,
						"translation.y": 0.0,
						"zoom_level": 1.0
					},
					"stack_index": 2,
					"type": "text"
				},
				{
					"buffer": 6,
					"file": "role.upgrader.js",
					"semi_transient": false,
					"settings":
					{
						"buffer_size": 1215,
						"regions":
						{
						},
						"selection":
						[
							[
								478,
								478
							]
						],
						"settings":
						{
							"auto_complete": false,
							"syntax": "Packages/JavaScript/JavaScript.sublime-syntax",
							"tab_size": 4,
							"translate_tabs_to_spaces": true
						},
						"translation.x": 0.0,
						"translation.y": 0.0,
						"zoom_level": 1.0
					},
					"stack_index": 5,
					"type": "text"
				},
				{
					"buffer": 7,
					"file": "role.healer.js",
					"semi_transient": false,
					"settings":
					{
						"buffer_size": 1589,
						"regions":
						{
						},
						"selection":
						[
							[
								1540,
								1540
							]
						],
						"settings":
						{
							"auto_complete": false,
							"open_with_edit": true,
							"syntax": "Packages/JavaScript/JavaScript.sublime-syntax",
							"tab_size": 4,
							"translate_tabs_to_spaces": true
						},
						"translation.x": 0.0,
						"translation.y": 274.0,
						"zoom_level": 1.0
					},
					"stack_index": 4,
					"type": "text"
				},
				{
					"buffer": 8,
					"file": "role.tower.js",
					"semi_transient": false,
					"settings":
					{
						"buffer_size": 811,
						"regions":
						{
						},
						"selection":
						[
							[
								533,
								571
							]
						],
						"settings":
						{
							"auto_complete": false,
							"syntax": "Packages/JavaScript/JavaScript.sublime-syntax",
							"tab_size": 4,
							"translate_tabs_to_spaces": true
						},
						"translation.x": 0.0,
						"translation.y": 0.0,
						"zoom_level": 1.0
					},
					"stack_index": 7,
					"type": "text"
				}
			]
		}
	],
	"incremental_find":
	{
		"height": 27.0
	},
	"input":
	{
		"height": 40.8
	},
	"layout":
	{
		"cells":
		[
			[
				0,
				0,
				1,
				1
			]
		],
		"cols":
		[
			0.0,
			1.0
		],
		"rows":
		[
			0.0,
			1.0
		]
	},
	"menu_visible": true,
	"output.exec":
	{
		"height": 115.0
	},
	"output.find_results":
	{
		"height": 0.0
	},
	"pinned_build_system": "",
	"project": "sublime.sublime-project",
	"replace":
	{
		"height": 50.0
	},
	"save_all_on_build": true,
	"select_file":
	{
		"height": 0.0,
		"last_filter": "",
		"selected_items":
		[
		],
		"width": 0.0
	},
	"select_project":
	{
		"height": 0.0,
		"last_filter": "",
		"selected_items":
		[
		],
		"width": 0.0
	},
	"select_symbol":
	{
		"height": 0.0,
		"last_filter": "",
		"selected_items":
		[
		],
		"width": 0.0
	},
	"selected_group": 0,
	"settings":
	{
	},
	"show_minimap": true,
	"show_open_files": false,
	"show_tabs": true,
	"side_bar_visible": true,
	"side_bar_width": 183.0,
	"status_bar_visible": true,
	"template_settings":
	{
	}
}
