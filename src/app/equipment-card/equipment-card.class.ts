export class EquipmentCard {
	id: number; // numero de id para diferenciarla de otras cartas repetidas del mismo tipo
	name: string; // nombre
	description: string; // descripcion
	imagen: string; // base64 imagen de la tarjeta
	open_door: boolean; // abre puertas?
	weapon: boolean; // es un arma?
	noise_od: number; // 0 no 1 si hace ruido al abrir puertas
	noise_w: number; // 0 no 1 si hace ruido al atacar
	dual: boolean; // si equipas dos armas duales atacas con las dos y gastas solo una accion.
	range: number; // distancia de ataque
	dices: number; // numero de dados que tira al atacar
	target: number; // objetivo a superar con los dados
	damage: number; // daño
	special: string; // propiedades especiales
	combine_with: string; //combina con otro objeto
	position: number; // hay 5 espacios en el equipo de cada personaje
	equiped: number; //position debe ser menor o igual a equiped para poder usarse.
}
