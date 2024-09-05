import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.page.html',
  styleUrls: ['./painel.page.scss'],
})
export class PainelPage implements OnInit {

  nome:any;
  email:any;
  foto: any = "../../assets/placeholder-perfil.png";

  constructor(private rota: Router) { }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.nome = localStorage.getItem("nome");
    this.email = localStorage.getItem("email");
    if (localStorage.getItem("foto"))
      if(localStorage.getItem("foto") != "null")
        this.foto = localStorage.getItem("foto");
  }

  sair(){
    localStorage.removeItem("nome");
    localStorage.removeItem("email");
    localStorage.removeItem("foto");
    localStorage.removeItem("codigo");

    this.rota.navigateByUrl("/login");
  }

  tirarFoto(){
    const takePicture = async () => {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      var imageUrl = image.webPath;

      this.foto = imageUrl;
    };
    takePicture();
  }
}
