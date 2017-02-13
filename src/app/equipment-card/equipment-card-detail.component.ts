import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { EquipmentCard } from './equipment-card.class';
import { EquipmentCardService } from '../equipment-card/equipment-card.service';

@Component({
  moduleId: module.id,
  selector: 'equipment-card-detail',
  templateUrl: './equipment-card-detail.component.html',
  styleUrls: ['./equipment-card-detail.component.css'],
  providers: [EquipmentCardService]

})
export class EquipmentCardDetailComponent implements OnInit {

    @Input()
    equipmentCard: EquipmentCard;

    constructor(
      private equipmentCardService: EquipmentCardService,
      private route: ActivatedRoute,
      private router: Router,
      private location: Location
    ) {}

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.equipmentCard = this.equipmentCardService.getECard(id);
    }

    goBack(): void {
      this.location.back();
    }


}