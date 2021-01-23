import { list } from './data/countries';
import citiesList from './data/cities.json';

// * listCities function recive code (string of 2 char length) and options object(optional)
// * return array of cities names
exports.listCities = (code, options = {}) => {
  try {
    if (!code || typeof code !== 'string') return Promise.reject('code value accept string only ');

    // * get data from the related module
    // const { data } = require(`../data/cities/${code.toUpperCase()}.js`);
    let data = citiesList[code.toUpperCase()];
    // * map the data and return the city name
    let list = data.map((item) => item.name);

    // * return sub list
    return list.splice(options?.skip || 0, options?.limit || 6000);
  } catch (err) {
    return err;
  }
};
/* -------------------------------------------------------------------------- */

exports.listCountries = (options = 'name') => {
  const keys = ['flag', 'phone', 'name', 'code'];

  // * convert options string to array
  let optionsArr = options.trim().split(' ');

  // * return error if one of the optionsArr is not defiend
  if (!optionsArr.every((item) => keys.includes(item)))
    return Promise.reject('options string only accept flag,phone,name and code');

  // * return array of strings if only one option is sent
  if (optionsArr.length === 1) return list.map((item) => item[optionsArr[0]]);

  // * return array of objects if more than one options is sent
  return list.map((item) => {
    let obj = {};
    optionsArr.map((opt) => (obj[opt] = item[opt]));
    return obj;
  });
};

exports.searchCountries = (text, options = 'name') => {
  try {
    const keys = ['flag', 'phone', 'name', 'code'];

    // * convert options string to array
    let optionsArr = options.trim().split(' ');

    // * return error if one of the options is not defiend
    if (!optionsArr.every((item) => keys.includes(item)))
      return Promise.reject('options string only accept flag,phone,name and code');

    // * prepare the regexp
    var comparative = new RegExp(text.toUpperCase());

    let data = list
      .filter((item) => comparative.test(item.name.toUpperCase()))
      .map((item) => {
        let obj = {};
        let arr = [];
        optionsArr.map((opt) => (optionsArr.length === 1 ? arr.push(item[opt]) : (obj[opt] = item[opt])));
        return arr.length ? arr[0] : obj;
      });

    return data;
  } catch (err) {
    return err;
  }
};
