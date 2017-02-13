import { Injectable } from '@angular/core';

import { EquipmentCard } from './equipment-card.class';
import { EQUIPMENT_CARDS } from './equipment-card.mock';

@Injectable()
export class EquipmentCardService {

	e = [];

	getEquipmentCard(): EquipmentCard[] {
		for (let x=0;x<10;x++) {
			for (let i=0;i<EQUIPMENT_CARDS.length;i++) {
				this.e.push(EQUIPMENT_CARDS[i]);
			}
		}

    	return this.e;
    }

    getECard(id: number): EquipmentCard {
	  return this.getEquipmentCard().find(card => card.id === id);
	}

}