import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-provided',
  templateUrl: './provided.page.html',
  styleUrls: ['./provided.page.scss'],
})
export class ProvidedPage implements OnInit {
  public lista_servicos = new Array<Servico>();  
  constructor(private router: Router) {
    this.lista_servicos.push(new Servico('Construção','Pedreiro', 'Felipe Construções', 25)); 
    this.lista_servicos.push(new Servico('Construção','Ajudante', 'Andrade Gutierrez', 34));  
    this.lista_servicos.push(new Servico('Estética','Manicure', 'Mônica Beleuza', 20));
    this.lista_servicos.push(new Servico('Educação','Professor Particular', 'The Game Of Cálculos', 35));     
  }

  ngOnInit() {
  }
  cadastrarServico(){
    this.router.navigate(['./home']);
  }
}

class Servico{
  private categoria: String;
  private sub_categoria: String;
  private nome: String;
  private preco: number;

  constructor(cat, sub, n, p ){
      this.categoria = cat;
      this.sub_categoria = sub;
      this.nome = n;
      this.preco = p;
  }


} 