import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Animal, Animallistv2Service } from '../animallistv2.service';

@Component({
  selector: 'app-tabela-createv2',
  templateUrl: './tabela-createv2.component.html',
  styleUrls: ['./tabela-createv2.component.scss'],
})
export class TabelaCreatev2Component implements OnInit {
  animais: Animal = {
    nome: '',
    especie: '',
    local: '',
  };

  constructor(private animalv2: Animallistv2Service, private router: Router) {}

  ngOnInit(): void {}

  createAnimal() {
    this.animalv2.create(this.animais).subscribe(() => {
      this.animalv2.showMessage('Animal Cadastrado!');
      this.router.navigate(['/animallistv2']);
      console.log(this.animais);
    });
  }

  cancel() {
    this.router.navigate(['/animallistv2']);
  }
}
