import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal, Animallistv2Service } from '../animallistv2.service';

@Component({
  selector: 'app-tabela-deletev2',
  templateUrl: './tabela-deletev2.component.html',
  styleUrls: ['./tabela-deletev2.component.scss'],
})
export class TabelaDeletev2Component implements OnInit {
  animal: Animal;

  constructor(
    private router: Router,
    private animalv2: Animallistv2Service,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.animalv2.readById(id).subscribe((animal) => {
      this.animal = animal;
    });
  }

  deletar() {
    this.animalv2.delete(this.animal.id).subscribe(() => {
      this.animalv2.showMessage('Animal deletado do sistema com sucessso!');
      this.router.navigate(['/animallistv2']);
    });
  }

  cancel(): void {
    this.router.navigate(['/animallistv2']);
  }
}
