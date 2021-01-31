import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Template
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

// Views Animal Search
import { AnimalSearchComponent } from './components/views/animal-search/animal-search.component';

// Views Animal Dashboard
import { DashboardComponent } from './components/views/dashboard/dashboard.component';
import { QuadrosComponent } from './components/views/dashboard/quadros/quadros.component';

// Views Animal List v1
import { AnimallistComponent } from './components/views/animallist/animallist.component';
import { TabelaReadComponent } from './components/views/animallist/tabela-read/tabela-read.component';
import { TabelaUpdateComponent } from './components/views/animallist/tabela-update/tabela-update.component';
import { TabelaDeleteComponent } from './components/views/animallist/tabela-delete/tabela-delete.component';
import { TabelaCreateComponent } from './components/views/animallist/tabela-create/tabela-create.component';

//Views Animal List V2
import { Animallistv2Component } from './components/views/animallistv2/animallistv2.component';
import { TabelaReadv2Component } from './components/views/animallistv2/tabela-readv2/tabela-readv2.component';
import { TabelaCreatev2Component } from './components/views/animallistv2/tabela-createv2/tabela-createv2.component';
import { TabelaDeletev2Component } from './components/views/animallistv2/tabela-deletev2/tabela-deletev2.component';
import { TabelaUpdatev2Component } from './components/views/animallistv2/tabela-updatev2/tabela-updatev2.component';

//Material Angular
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    DashboardComponent,
    QuadrosComponent,
    AnimallistComponent,
    AnimalSearchComponent,
    TabelaReadComponent,
    TabelaUpdateComponent,
    TabelaDeleteComponent,
    TabelaCreateComponent,
    Animallistv2Component,
    TabelaReadv2Component,
    TabelaCreatev2Component,
    TabelaDeletev2Component,
    TabelaUpdatev2Component,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    //Material Angular
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
