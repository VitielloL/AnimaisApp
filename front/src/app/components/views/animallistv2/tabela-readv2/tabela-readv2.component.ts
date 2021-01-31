import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}

  open() {
    this.isOpen = !this.isOpen;
  }
}
