const axios = require('axios').default;
const { Character, Occupation } = require('../db.js');

async function getCharsDB () {

  let chars = await Character.findAll({ include: Occupation })
      .then( response=> response)
      .catch( e=> console.log(e) );

  return chars;

};

module.exports =  getCharsDB;
