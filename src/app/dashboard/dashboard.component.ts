import { Component, OnInit } from '@angular/core';

import { EquipmentCard } from '../equipment-card/equipment-card.class';
import { EquipmentCardService } from '../equipment-card/equipment-card.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [EquipmentCardService]
})

export class DashboardComponent implements OnInit {
  
  equipmentCards = [];

  constructor(private equipmentCardService: EquipmentCardService) { }

  getEquipmentCard(): void {
    this.equipmentCards = this.equipmentCardService.getEquipmentCard().slice(0, 5);
  }
  ngOnInit(): void {
    this.getEquipmentCard();
  }

}