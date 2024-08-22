import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome: any;
  email: any;
  senha: any;

  link: any = "http://localhost/aplicativo/insert.php?";
  constructor(private http: HttpClient) {}

  gravar(){
    this.http.get(this.link+"nome="+this.nome+"&email="+this.email+"&senha="+this.senha).subscribe(res=>{
      console.log(res)
    })
   
  }
}
