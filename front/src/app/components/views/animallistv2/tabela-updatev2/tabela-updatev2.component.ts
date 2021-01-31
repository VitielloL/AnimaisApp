import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal, Animallistv2Service } from '../animallistv2.service';

@Component({
  selector: 'app-tabela-updatev2',
  templateUrl: './tabela-updatev2.component.html',
  styleUrls: ['./tabela-updatev2.component.scss'],
})
export class TabelaUpdatev2Component implements OnInit {
  constructor(
    private router: Router,
    private animalv2: Animallistv2Service,
    private route: ActivatedRoute
  ) {}

  animal: Animal;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.animalv2.readById(id).subscribe((animal) => {
      this.animal = animal;
    });
  }

  update() {
    this.animalv2.update(this.animal).subscribe(() => {
      this.animalv2.showMessage('Dados do animal atualizados com sucesso!');
      this.router.navigate(['/animallistv2']);
    });
  }

  cancel() {
    this.router.navigate(['/animallistv2']);
  }
}
