import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Moeda {
  nome: string;
  ultimaHora: number
  vinteQuatroHoras: number
  seteDias: number
  trintaDias:number
  precoAtual: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  listaMoedas: Moeda[] = [];
  titulos: string[] = [
    '#',
    'Moeda',
    'Preço Atual',
    'Preço 1h',
    'Preço 24h',
    'Preço 7d',
    'Preço 30d'
  ]

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Moeda[]>(
        'http://localhost:8080/consulta-cripto/listaCriptosP?chaveApi=password'
      )
      .subscribe(
        (res) => {
          console.log(res);
          this.listaMoedas = res
        },
        (err) => console.log(err)
      );
  }
}
