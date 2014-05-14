

exports = (function() {
	
	function check(raw, expected) {
		var tokens = window.reedy.advancedParser(raw);
		assert.equalArray(tokens[0].toHyphenated(), expected, raw);
	}
	
	
	var assert = require("../assert.js");
	
	
	assert.profile("hypens");
	
	check("снег",                                               ["снег"]);
	
	check("Научно-Этического",                                  ["Научно","Этического"]);
	check("гуманитарно-этической",                              ["гуманитарно","этической"]);
	check("Сказал-толкнул-упал-поднялся-разошлись",             ["Сказал","толкнул","упал","поднялся","разошлись"]);
	
	check("speed_reading",                                      ["speed","reading"]);
	check("Сказал_толкнул_упал_поднялся_разошлись",             ["Сказал","толкнул","упал","поднялся","разошлись"]);
	
	check("удовлетворенности/неудовлетворенности",              ["удовле","творен","ности","неудовл","етворен","ности"]);
	check("клановой/этнической/социальной/субкультурной",       ["клановой","этнической","социальной","субкультурной"]);
	
	check("семидесятимиллионная",                               ["семидес","ятимилл","ионная"]);
	
	return assert.profileEnd();
	
})();
