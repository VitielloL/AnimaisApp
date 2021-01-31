import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Animal {
  _id: String;
  nome: String;
  especie: String;
  local: String;
}

export interface animalUnico {
  animal: Animal;
}

export interface CadastroAnimal {
  animais: Animal[];
}

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  url: string = environment.apiURL + '/animal';
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  read(params?): Observable<CadastroAnimal> {
    return this.http.get<CadastroAnimal>(this.url, { params: params });
  }

  read1Animal(idUnico): Observable<animalUnico> {
    return this.http.get<animalUnico>(this.url + '/' + idUnico);
  }

  create(body): Observable<CadastroAnimal> {
    return this.http.post<CadastroAnimal>(this.url, body);
  }
  //delete no service e no ts
  delete(id) {
    return this.http.delete<animalUnico>(`${this.url}/${id}/delete`);
  }
  update(id, body) {
    return this.http.put<animalUnico>(`${this.url}/${id}`, body);
  }
}
