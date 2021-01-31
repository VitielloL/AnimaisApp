import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService, animalUnico } from '../animal.service';

@Component({
  selector: 'app-tabela-update',
  templateUrl: './tabela-update.component.html',
  styleUrls: ['./tabela-update.component.scss'],
})
export class TabelaUpdateComponent implements OnInit {
  nome;
  dadoAnimal: animalUnico;
  grupoAnimal;
  local;
  id;
  lerUm;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private animalService: AnimalService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.animalService.read1Animal(this.id).subscribe((dadoAnimal) => {
        this.dadoAnimal = dadoAnimal;
        this.nome = dadoAnimal.animal.nome;
        this.local = dadoAnimal.animal.local;
        this.grupoAnimal = dadoAnimal.animal.especie;
      });
    });
  }

  update() {
    this.animalService
      .update(this.id, {
        nome: this.nome,
        especie: this.grupoAnimal,
        local: this.local,
      })
      .subscribe(() => {
        this.animalService.showMessage(
          'Dados do animal atualizados com sucesso!'
        );
        this.router.navigate(['/animallist']);
      });
  }

  cancel() {}
}
