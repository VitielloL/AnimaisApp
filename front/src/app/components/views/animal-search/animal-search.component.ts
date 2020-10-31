import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-search',
  templateUrl: './animal-search.component.html',
  styleUrls: ['./animal-search.component.scss'],
})
export class AnimalSearchComponent implements OnInit {
  pesquisar;
  reg; // regular expression
  lis; // acredito que de lista

  constructor() {}

  ngOnInit(): void {
    this.pesquisar = document.querySelectorAll('.pesquisa');
    for (let i of this.pesquisar) {
      i.onkeyup = function (e) {
        this.reg = new RegExp(this.value.toLowerCase(), 'g');
        this.lis = document.querySelector('.lista');
        for (let j of this.lis.children) {
          if (!j.getAttribute('nome').match(this.reg)) j.style.display = 'none';
          else j.removeAttribute('style');
        }
      };
    }
  }
}
