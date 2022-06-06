const person_name = require("../country/state/city/index.js");
const fris_name = require("../utilities/utils/index.js");

const getPeopleInCity = (person_name) => {
  return fris_name(person_name);
};
module.exports = getPeopleInCity;
