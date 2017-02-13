import { EquipmentCard } from './equipment-card.class';

export const EQUIPMENT_CARDS: EquipmentCard[] = [{
	id: 1,
	name: 'AAAHH!', // nombre
	description: 'What you thought was a pile of rags is in fact a zombie. Place one walker in the room you just searched.', // descripcion
	imagen: 'aaahh.jpg', // ideal base64 imagen de la tarjeta
	open_door: false, // abre puertas?
	weapon: false, // es un arma?
	noise_od: undefined, // 0 no 1 si hace ruido al abrir puertas
	noise_w: undefined, // 0 no 1 si hace ruido al atacar
	dual: undefined, // si equipas dos armas duales atacas con las dos y gastas solo una accion.
	range: undefined, // distancia de ataque
	dices: undefined, // numero de dados que tira al atacar
	target: undefined, // objetivo a superar con los dados
	damage: undefined, // daño
	special: 'Place one walker in the room you just searched.', // propiedades especiales
	combine_with: undefined, //combina con otro objeto
	position: undefined, // hay 5 espacios en el equipo de cada personaje
	equiped: undefined
},{
	id: 2,
	name: 'BAG OF RICE', // nombre
	description: 'Bag of rice', // descripcion
	imagen: 'bag-of-rice.jpg', // ideal base64 imagen de la tarjeta
	open_door: false, // abre puertas?
	weapon: false, // es un arma?
	noise_od: undefined, // 0 no 1 si hace ruido al abrir puertas
	noise_w: undefined, // 0 no 1 si hace ruido al atacar
	dual: undefined, // si equipas dos armas duales atacas con las dos y gastas solo una accion.
	range: undefined, // distancia de ataque
	dices: undefined, // numero de dados que tira al atacar
	target: undefined, // objetivo a superar con los dados
	damage: undefined, // daño
	special: undefined, // propiedades especiales
	combine_with: undefined, //combina con otro objeto
	position: undefined, // hay 5 espacios en el equipo de cada personaje
	equiped: undefined
},{
	id: 3,
	name: 'BASEBALL BAT', // nombre
	description: 'Baseball bat', // descripcion
	imagen: 'baseball-bat.jpg', // ideal base64 imagen de la tarjeta
	open_door: false, // abre puertas?
	weapon: true, // es un arma?
	noise_od: undefined, // 0 no 1 si hace ruido al abrir puertas
	noise_w: 0, // 0 no 1 si hace ruido al atacar
	dual: false, // si equipas dos armas duales atacas con las dos y gastas solo una accion.
	range: 0, // distancia de ataque
	dices: 1, // numero de dados que tira al atacar
	target: 3, // objetivo a superar con los dados
	damage: 1, // daño
	special: undefined, // propiedades especiales
	combine_with: undefined, //combina con otro objeto
	position: undefined, // hay 5 espacios en el equipo de cada personaje
	equiped: undefined
},{
	id: 4,
	name: 'CANNED FOOD', // nombre
	description: 'Canned food', // descripcion
	imagen: 'canned-food.jpg', // ideal base64 imagen de la tarjeta
	open_door: false, // abre puertas?
	weapon: false, // es un arma?
	noise_od: undefined, // 0 no 1 si hace ruido al abrir puertas
	noise_w: undefined, // 0 no 1 si hace ruido al atacar
	dual: undefined, // si equipas dos armas duales atacas con las dos y gastas solo una accion.
	range: undefined, // distancia de ataque
	dices: undefined, // numero de dados que tira al atacar
	target: undefined, // objetivo a superar con los dados
	damage: undefined, // daño
	special: undefined, // propiedades especiales
	combine_with: undefined, //combina con otro objeto
	position: undefined, // hay 5 espacios en el equipo de cada personaje
	equiped: undefined
},{
	id: 5,
	name: 'CHAINSAW', // nombre
	description: 'Chainsaw', // descripcion
	imagen: 'chainsaw.jpg', // ideal base64 imagen de la tarjeta
	open_door: true, // abre puertas?
	weapon: true, // es un arma?
	noise_od: 1, // 0 no 1 si hace ruido al abrir puertas
	noise_w: 1, // 0 no 1 si hace ruido al atacar
	dual: false, // si equipas dos armas duales atacas con las dos y gastas solo una accion.
	range: 0, // distancia de ataque
	dices: 5, // numero de dados que tira al atacar
	target: 5, // objetivo a superar con los dados
	damage: 2, // daño
	special: undefined, // propiedades especiales
	combine_with: undefined, //combina con otro objeto
	position: undefined, // hay 5 espacios en el equipo de cada personaje
	equiped: undefined
},{
	id: 6,
	name: 'CROWBAR', // nombre
	description: 'Crowbar', // descripcion
	imagen: 'crowbar.jpg', // ideal base64 imagen de la tarjeta
	open_door: true, // abre puertas?
	weapon: true, // es un arma?
	noise_od: 0, // 0 no 1 si hace ruido al abrir puertas
	noise_w: 0, // 0 no 1 si hace ruido al atacar
	dual: false, // si equipas dos armas duales atacas con las dos y gastas solo una accion.
	range: 0, // distancia de ataque
	dices: 1, // numero de dados que tira al atacar
	target: 4, // objetivo a superar con los dados
	damage: 1, // daño
	special: undefined, // propiedades especiales
	combine_with: undefined, //combina con otro objeto
	position: undefined, // hay 5 espacios en el equipo de cada personaje
	equiped: undefined
}];