import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService, animalUnico } from '../animal.service';

@Component({
  selector: 'app-tabela-delete',
  templateUrl: './tabela-delete.component.html',
  styleUrls: ['./tabela-delete.component.scss'],
})
export class TabelaDeleteComponent implements OnInit {
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
  // delete no service e no ts.
  delete() {
    // this.tabelaReadService.delete(this.dadoAnimal.animais[0]).subscribe(() => {
    //   this.router.navigate(['/listaCliente']);
    // });
  }

  cancel(): void {
    this.router.navigate(['/animallist']);
  }
}
