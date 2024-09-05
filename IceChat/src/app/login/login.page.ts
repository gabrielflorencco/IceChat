import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: any;
  senha: any;

  link: any = "http://localhost/aplicativo/select.php?";
  foto: any = "../../assets/placeholder-perfil.png";
  dados:any = [];

  constructor(private http: HttpClient, private rota: Router, private toast: ToastController) { }

  ngOnInit() {
  }

  async chamarToast(position: 'top' | 'middle' | 'bottom', mensagem: string) {
    const toast = await this.toast.create({
      message: mensagem,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  logar(){
    if (this.email === undefined || this.email === "" || this.email === null){
      this.chamarToast('bottom', "É necessário digitar um email, amigo!")
      return;
    }

    if (this.senha === undefined || this.senha === "" || this.senha === null){
      this.chamarToast('bottom', "É necessário digitar uma senha, amigo!")
      return;
    }

    this.http.get(this.link + "email="+this.email+ "&senha="+this.senha).subscribe(data=>{
      this.dados = data;

      localStorage.setItem("codigo",this.dados[0]['codigo']);
      localStorage.setItem("nome",this.dados[0]['nome']);
      localStorage.setItem("email",this.dados[0]['email']);
      // localStorage.setItem("foto",this.dados[0]['foto']);

      console.log(this.dados[0]['status'])
      if (this.dados[0]['status'] == "ok")
      {
        this.rota.navigateByUrl("/painel");
      }
    },
    error => {
      this.chamarToast('bottom', "Não foi possivel realizar o login!");
    })
  }
}
