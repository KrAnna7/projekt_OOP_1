// plik scripts.js
function Telefon(marka, cena, kolor, systemoperacyjny, rozdzielczość, pamięć) {
	this.marka = marka;
	this.cena = cena;
	this.kolor = kolor;
	this.systemoperacyjny = systemoperacyjny;
	this.rozdzielczość = rozdzielczość;
	this.pamięć = pamięć;
}
Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " +  this.marka + ', a jego cena to ' + this.cena + ', a jego kolor to ' + this.kolor + '.');
};
Telefon.prototype.systemOperacyjnyInfo = function() {
	console.log('System operacyjny to :' + this.systemoperacyjny + '.');
}
Telefon.prototype.cameraInfo = function(){
	console.log('Posiada wbudowany Aparat o rozdzielczości ' + this.rozdzielczość + '.')
};
Telefon.prototype.pamięćInfo = function(){
	console.log('Pamięć wewnętrzna to: ' + this.pamięć + '.')
};

var SamsungGalaxyS6 = new Telefon('Samsung', 1800, 'czarny', 'Android', '16MPIX', '32GB');
var	iPhone6s = new Telefon('Apple', 2250, 'srebrny', 'iOS', '12MPIX', '32GB');
var	OnePlusOne = new Telefon('OnePlusOne', 1299, 'czerwony', 'OxygenOS', '5MPIX', '64GB');

SamsungGalaxyS6.printInfo();
SamsungGalaxyS6.systemOperacyjnyInfo();
SamsungGalaxyS6.cameraInfo();
SamsungGalaxyS6.pamięćInfo();
iPhone6s.printInfo();
iPhone6s.systemOperacyjnyInfo();
iPhone6s.cameraInfo();
iPhone6s.pamięćInfo();
OnePlusOne.printInfo();
OnePlusOne.systemOperacyjnyInfo();
OnePlusOne.cameraInfo();
OnePlusOne.pamięćInfo();
