import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalSearchComponent } from './components/views/animal-search/animal-search.component';
import { AnimallistComponent } from './components/views/animallist/animallist.component';
import { TabelaCreateComponent } from './components/views/animallist/tabela-create/tabela-create.component';
import { TabelaDeleteComponent } from './components/views/animallist/tabela-delete/tabela-delete.component';
import { TabelaUpdateComponent } from './components/views/animallist/tabela-update/tabela-update.component';
import { Animallistv2Component } from './components/views/animallistv2/animallistv2.component';
import { DashboardComponent } from './components/views/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'animallist',
    component: AnimallistComponent,
  },

  {
    path: 'animallistv2',
    component: Animallistv2Component,
  },
  {
    path: 'animalsearch',
    component: AnimalSearchComponent,
  },
  {
    path: 'tabelacreate',
    component: TabelaCreateComponent,
  },
  {
    path: 'tabeladelete/:id',
    component: TabelaDeleteComponent,
  },
  {
    path: 'tabelaupdate/:id',
    component: TabelaUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
