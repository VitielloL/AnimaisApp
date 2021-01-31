import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal, Animallistv2Service } from '../animallistv2.service';

@Component({
  selector: 'app-tabela-readv2',
  templateUrl: './tabela-readv2.component.html',
  styleUrls: ['./tabela-readv2.component.scss'],
})
export class TabelaReadv2Component implements OnInit {
  tabela;
  displayedColumns = ['nome', 'especie', 'local', 'action'];
  isOpen;
  tabelaAnimal;

  animais: Animal[];
  constructor(private animalv2: Animallistv2Service, private router: Router) {}

  ngOnInit(): void {
    this.animalv2.read().subscribe((animais) => {
      this.animais = animais;
    });
  }

  open() {
    this.isOpen = !this.isOpen;
  }
}
