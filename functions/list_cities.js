exports.listCities = (code, options = { skip: 0, limit: 6000 }) => {
  try {
    if (!code || typeof code !== 'string') return Promise.reject('code value accept string only ');

    // * get data from the related module
    const { data } = require(`../data/cities/${code.toUpperCase()}.js`);
    // * map the data and return the city name
    let list = data.map((item) => item.name);
    // * return sub list
    return list.splice(options.skip, options.limit);
  } catch (err) {
    return err;
  }
};
