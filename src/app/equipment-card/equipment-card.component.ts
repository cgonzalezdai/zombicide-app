import { Component, OnInit } from '@angular/core';
import { Router }   from '@angular/router';
import { EquipmentCard } from './equipment-card.class';
import { EquipmentCardService } from './equipment-card.service';

@Component({
  moduleId: module.id,
  selector: 'equipment-card',
  templateUrl: './equipment-card.component.html',
  styleUrls: ['./equipment-card.component.css'],
  providers: [EquipmentCardService]
})
export class EquipmentCardComponent implements OnInit  {
  equipmentCards = [];
  selectedEquipmentCard : EquipmentCard;

  constructor(
    private router: Router,
    private equipmentCardService: EquipmentCardService) { }

  getEquipmentCard(): void {
    this.equipmentCards = this.equipmentCardService.getEquipmentCard();
  }
  ngOnInit(): void {
    this.getEquipmentCard();
  }

  onSelect(card: EquipmentCard): void {
    this.selectedEquipmentCard = card;
  }

  gotoDetail(): void {
  this.router.navigate(['/equipment-card-detail', this.selectedEquipmentCard.id]);
}

}
