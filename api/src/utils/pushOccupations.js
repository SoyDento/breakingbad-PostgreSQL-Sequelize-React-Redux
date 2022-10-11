const { Occupation } = require('../db.js');
const axios = require('axios').default;

function pushOccupations(){

      axios(`https://www.breakingbadapi.com/api/characters`)
        .then( r=>{
          // console.log(r);
          let occ = [];
          r.data.forEach((o) => {
            o.occupation.forEach( (i) => { if (!occ.includes(i)) occ.push(i) });
          });
          return occ;
        })
        .then(r=> r.forEach((o) => Occupation.create({name:o}) ) )
        .then(r=> console.log('ocupaciones creadas en DB') )
        .catch(e=> console.log(e) )

};

module.exports = {pushOccupations};
