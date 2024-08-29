import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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
  constructor(private http: HttpClient, private toast: ToastController, private rota: Router) {}

  async chamarToast(position: 'top' | 'middle' | 'bottom', mensagem: string) {
    const toast = await this.toast.create({
      message: mensagem,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  gravar(){
    if (this.nome === undefined || this.nome === "" || this.nome === null){
      this.chamarToast('bottom', "É necessário digitar um email, amigo!")
      return;
    }

    if (this.email === undefined || this.email === "" || this.email === null){
      this.chamarToast('bottom', "É necessário digitar um email, amigo!")
      return;
    }

    if (this.senha === undefined || this.senha === "" || this.senha === null){
      this.chamarToast('bottom', "É necessário digitar uma senha, amigo!")
      return;
    }

    this.http.get(this.link+"nome="+this.nome+"&email="+this.email+"&senha="+this.senha).subscribe(res=>{
      console.log(res)
    })

    localStorage.setItem("nome",this.nome);
    localStorage.setItem("email",this.email);

    this.rota.navigateByUrl("/painel");
  }
}
