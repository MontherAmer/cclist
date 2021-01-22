const { list } = require('../data/countries');

exports.search = (text, options = 'name') => {
  try {
    const keys = ['flag', 'phone', 'name', 'code'];

    // * convert options string to array
    options = options.split(' ');

    // * return error if one of the options is not defiend
    if (!options.every((item) => keys.includes(item)))
      return Promise.reject('options string only accept flag,phone,name and code');

    // * prepare the regexp
    var comparative = new RegExp(text.toUpperCase());

    let data = list
      .filter((item) => comparative.test(item.name.toUpperCase()))
      .map((item) => {
        let obj = {};
        let arr = [];
        options.map((opt) => (options.length === 1 ? arr.push(item[opt]) : (obj[opt] = item[opt])));
        return arr.length ? arr[0] : obj;
      });

    return data;
  } catch (err) {
    return err;
  }
};
