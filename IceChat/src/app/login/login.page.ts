import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: any;
  senha: any;

  link: any = "http://localhost/aplicativo/select.php?";
  
  dados:any = [];

  constructor(private http: HttpClient, private rota: Router) { }

  ngOnInit() {
  }

  logar(){
    
    this.http.get(this.link + "email="+this.email+ "&senha="+this.senha).subscribe(data=>{
      this.dados = data;

      localStorage.setItem("codigo",this.dados[0]['codigo']);
      localStorage.setItem("nome",this.dados[0]['nome']);
      localStorage.setItem("email",this.dados[0]['email']);
      localStorage.setItem("foto",this.dados[0]['foto']);

      console.log(this.dados[0]['status'])
      if (this.dados[0]['status'] == "ok")
      {
        this.rota.navigateByUrl("/painel")
      }
      else
      {
        alert("não ok");
      }
    })
  }
}
