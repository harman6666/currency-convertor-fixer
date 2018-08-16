/***********************
 * Common utility for converting numbers into Million, Billion, and so on. 
 ************************/
function numberConvertor(min) {
	min = min || 1e3; // also supported the min parameter for changing the base condition.
	if (this >= min) { 
		var units = ["k", "M", "B", "T", "QuadT", "QuintT", "SexT", "SeptT"];
		
		var order = Math.floor(Math.log(this) / Math.log(1000));

		var unitname = units[(order - 1)];
		var num = (this / 1000 ** order).toFixed(2);
		
		return num + unitname
	}
	
	// return formatted original number
	return this.toLocaleString()
}

Number.prototype.numberConvertor = numberConvertor;
String.prototype.numberConvertor = numberConvertor;