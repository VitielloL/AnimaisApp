import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-tabela-create',
  templateUrl: './tabela-create.component.html',
  styleUrls: ['./tabela-create.component.scss'],
})
export class TabelaCreateComponent implements OnInit {
  nome;
  grupoAnimal;
  local;

  constructor(private animalService: AnimalService, private router: Router) {}

  ngOnInit(): void {}
  criarAnimal() {
    console.log(this.nome, this.grupoAnimal, this.local);
    this.animalService
      .create({
        nome: this.nome,
        especie: this.grupoAnimal,
        local: this.local,
      })
      .subscribe(() => {
        this.animalService.showMessage('Animal Cadastrado com sucesso!');
        this.router.navigate(['/animallist']);
      });
  }

  cancel(): void {
    this.router.navigate(['/animallist']);
  }
}
