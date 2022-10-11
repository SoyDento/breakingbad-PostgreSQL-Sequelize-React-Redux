const { Character } = require('../db.js');

async function deleteChar(id) {

		let charOver = await Character.findByPk(id)

		Character.destroy({
      where: { id: id },
      force: true
    })
		.then( (r)=> console.log(' borro el personaje') )
		.catch( (e)=> console.log('deleteChar: ', e.message) );

		return charOver;

};

module.exports = deleteChar;
