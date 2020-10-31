import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabela-read',
  templateUrl: './tabela-read.component.html',
  styleUrls: ['./tabela-read.component.scss'],
})
export class TabelaReadComponent implements OnInit {
  tabela;
  displayedColumns = ['nome', 'especie', 'local', 'action'];
  isOpen;
  tabelaAnimal;
  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.tabela = this.animalService.read().subscribe((dadoAnimal) => {
      this.tabelaAnimal = dadoAnimal;
    });
  }

  open() {
    this.isOpen = !this.isOpen;
  }
}

//FUNÇÃO DE FILTRAR PELO FRONT
// filter(event: Event) {
//   const filterValue = (event.target as HTMLInputElement).value;
//   this.tabela.filter = filterValue.trim().toLowerCase();
// }
