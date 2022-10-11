const axios = require('axios').default;
const { Occupation } = require('../db.js');


async function getOccupations(){

  let occupations = await Occupation.findAll()
    .then( async(r) => r )
    .catch( e=> console.log(e) );
  // console.log(Occupations);
  return occupations;
}

module.exports = { getOccupations };
