var exec = require('cordova/exec'),
	argscheck = require('cordova/argscheck');

function EmdkBarcode () {
	var me = this;

	this.available = false;

	exec(function () {
		me.available = true;
	}, function () {
		me.available = false;
	}, "EmdkBarcode", "init", []);
}

EmdkBarcode.prototype.initialize = function (successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'EmdkBarcode.initialize', arguments);
    exec(successCallback, errorCallback, "EmdkBarcode", "init", []);
};

EmdkBarcode.prototype.close = function (successCallback, errorCallback) {
    argscheck.checkArgs('fF', 'EmdkBarcode.close', arguments);
    exec(successCallback, errorCallback, "EmdkBarcode", "close", []);
};

EmdkBarcode.prototype.startHardRead = function (successCallback, errorCallback) {
	argscheck.checkArgs('fF', 'EmdkBarcode.startHardRead', arguments);
	exec(successCallback, errorCallback, "EmdkBarcode", "startHardRead", []);
};

EmdkBarcode.prototype.startSoftRead = function (successCallback, errorCallback) {
	argscheck.checkArgs('fF', 'EmdkBarcode.startSoftRead', arguments);
	exec(successCallback, errorCallback, "EmdkBarcode", "startSoftRead", []);
};

EmdkBarcode.prototype.stopReading = function () {
	exec(function () {}, function () {}, "EmdkBarcode", "stopReading", []);
};

module.exports = new EmdkBarcode();
