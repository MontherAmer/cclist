const { list } = require('../data/countries');

exports.listCountries = (options = 'name') => {
  const keys = ['flag', 'phone', 'name', 'code'];

  // * convert options string to array
  options = options.split(' ');

  // * return error if one of the options is not defiend
  if (!options.every((item) => keys.includes(item)))
    return Promise.reject('options string only accept flag,phone,name and code');

  // * return array of strings if only one option is sent
  if (options.length === 1) return list.map((item) => item[options[0]]);

  // * return array of objects if more than one options is sent
  return list.map((item) => {
    let obj = {};
    options.map((opt) => (obj[opt] = item[opt]));
    return obj;
  });
};
