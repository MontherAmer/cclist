const {list} = require('./data/countries');
const citiesList = require('./data/cities.json');

// * ListCities function recive code (string of 2 char length) and options object(optional)
// * return array of cities names
exports.listCities = (code, options = {}) => {
	try {
		if (!code || typeof code !== 'string') {
			return Promise.reject('code value accept string only ');
		}

		// * Get data from the related module
		const data = citiesList[code.toUpperCase()];
		// * Map the data and return the city name
		const list = data.map(item => item);

		// * Return sub list
		return list.splice(options.skip || 0, options.limit || 6000);
	} catch (error) {
		return error;
	}
};
/* -------------------------------------------------------------------------- */

exports.listCountries = (options = 'name') => {
	const keys = new Set(['flag', 'phone', 'name', 'code']);

	// * Convert options string to array
	const optionsArray = options.trim().split(' ');

	// * Return error if one of the optionsArr is not defiend
	if (!optionsArray.every(item => keys.has(item))) {
		return Promise.reject('options string only accept flag,phone,name and code');
	}

	// * Return array of strings if only one option is sent
	if (optionsArray.length === 1) {
		return list.map(item => item[optionsArray[0]]);
	}

	// * Return array of objects if more than one options is sent
	return list.map(item => {
		const object = {};
		optionsArray.map(opt => (object[opt] = item[opt]));
		return object;
	});
};

exports.searchCountries = (text, options = 'name') => {
	try {
		const keys = new Set(['flag', 'phone', 'name', 'code']);

		// * Convert options string to array
		const optionsArray = options.trim().split(' ');

		// * Return error if one of the options is not defiend
		if (!optionsArray.every(item => keys.has(item))) {
			return Promise.reject('options string only accept flag,phone,name and code');
		}

		// * Prepare the regexp
		const comparative = new RegExp(text.toUpperCase());

		const data = list
			.filter(item => comparative.test(item.name.toUpperCase()))
			.map(item => {
				const object = {};
				const array = [];
				optionsArray.map(opt => (optionsArray.length === 1 ? array.push(item[opt]) : (object[opt] = item[opt])));
				return array.length > 0 ? array[0] : object;
			});

		return data;
	} catch (error) {
		return error;
	}
};
