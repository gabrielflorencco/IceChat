import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.page.html',
  styleUrls: ['./painel.page.scss'],
})
export class PainelPage implements OnInit {

  nome:any;
  email:any;
  
  constructor(private rota: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.nome = localStorage.getItem("nome");
    this.email = localStorage.getItem("email");
  }

  sair(){
    localStorage.removeItem("nome");
    localStorage.removeItem("email");
    localStorage.removeItem("foto");
    localStorage.removeItem("codigo");

    this.rota.navigateByUrl("/login");
  }
}
