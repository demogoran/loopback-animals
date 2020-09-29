import { Component, OnInit } from '@angular/core';

import { PetService } from '../cruds.service';
import { Pet } from '../interfaces';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss'],
})
export class PetComponent implements OnInit {
  displayedColumns: string[] = ['id', 'vaccinated'];
  data: Pet[] = [];
  isLoadingResults = true;
  isVaccinated = false;

  constructor(private api: PetService) {}

  async addPet() {
    await this.api.save({
      vaccinated: this.isVaccinated,
    });

    this.isLoadingResults = true;
    this.data = await this.api.findAll();
    console.log(this.data);
    this.isLoadingResults = false;
  }

  async ngOnInit(): Promise<void> {
    this.data = await this.api.findAll();
    console.log(this.data);
    this.isLoadingResults = false;
  }
}
