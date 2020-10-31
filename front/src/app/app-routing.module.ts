import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalSearchComponent } from './components/views/animal-search/animal-search.component';
import { AnimallistComponent } from './components/views/animallist/animallist.component';
import { TabelaCreateComponent } from './components/views/animallist/tabela-create/tabela-create.component';
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
    path: 'animalsearch',
    component: AnimalSearchComponent,
  },
  {
    path: 'tabelacreate',
    component: TabelaCreateComponent,
  },
  {
    path: 'tabeladelete/:id',
    component: TabelaCreateComponent,
  },
  {
    path: 'tabelaupdate/:id',
    component: TabelaCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
