import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Animal {
  id?: number;
  nome: String;
  especie: String;
  local: String;
}

@Injectable({
  providedIn: 'root',
})
export class Animallistv2Service {
  baseUrl = 'http://localhost:3001/animais';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  create(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.baseUrl, animal);
  }

  read(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.baseUrl);
  }

  readById(id: string): Observable<Animal> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Animal>(url);
  }

  update(animal: Animal): Observable<Animal> {
    const url = `${this.baseUrl}/${animal.id}`;
    return this.http.put<Animal>(url, animal);
  }
}
