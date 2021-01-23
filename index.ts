const { list } = require('./data/countries');

// * listCities function recive code (string of 2 char length) and options object(optional)
// * return array of cities names
const listCities = (code: string, options?: { skip: number; limit: number }): any => {
  try {
    if (!code || typeof code !== 'string') return Promise.reject('code value accept string only ');

    // * get data from the related module
    const { data } = require(`../data/cities/${code.toUpperCase()}.js`);

    // * map the data and return the city name
    let list = data.map((item: any) => item.name);

    // * return sub list
    return list.splice(options?.skip || 0, options?.limit || 6000);
  } catch (err) {
    return err;
  }
};
/* -------------------------------------------------------------------------- */

const listCountries = (options = 'name') => {
  const keys = ['flag', 'phone', 'name', 'code'];

  // * convert options string to array
  let optionsArr = options.trim().split(' ');

  // * return error if one of the optionsArr is not defiend
  if (!optionsArr.every((item) => keys.includes(item)))
    return Promise.reject('options string only accept flag,phone,name and code');

  // * return array of strings if only one option is sent
  if (optionsArr.length === 1) return list.map((item: any) => item[optionsArr[0]]);

  // * return array of objects if more than one options is sent
  return list.map((item: any) => {
    let obj = {} as any;
    optionsArr.map((opt) => (obj[opt] = item[opt]));
    return obj;
  });
};

const searchCountries = (text: string, options = 'name'): any => {
  try {
    const keys = ['flag', 'phone', 'name', 'code'];

    // * convert options string to array
    let optionsArr = options.trim().split(' ');

    // * return error if one of the options is not defiend
    if (!optionsArr.every((item: string) => keys.includes(item)))
      return Promise.reject('options string only accept flag,phone,name and code');

    // * prepare the regexp
    var comparative = new RegExp(text.toUpperCase());

    let data = list
      .filter((item: any) => comparative.test(item.name.toUpperCase()))
      .map((item: any) => {
        let obj = {} as any;
        let arr = [] as string[];
        optionsArr.map((opt: any) => (optionsArr.length === 1 ? arr.push(item[opt]) : (obj[opt] = item[opt])));
        return arr.length ? arr[0] : obj;
      });

    return data;
  } catch (err) {
    return err;
  }
};

export = { listCities, listCountries, searchCountries };
