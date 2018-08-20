'use strict';

var deviceStorage = [[], [], [], []];

function CreateNewDevice (devicesArray) {
	this._devicesArray = devicesArray;
};

CreateNewDevice.prototype.addNewDevice = function (type, name) {
	switch (Number(type)) {
        case 0:
            this._devicesArray[type].push(new Lamp(type, name));
            console.log(this._devicesArray[type]);
            break;
        case 1:
            this._devicesArray[type].push(new Heater(type, name));
            break;
		case 2:
            this._devicesArray[type].push(new Fridge(type, name));
            break;          
		case 3:
            this._devicesArray[type].push(new TvDevice(type, name));
            break;
    }
};

CreateNewDevice.prototype.removeDevice = function (i, j) {
	this._devicesArray[i].splice(j, 1);
};




          

          