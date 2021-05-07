# cclist

cclist package provide list of all countries with country code, name, flag and digital code. also list of cities in the country

![https://img.shields.io/npm/dt/cclist?style=for-the-badge](https://img.shields.io/npm/dt/cclist?style=for-the-badge)
![https://img.shields.io/npm/v/cclist?style=for-the-badge](https://img.shields.io/npm/v/cclist?style=for-the-badge)
![Codecov](https://img.shields.io/codecov/c/github/MontherAmer/cclist?style=for-the-badge)

## Installation

`npm i cclist`
This assumes you are using npm as your package manager, if you are using yarn `yarn add cclist`

## Usage

in Node

```
const cll = require('cclist');
```

OR

```
const { listCities, listCountries, searchCountries } =require('cclist') ;
```

In React

```
import ccl from 'cclist'
```

OR

```
import { listCities, listCountries, searchCountries } from 'cclist';
```

### cclist Functions:

#### listCountries()

- ##### listCountries()
- returns all countries names as array of strings

- ##### listCountries(options)
- options is a string of one or more of these valus ['flag', 'phone', 'name', 'code'] depends on what data you want to from each country
- returns all countries as array of strings if you send one option
  `listCountries('flag')`
  will return
  ["🇦🇩", "🇦🇪", "🇦🇫" …]

- return all countries as array of objects if you send more than one option in options text
  `listCountries('code name flag phone')`
  will return
  ` [{code: "AD", name: "Andorra", flag: "🇦🇩", phone: "376"} {code: "AE", name: "United Arab Emirates", flag: "🇦🇪", phone: "971"} {code: "AF", name: "Afghanistan", flag: "🇦🇫", phone: "93"}...]`

#### listCities(str,options)

- take country code as string and options object `options={skip:2,limit:10}` if you want to use pagenation in the returend array
- returns cities in one country as array of strings
  `listCities('JO')`
  will return
  `["Amman", "Zarqa", "Irbid",...]`
  `listCities('JO',{skip:2,limit:2})`
  will return
  `["Irbid", "Russeifa"]`

#### searchCountries(str,options)

- take str wich is part of country name and return all countries that like the str, options is a string like the options in listCountries function represent the returned data you want  
  `searchCountries('j','')`
  will return
  ` [{code: "AZ", name: "Azerbaijan", flag: "🇦🇿", phone: "994"},{code: "JM", name: "Jamaica", flag: "🇯🇲", phone: "1876"},{code: "JP", name: "Japan", flag: "🇯🇵", phone: "81"},{code: "SJ", name: "Svalbard and Jan Mayen", flag: "🇸🇯", phone: "4779"}]`
