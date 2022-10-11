const { Character } = require('../db.js');

async function altChar(idChar, attribute, value) {

	if (attribute === 'name') {
		if (value.includes(' ')) {
			value = value.split(' ').map(p=> p.slice(0,1).toUpperCase().concat(p.slice(1).toLowerCase())).join(' ')
		} else { value = value[0].toUpperCase().concat(value.slice(1).toLowerCase()) };
	};
	// corrigiendo formato de fecha
	if (attribute === 'birthday') {
		value = value.replace('/','-').replace('.','-').split('-');
		if (value[0].length === 1) value[0] = '0'.concat(value[0]);
		if (value[1].length === 1) value[1] = '0'+value[1];
		value = value.join('-');
	};
	// corrigiendo posible errores de nickname
	if (attribute === 'nickname') value.replace(' ','');

		let myChar = await Character.findByPk(idChar)
		.then( (r)=> r.update({[attribute]: value}) )
		 // 'actulizamos el atributo de la actividad'
		.catch( (e)=> console.log('falló en altChar: ', e.message) )

		return myChar;
};

module.exports = altChar;
