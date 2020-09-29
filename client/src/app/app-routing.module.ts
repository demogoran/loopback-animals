import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetComponent } from './pet/pet.component';

const routes: Routes = [
  {
    path: 'pet',
    component: PetComponent,
    data: { title: 'List of Pets' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
