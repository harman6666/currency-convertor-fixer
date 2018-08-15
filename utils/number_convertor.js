/***********************
 * Common utility for converting numbers into Million, Billion, and so on. 
 ************************/
function numberConvertor() {
	if (this >= 1e6) {
		var units = 
		[
			"Million",
			"Billion",
			"Trillion",
			"Quadrillion",
			"Quintillion",
			"Sextillion",
			"Septillion",
			"Octillion"
		];

		var unit = Math.floor((this / 1000).toFixed(0).toString().length);
		var num = (this / ('1e'+(unit+2))).toFixed(3);
		var unitname = units[Math.floor(unit / 3) - 1];
		return num + ' ' + unitname;
	}

	var parts = this.toString().split(".");
	parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
}

Number.prototype.numberConvertor = numberConvertor;
String.prototype.numberConvertor = numberConvertor;