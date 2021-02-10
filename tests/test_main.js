const test = require('ava');
const cclist = require('../src/index');

test('listCities', (t) => {
	const cities = cclist.listCities('JO');
	const expected = [
		'Amman',
		'Zarqa',
		'Irbid',
		'Russeifa',
		'Wādī as Sīr',
		'‘Ajlūn',
		'Aqaba',
		'Rukban',
		'Mādabā',
		'As Salţ',
		'Ar Ramthā',
		'Mafraq',
		"Ma'an",
		'Al Jubayhah',
		'Saḩāb',
		'Ḩayy al Quwaysimah',
		'Jarash',
		'Aţ Ţafīlah',
		'‘Izrā',
		'Qīr Moāv',
		'Karak City',
	];
	t.deepEqual(cities, expected);
});

test('listCountries', (t) => {
	const countries = cclist.listCountries();
	t.is(countries.length, 250);
});

test('searchCountries', (t) => {
	const result = cclist.searchCountries('jo');
	t.deepEqual(result, ['Jordan']);
});
