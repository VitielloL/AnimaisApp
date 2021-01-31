import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalSearchComponent } from './components/views/animal-search/animal-search.component';
import { AnimallistComponent } from './components/views/animallist/animallist.component';
import { TabelaCreateComponent } from './components/views/animallist/tabela-create/tabela-create.component';
import { TabelaDeleteComponent } from './components/views/animallist/tabela-delete/tabela-delete.component';
import { TabelaUpdateComponent } from './components/views/animallist/tabela-update/tabela-update.component';
import { Animallistv2Component } from './components/views/animallistv2/animallistv2.component';
import { TabelaCreatev2Component } from './components/views/animallistv2/tabela-createv2/tabela-createv2.component';
import { TabelaDeletev2Component } from './components/views/animallistv2/tabela-deletev2/tabela-deletev2.component';
import { TabelaUpdatev2Component } from './components/views/animallistv2/tabela-updatev2/tabela-updatev2.component';
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
    path: 'tabelacreatev2',
    component: TabelaCreatev2Component,
  },
  {
    path: 'tabeladelete/:id',
    component: TabelaDeleteComponent,
  },
  {
    path: 'tabeladeletev2/:id',
    component: TabelaDeletev2Component,
  },
  {
    path: 'tabelaupdate/:id',
    component: TabelaUpdateComponent,
  },
  {
    path: 'tabelaupdatev2/:id',
    component: TabelaUpdatev2Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
